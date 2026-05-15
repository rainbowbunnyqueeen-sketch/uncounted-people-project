import Link from 'next/link'

function Nav() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🌺</span>
          <span className="font-semibold text-gray-800">Uncounted People</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/resources" className="text-gray-600 hover:text-amaryllis transition-colors">Resources</Link>
          <Link href="/team" className="text-gray-600 hover:text-amaryllis transition-colors">Team</Link>
          <Link href="/login" className="bg-amaryllis text-white px-4 py-1.5 rounded-lg hover:bg-amaryllis-dark transition-colors">
            System Card
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amaryllis-bg flex flex-col">
      <Nav />

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="max-w-2xl mx-auto px-6 py-16 text-center">
          <div className="text-5xl mb-6">🌺</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Uncounted People
          </h1>
          {/* ✏️  Ivy — this is the purpose statement from the README, edit freely */}
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            A non-profit, no-syscourse space for systems, plural people, and
            medians alike.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            Our goal is to provide a place to educate people, organise your
            system information privately, and connect with others — building a
            friendly community where everyone is welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/login?mode=signup"
              className="bg-amaryllis text-white px-6 py-3 rounded-xl font-medium hover:bg-amaryllis-dark transition-colors"
            >
              Create your system card
            </Link>
            <Link
              href="/resources"
              className="border border-amaryllis text-amaryllis px-6 py-3 rounded-xl font-medium hover:bg-amaryllis-light transition-colors"
            >
              Learn more
            </Link>
          </div>
        </section>

        {/* ── Page Cards ── */}
        <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4">

          <Link
            href="/resources"
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow group"
          >
            <div className="text-3xl mb-3">📖</div>
            <h2 className="font-semibold text-gray-800 mb-2 group-hover:text-amaryllis transition-colors">
              Resources &amp; Information
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Definitions, terminology, our stance on syscourse, and links to
              helpful websites.
            </p>
          </Link>

          <Link
            href="/team"
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow group"
          >
            <div className="text-3xl mb-3">🫂</div>
            <h2 className="font-semibold text-gray-800 mb-2 group-hover:text-amaryllis transition-colors">
              Meet the Team
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Learn about Ivy and Andrew, the people behind Uncounted People.
            </p>
          </Link>

          <Link
            href="/login"
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow group"
          >
            <div className="text-3xl mb-3">🪪</div>
            <h2 className="font-semibold text-gray-800 mb-2 group-hover:text-amaryllis transition-colors">
              System Card
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Create a private profile for your system and share it with the
              people you trust.
            </p>
          </Link>

        </section>
      </main>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        Uncounted People — built by Ivy B. &amp; Andrew S.
      </footer>
    </div>
  )
}
