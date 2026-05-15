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
          <Link href="/team" className="text-amaryllis font-medium">Team</Link>
          <Link href="/login" className="bg-amaryllis text-white px-4 py-1.5 rounded-lg hover:bg-amaryllis-dark transition-colors">
            System Card
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-amaryllis-bg flex flex-col">
      <Nav />

      <main className="max-w-2xl mx-auto px-6 py-12 flex-1">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Meet the Team</h1>
          <p className="text-gray-500">The people behind Uncounted People.</p>
        </div>

        <div className="space-y-6">

          {/* ── Ivy ── */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amaryllis flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                I
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Ivy B.</h2>
                <p className="text-sm text-amaryllis mb-4">she/they · Co-founder</p>
                {/* ✏️  Ivy — this is your bio from the README, edit it however you like */}
                <p className="text-gray-600 leading-relaxed">
                  I am 14 years old and in middle school with an ambition to help educate
                  others. I have ADHD, sensory processing disorder, and anxiety. My goal
                  with this website is to help at least five people.
                </p>
              </div>
            </div>
          </div>

          {/* ── Andrew ── */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amaryllis flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                A
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Andrew S.</h2>
                <p className="text-sm text-amaryllis mb-4">he/it · Co-founder</p>
                {/* ✏️  Andrew — this is your bio from the README, edit it however you like */}
                <p className="text-gray-600 leading-relaxed">
                  Hello! I&apos;m Andrew — the 13-year-old co-founder of Uncounted People.
                  I am a system of 30+ alters, and want to reach out and support the plural
                  community. Our original wish was to be similar to the now-shutdown Simply
                  Plural, a popular app that allowed systems to organise profiles and keep
                  track of everything. Due to a quickly approaching deadline, we brought it
                  down to an educational site along with a system card. Despite this, I hope
                  people can find it useful. :]
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        Uncounted People — built by Ivy B. &amp; Andrew S.
      </footer>
    </div>
  )
}
