import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - AHA Innovations',
  description: 'Simple, transparent pricing for teams of all sizes',
};

// Server component with SSR
export default async function PricingPage() {
  // Simulate server-side data fetching
  const serverTimestamp = new Date().toISOString();
  
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        'Up to 5 users',
        '10 GB storage',
        'Basic analytics',
        'Email support',
        'Mobile apps',
        'API access'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Best for growing teams and businesses',
      features: [
        'Up to 25 users',
        '100 GB storage',
        'Advanced analytics',
        'Priority support',
        'Mobile apps',
        'API access',
        'Custom integrations',
        'Team collaboration'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited users',
        'Unlimited storage',
        'Advanced analytics',
        '24/7 dedicated support',
        'Mobile apps',
        'API access',
        'Custom integrations',
        'Team collaboration',
        'SLA guarantee',
        'Custom onboarding'
      ],
      highlighted: false
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Choose the perfect plan for your team
          </p>
          <p className="text-sm text-green-200">
            Server-rendered at: {serverTimestamp}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted 
                    ? 'bg-blue-600 text-white shadow-2xl transform scale-105' 
                    : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg">{plan.period}</span>
                </div>
                <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`mr-2 ${plan.highlighted ? 'text-yellow-400' : 'text-green-500'}`}>✓</span>
                      <span className={plan.highlighted ? 'text-blue-50' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                Can I change plans later?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                What payment methods do you accept?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                Is there a free trial?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! All plans come with a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-zinc-600 dark:text-zinc-400">
            Our team is here to help you find the right plan
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </section>
    </main>
  );
}
