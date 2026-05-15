import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amaryllis-bg flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-lg">
          <div className="text-6xl mb-6">🌺</div>

          <h1 className="text-3xl font-bold text-amaryllis-dark mb-2">
            Uncounted People
          </h1>
          <p className="text-lg text-amaryllis mb-4">System Card</p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            A safe, private space for plural systems to organise their information
            and share it with the people they trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/login?mode=signup"
              className="bg-amaryllis text-white px-6 py-3 rounded-xl font-medium hover:bg-amaryllis-dark transition-colors"
            >
              Create an account
            </Link>
            <Link
              href="/login"
              className="border border-amaryllis text-amaryllis px-6 py-3 rounded-xl font-medium hover:bg-amaryllis-light transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center text-xs text-gray-400 py-6">
        Uncounted People — a safe space for systems, by Ivy B. &amp; Andrew S.
      </footer>
    </div>
  )
}
