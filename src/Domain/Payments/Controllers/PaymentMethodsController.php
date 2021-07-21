<?php
namespace Domain\Payments\Controllers;

use Auth;
use Illuminate\Http\Response;
use Laravel\Cashier\PaymentMethod;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Domain\Subscriptions\Services\StripeService;
use Domain\Payments\Resources\PaymentCardResource;
use Domain\Payments\Resources\PaymentCardCollection;
use Domain\Payments\Resources\PaymentDefaultCardResource;
use Domain\Payments\Requests\RegisterNewPaymentMethodRequest;

class PaymentMethodsController extends Controller
{
    public function __construct(
        private StripeService $stripe,
    ) {
    }

    /**
     * Get user payment methods grouped by default and others
     */
    public function index(): array
    {
        $user = Auth::user();

        if (! $user->hasPaymentMethod()) {
            return abort(204, 'User don\'t have any payment methods');
        }

        $slug_payment_methods = 'payment-methods-user-' . $user->id;
        $slug_default_payment_method = 'default-payment-methods-user-' . $user->id;

        if (Cache::has($slug_payment_methods) && Cache::has($slug_default_payment_method)) {
            $defaultPaymentMethod = Cache::get($slug_default_payment_method);
            $paymentMethodsMapped = Cache::get($slug_payment_methods);
        } else {
            // Get default payment method
            $defaultPaymentMethod = Cache::rememberForever($slug_default_payment_method, function () use ($user) {
                $defaultPaymentMethodObject = $user->defaultPaymentMethod();

                return $defaultPaymentMethodObject instanceof PaymentMethod
                    ? $defaultPaymentMethodObject->asStripePaymentMethod()
                    : $defaultPaymentMethodObject;
            });

            // filter payment methods without default payment
            $paymentMethodsMapped = Cache::rememberForever($slug_payment_methods, function () use ($defaultPaymentMethod, $user) {
                $paymentMethods = $user->paymentMethods()->filter(function ($paymentMethod) use ($defaultPaymentMethod) {
                    return $paymentMethod->id !== $defaultPaymentMethod->id;
                });

                // Get payment methods
                return $paymentMethods->map(function ($paymentMethod) {
                    return $paymentMethod->asStripePaymentMethod();
                })->values()->all();
            });
        }

        if (! $user->card_brand || ! $user->stripe_id || is_null($paymentMethodsMapped) && is_null($paymentMethodsMapped)) {
            return [
                'default' => null,
                'others'  => [],
            ];
        }

        return [
            'default' => $defaultPaymentMethod instanceof PaymentMethod
                ? new PaymentCardResource($defaultPaymentMethod)
                : new PaymentDefaultCardResource($defaultPaymentMethod),
            'others' => new PaymentCardCollection($paymentMethodsMapped),
        ];
    }

    /**
     * Update default payment method
     */
    public function update(string $id): Response
    {
        $user = Auth::user();

        // Check if is demo
        abort_if(is_demo_account('howdy@hi5ve.digital'), 204, 'Done.');

        // Update DefaultPayment Method
        $user->updateDefaultPaymentMethod($id);

        // Sync default payment method
        $user->updateDefaultPaymentMethodFromStripe();

        // Clear cached payment methods
        cache_forget_many([
            "payment-methods-user-{$user->id}",
            "default-payment-methods-user-{$user->id}",
        ]);

        return response('Done', 204);
    }

    /**
     * Register new payment method for user
     */
    public function store(RegisterNewPaymentMethodRequest $request): Response
    {
        // Get user
        $user = Auth::user();

        // Check if is demo
        if (is_demo_account($user->email)) {
            return response('Done', 201);
        }

        // Register new payment method
        $this->stripe->registerNewPaymentMethod($request, $user);

        return response('Done', 201);
    }

    /**
     * Delete user payment method
     */
    public function delete($id): Response
    {
        $user = Auth::user();

        // Check if is demo
        abort_if(is_demo_account($user->email), 204, 'Done.');

        // Get payment method
        $paymentMethod = $user->findPaymentMethod($id);

        // Delete payment method
        $paymentMethod->delete();

        // Sync default payment method
        $user->updateDefaultPaymentMethodFromStripe();

        // Clear cached payment methods
        cache_forget_many([
            "payment-methods-user-{$user->id}",
            "default-payment-methods-user-{$user->id}",
        ]);

        return response('Done!', 204);
    }
}