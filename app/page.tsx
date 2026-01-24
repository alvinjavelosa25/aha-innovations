// This is a server component by default in Next.js App Router
// Server-side rendering is applied automatically

export default async function Home() {
  // Simulating data fetching on the server
  const serverTimestamp = new Date().toISOString();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to AHA Innovations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building the future with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/features"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
            <p className="text-sm mt-8 text-blue-200">
              Server-rendered at: {serverTimestamp}
            </p>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Fast Performance</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Lightning-fast load times with server-side rendering and optimized delivery.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Secure</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Enterprise-grade security with end-to-end encryption and compliance.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Innovative</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Cutting-edge features powered by the latest technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-zinc-600 dark:text-zinc-400">
            Join thousands of satisfied customers today
          </p>
          <a
            href="/signup"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
