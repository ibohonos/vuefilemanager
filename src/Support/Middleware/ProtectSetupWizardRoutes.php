<?php

namespace Support\Middleware;

use Closure;
use Doctrine\DBAL\Driver\PDOException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Schema;

class ProtectSetupWizardRoutes
{
    /**
     * Prevent access for setup wizard controllers after initial app installation.
     */
    public function handle(Request $request, Closure $next): mixed
    {
        try {
            // Check database connections
            DB::getPdo();

            // Get setup_wizard status
            if (Schema::hasTable('settings') && get_setting('setup_wizard_success')) {
                return response('Gone', 410);
            }

            return $next($request);

        } catch (PDOException $e) {
            return $next($request);
        }
    }
}