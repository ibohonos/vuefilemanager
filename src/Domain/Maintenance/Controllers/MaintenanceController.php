<?php
namespace App\Http\Controllers\App;

use Gate;
use Artisan;
use Domain\Settings\Models\Language;
use Illuminate\Http\Response;
use Domain\SetupWizard\Services\LanguageService;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;

class MaintenanceController extends Controller
{
    /**
     *  Start maintenance mode
     */
    public function up()
    {
        // Check admin permission
        Gate::authorize('maintenance');

        $command = Artisan::call('up');

        if ($command === 0) {
            echo 'System is in production mode';
        }
    }

    /**
     *  End maintenance mode
     */
    public function down()
    {
        // Check admin permission
        Gate::authorize('maintenance');

        $command = Artisan::call('down');

        if ($command === 0) {
            echo 'System is in maintenance mode';
        }
    }

    /**
     * Get new language translations from default translations
     * and insert it into database
     *
     * @return Application|ResponseFactory|Response
     */
    public function upgrade_translations()
    {
        // Check admin permission
        Gate::authorize('maintenance');

        resolve(LanguageService::class)
            ->upgrade_language_translations();

        return response('Done.', 201);
    }

    /**
     * @return int|mixed
     */
    public function upgrade_database()
    {
        // Check admin permission
        Gate::authorize('maintenance');

        $command = Artisan::call('migrate', [
            '--force' => true,
        ]);

        if ($command === 0) {
            echo 'Operation was successful.';
        }

        if ($command === 1) {
            echo 'Operation failed.';
        }

        return $command;
    }
}
