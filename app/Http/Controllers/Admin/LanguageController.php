<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\LanguageCollection;
use App\Http\Resources\LanguageResource;
use App\Models\Language;
use App\Http\Controllers\Controller;
use App\Services\DemoService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use App\Http\Requests\Languages\UpdateStringRequest;
use App\Http\Requests\Languages\CreateLanguageRequest;
use App\Http\Requests\Languages\UpdateLanguageRequest;

class LanguageController extends Controller
{
    protected $demo;

    public function __construct()
    {
        $this->demo = resolve(DemoService::class);
    }

    /**
     * Get all languages for admin translate
     *
     * @return array|Application|ResponseFactory|Response
     */
    public function get_languages()
    {
        return response(
            new LanguageCollection(Language::all()), 200
        );
    }

    /**
     * Get all language strings for admin translate
     *
     * @param Language $language
     */
    public function get_language_strings(Language $language)
    {
        return response([
            'current' => $language->languageStrings,
            'default' => get_default_language_strings()
        ], 200);
    }

    /**
     * Create new language
     *
     * @param CreateLanguageRequest $request
     * @return string
     */
    public function create_language(CreateLanguageRequest $request)
    {
        if (is_demo()) {
            return $this->demo->response_with_no_content();
        }

        $language = Language::create([
            'name'   => $request->input('name'),
            'locale' => $request->input('locale')
        ]);

        return response(
            new LanguageResource($language), 201
        );
    }

    /**
     * Update language
     *
     * @param UpdateLanguageRequest $request
     * @param Language $language
     */
    public function update_language(UpdateLanguageRequest $request, Language $language)
    {
        if (is_demo()) {
            return $this->demo->response_with_no_content();
        }

        $language->update(make_single_input($request));

        return response(
            new LanguageResource($language), 201
        );
    }

    /**
     * Update string for language
     *
     * @param UpdateStringRequest $request
     * @param Language $language
     * @return Application|ResponseFactory|Response
     */
    public function update_string(UpdateStringRequest $request, Language $language)
    {
        if (is_demo()) {
            return $this->demo->response_with_no_content();
        }

        $language
            ->languageStrings()
            ->where('key', $request->name)
            ->update([
                'value' => $request->value
            ]);

        cache()->forget("language-strings-{$language->locale}");

        return response('Done', 204);
    }

    /**
     * Delete the language with all children strings
     *
     * @param Language $language
     * @return ResponseFactory|Response
     */
    public function delete_language(Language $language)
    {
        if (is_demo()) {
            return $this->demo->response_with_no_content();
        }

        if ($language->locale === 'en') {
            abort(401, "Sorry, you can't delete default language.");
        }

        $language->delete();

        return response('Done', 204);
    }
}
