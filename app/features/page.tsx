import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - AHA Innovations',
  description: 'Explore our powerful features designed to transform your business',
};

// Server component with SSR
export default async function FeaturesPage() {
  // Simulate server-side data fetching
  const serverTimestamp = new Date().toISOString();
  
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance with server-side rendering and edge caching for instant page loads.',
      benefits: ['Sub-second load times', 'Global CDN delivery', 'Automatic optimization']
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
      benefits: ['SOC 2 Type II certified', '256-bit encryption', 'GDPR compliant']
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Real-time insights and detailed analytics to track your growth and performance.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data export']
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Fully customizable interface to match your brand and workflow requirements.',
      benefits: ['White-label options', 'Custom branding', 'API integration']
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Built-in tools for team collaboration with real-time updates and notifications.',
      benefits: ['Real-time collaboration', 'Team workspaces', 'Activity tracking']
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Responsive design that works seamlessly across all devices and screen sizes.',
      benefits: ['iOS & Android apps', 'Offline mode', 'Push notifications']
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful Features
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Everything you need to succeed, built right in
          </p>
          <p className="text-sm text-purple-200">
            Server-rendered at: {serverTimestamp}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-green-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
              Seamless Integrations
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Connect with your favorite tools and services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Slack', 'GitHub', 'Stripe', 'AWS', 'Google', 'Salesforce', 'Zoom', 'Dropbox'].map((integration) => (
              <div 
                key={integration}
                className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center font-semibold text-zinc-900 dark:text-white hover:shadow-lg transition-shadow"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 text-zinc-600 dark:text-zinc-400">
            Start your free trial today and see the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
