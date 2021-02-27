<?php

namespace App\Models;

use ByteUnits\Metric;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;
use TeamTNT\TNTSearch\Indexer\TNTIndexer;
use \Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;

class File extends Model
{
    use Searchable, SoftDeletes, Sortable, HasFactory;

    public $public_access = null;

    protected $guarded = [
        'id'
    ];

    protected $appends = [
        'file_url'
    ];

    protected $casts = [
        'metadata' => 'array',
    ];

    /**
     * Sortable columns
     *
     * @var string[]
     */
    public $sortable = [
        'name',
        'created_at',
    ];

    public $incrementing = false;

    protected $keyType = 'string';

    /**
     * Set routes with public access
     *
     * @param $token
     */
    public function setPublicUrl($token)
    {
        $this->public_access = $token;
    }

    /**
     * Format created at date
     *
     * @return string
     */
    public function getCreatedAtAttribute()
    {
        return format_date(set_time_by_user_timezone($this->attributes['created_at']), __('vuefilemanager.time'));
    }

    /**
     * Form\a\t created at date reformat
     *
     * @return string
     */
    public function getDeletedAtAttribute()
    {
        if (!$this->attributes['deleted_at']) return null;

        return format_date(set_time_by_user_timezone($this->attributes['deleted_at']), __('vuefilemanager.time'));
    }

    /**
     * Format fileSize
     *
     * @return string
     */
    public function getFilesizeAttribute()
    {
        return Metric::bytes($this->attributes['filesize'])->format();
    }

    /**
     * Format thumbnail url
     *
     * @return string
     */
    public function getThumbnailAttribute()
    {
        // Get thumbnail from external storage
        if ($this->attributes['thumbnail'] && is_storage_driver(['s3', 'spaces', 'wasabi', 'backblaze'])) {

            return Storage::temporaryUrl('file-manager/' . $this->attributes['thumbnail'], now()->addHour());
        }

        // Get thumbnail from local storage
        if ($this->attributes['thumbnail']) {

            // Thumbnail route
            $route = route('thumbnail', ['name' => $this->attributes['thumbnail']]);

            if ($this->public_access) {
                return $route . '/public/' . $this->public_access;
            }

            return $route;
        }

        return null;
    }

    /**
     * Format file url
     *
     * @return string
     */
    public function getFileUrlAttribute()
    {
        // Get file from external storage
        if (is_storage_driver(['s3', 'spaces', 'wasabi', 'backblaze'])) {

            $file_pretty_name = is_storage_driver('backblaze')
                ? Str::snake(mb_strtolower($this->attributes['name']))
                : get_pretty_name($this->attributes['basename'], $this->attributes['name'], $this->attributes['mimetype']);

            $header = [
                "ResponseAcceptRanges"       => "bytes",
                "ResponseContentType"        => $this->attributes['mimetype'],
                "ResponseContentLength"      => $this->attributes['filesize'],
                "ResponseContentRange"       => "bytes 0-600/" . $this->attributes['filesize'],
                'ResponseContentDisposition' => 'attachment; filename=' . $file_pretty_name,
            ];

            return Storage::temporaryUrl('file-manager/' . $this->attributes['basename'], now()->addDay(), $header);
        }

        // Get thumbnail from local storage
        $route = route('file', ['name' => $this->attributes['basename']]);

        if ($this->public_access) {
            return $route . '/public/' . $this->public_access;
        }

        return $route;
    }

    /**
     * Index file
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();
        $name = Str::slug($array['name'], ' ');

        return [
            'id'         => $this->id,
            'name'       => $name,
            'nameNgrams' => utf8_encode((new TNTIndexer)->buildTrigrams(implode(', ', [$name]))),
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(Folder::class, 'folder_id', 'unique_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function folder()
    {
        return $this->hasOne(Folder::class, 'unique_id', 'folder_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function shared()
    {
        return $this->hasOne(Share::class, 'item_id', 'unique_id');
    }

    /**
     * Model events
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string)Str::uuid();
        });
    }
}