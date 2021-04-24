<?php

use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\App\SetupWizardController;
use App\Http\Controllers\App\AppFunctionsController;
use App\Http\Controllers\Sharing\BrowseShareController;
use App\Http\Controllers\Subscription\StripeWebhookController;

Route::get('/invoice', function () {
    return view('oasis.invoices.invoice')
        ->with('invoice', \App\Models\Oasis\Invoice::first())
        ->with('user', \App\Models\User::whereEmail('howdy@hi5ve.digital')->first());
});

Route::post('/stripe/webhook', [StripeWebhookController::class, 'handleWebhook']);
Route::post('/admin-setup', [SetupWizardController::class, 'create_admin_account']);

Route::get('/translations/{lang}', [AppFunctionsController::class, 'get_translations']);

// Get user invoice from stripe service
Route::get('/invoice/{customer}/{token}', [InvoiceController::class, 'show'])->middleware(['auth:sanctum']);

// Get og site for web crawlers
if (Crawler::isCrawler()) {
    Route::get('/share/{shared}', [AppFunctionsController::class, 'og_site']);
} else {
    Route::get('/share/{shared}', [BrowseShareController::class, 'index']);
}

// Show index.blade
Route::get('/{any?}', [AppFunctionsController::class, 'index'])->where('any', '.*');
