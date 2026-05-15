import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amaryllis-bg flex flex-col">

      {/* ── Nav ── */}
      <header className="flex justify-between items-center px-6 py-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌺</span>
          <span className="font-semibold text-gray-800">Uncounted People</span>
        </div>
        <Link href="/login" className="text-sm text-amaryllis hover:underline">
          Sign in
        </Link>
      </header>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            A safe space for plural systems
          </h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Uncounted People lets you create a system card — a private profile
            for your system that you can share with the people you trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/login?mode=signup"
              className="bg-amaryllis text-white px-6 py-3 rounded-xl font-medium hover:bg-amaryllis-dark transition-colors"
            >
              Create a free account
            </Link>
            <Link
              href="/login"
              className="border border-amaryllis text-amaryllis px-6 py-3 rounded-xl font-medium hover:bg-amaryllis-light transition-colors"
            >
              Sign in
            </Link>
          </div>
        </section>

        {/* ── What is a plural system? ── */}
        <section className="bg-white py-14">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is a plural system?
            </h2>
            {/* ✏️  Ivy — feel free to rewrite this in your own words */}
            <p className="text-gray-600 leading-relaxed mb-4">
              A plural system is a group of distinct people — called alters —
              who share one body. This can happen as a result of dissociative
              identity disorder (DID), other dissociative experiences, or simply
              as a natural way of being.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each alter may have their own name, pronouns, personality, and
              role within the system. At any given moment, one or more alters
              may be &ldquo;fronting&rdquo; — meaning they are the one
              interacting with the outside world.
            </p>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="max-w-2xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            How it works
          </h2>
          <div className="space-y-8">

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-amaryllis text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Create your system profile</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Set your system name, collective pronouns, and a short
                  description. Choose a colour that feels right for your system.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-amaryllis text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Add your alters</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Add each alter with their name, pronouns, role, and a
                  description. Choose who is visible on your shared card and
                  who stays private.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-amaryllis text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Share your card</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Your system card lives at a private link that only you control.
                  Share it with friends, family, or therapists — no account
                  needed to view it. Update who&apos;s fronting any time
                  and the card updates instantly.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-white py-14 text-center">
          <div className="max-w-md mx-auto px-6">
            <div className="text-4xl mb-4">🌺</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to get started?
            </h2>
            {/* ✏️  Ivy — you can change this tagline */}
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Free, private, and designed with care for the plural community.
            </p>
            <Link
              href="/login?mode=signup"
              className="bg-amaryllis text-white px-8 py-3 rounded-xl font-medium hover:bg-amaryllis-dark transition-colors"
            >
              Create a free account
            </Link>
          </div>
        </section>

      </main>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        {/* ✏️  Ivy — update this with your class name or teacher if you like */}
        Uncounted People — built by Ivy B. &amp; Andrew S.
      </footer>

    </div>
  )
}
