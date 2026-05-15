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
          <Link href="/resources" className="text-amaryllis font-medium">Resources</Link>
          <Link href="/team" className="text-gray-600 hover:text-amaryllis transition-colors">Team</Link>
          <Link href="/login" className="bg-amaryllis text-white px-4 py-1.5 rounded-lg hover:bg-amaryllis-dark transition-colors">
            System Card
          </Link>
        </nav>
      </div>
    </header>
  )
}

const terms: { term: string; definition: string }[] = [
  {
    term: 'Dissociation',
    definition:
      'An unhealthy coping mechanism where somebody disconnects from their thoughts, memories, feelings, body, etc. It often feels as if you are watching a movie of your life instead of living it. It can cause memory and time loss if intense enough.',
  },
  {
    term: 'Plurality',
    definition:
      'Multiple people or alters sharing one body. There are many variants of plurality and the definition is flexible.',
  },
  {
    term: 'Systems',
    definition:
      'A somewhat stricter definition of plurality, often meaning distinct separate people.',
  },
  {
    term: 'Median',
    definition:
      'Plurality where alters are less distinct and often seen as in the middle of being plural and a singlet.',
  },
  {
    term: 'Traumagenic',
    definition:
      'A system with an origin of trauma. These systems are typically disordered, but not always.',
  },
  {
    term: 'Endogenic',
    definition:
      'A system with an origin other than trauma. This includes willogenic systems, neurogenic systems, and more.',
  },
  {
    term: 'Syscourse',
    definition: 'The debate on whether or not endogenic systems are valid.',
  },
  {
    term: 'DID',
    definition:
      'Dissociative Identity Disorder, requiring the following symptoms to be diagnosed: 2 or more distinct alters, amnesia between alters, and distress. These must not be better explained by medication or other medical conditions in order to be diagnosed.',
  },
  {
    term: 'OSDD-1a',
    definition:
      'Other Specified Dissociative Disorder 1a. A dissociative disorder where there is significant amnesia with a lack of distinct alters.',
  },
  {
    term: 'OSDD-1b',
    definition:
      'Other Specified Dissociative Disorder 1b. A dissociative disorder where alters are distinct and there is little to no amnesia.',
  },
  {
    term: 'OSDD-2',
    definition:
      'Other Specified Dissociative Disorder 2. A dissociative disorder caused by environments of extreme control and classified by intense disturbance in identity. Not usually considered a plural disorder.',
  },
  {
    term: 'OSDD-3',
    definition:
      'Other Specified Dissociative Disorder 3. A dissociative disorder classified by dissociative reactions to or caused by recent stress or trauma, typically lasting around a month. Not considered a plural disorder.',
  },
  {
    term: 'OSDD-4',
    definition:
      'Other Specified Dissociative Disorder 4. A dissociative disorder classified by dissociative trances, such as a lack of awareness of surroundings, transient paralysis, and unresponsiveness. Not considered a plural disorder.',
  },
  {
    term: 'Headspace',
    definition:
      'A place in the mind where alters can go and interact with each other and the environment. Also known as inner world or wonderland. Not all systems have a headspace. Some singlets may have a headspace.',
  },
  {
    term: 'Alters',
    definition:
      'Different identities or people in one body. Also known as parts, headmates, brainmates, etc.',
  },
  {
    term: 'Fragments',
    definition: 'Alters that are "unfinished" in a way. Often only partially formed.',
  },
  {
    term: 'Collective Name',
    definition:
      'A name used by the entire system when choosing not to go by individual names.',
  },
  {
    term: 'Collective Pronouns',
    definition:
      'A set of pronouns used by the entire system when choosing not to go by individual pronouns.',
  },
  {
    term: 'Roles',
    definition:
      'What an alter may do in or out of the system. This could be helpful, harmful, or neither.',
  },
  {
    term: 'Fronting',
    definition:
      'The act of an alter being in control of the body and interacting with the physical world.',
  },
  {
    term: 'Co-Fronting',
    definition:
      'The act of an alter being in front with another alter, often not being in complete control.',
  },
  {
    term: 'Switching',
    definition:
      'The act of a fronting alter leaving front and being replaced by another. In disordered systems switches can cause dissociation, amnesia, headaches, blurring of vision, and confusion.',
  },
  {
    term: 'Proxies',
    definition:
      'A digital tool that allows alters to create a mini account tied to a main account, allowing different alters to use a proxy tag and present as themselves online. A common example is Pluralkit and Tupperbox on Discord.',
  },
  {
    term: 'Tulpamancy',
    definition:
      'A spiritual practice where one creates an alter known as a Tulpa over time and effort.',
  },
  {
    term: 'Willowmancy',
    definition:
      'A non-spiritual practice where one creates an alter over time and effort. "Willowing" referring to willing an alter into existence. For some this is a quick process; for others it may take years.',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-amaryllis-bg flex flex-col">
      <Nav />

      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 space-y-12">

        {/* ── Page title ── */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resources &amp; Information</h1>
          <p className="text-gray-500">
            Terminology, our community stance, and links to trusted resources.
          </p>
        </div>

        {/* ── Definitions ── */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Definitions &amp; Terms</h2>
          {/* ✏️  Ivy — add, remove, or edit terms here */}
          <dl className="space-y-5">
            {terms.map(({ term, definition }) => (
              <div key={term}>
                <dt className="font-semibold text-amaryllis-dark">{term}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed mt-0.5">{definition}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Syscourse stance ── */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Uncounted People&apos;s Stance on Syscourse
          </h2>
          {/* ✏️  Ivy — this is your text from the README, feel free to edit */}
          <p className="text-gray-600 leading-relaxed">
            Uncounted People is completely neutral on syscourse and endogenic systems.
            There is already not enough scientific research on disordered and traumagenic
            systems, let alone endogenic systems. We have little to no way of knowing
            whether endogenic systems exist or not, and even if they do not, there is
            something else causing these experiences. You are absolutely allowed to come
            here and interact with members if you are anti-endo, pro-endo, or anything
            in between — we just ask that you be respectful. With experts already divided
            on whether even dissociative disorders are real, everyone in the community
            needs the support they can get.
          </p>
        </section>

        {/* ── Helpful websites ── */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Helpful Websites</h2>
          {/* ✏️  Ivy — add more links here as you find them */}
          <div className="space-y-4">
            <div>
              <a
                href="https://powertotheplurals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amaryllis hover:underline"
              >
                Power to the Plurals
              </a>
              <p className="text-sm text-gray-500 mt-0.5">
                A highly educational and pro-endo website with information on helpful
                professionals, terms, and diagnosis.
              </p>
            </div>
            <div>
              <a
                href="https://pluralpedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amaryllis hover:underline"
              >
                Pluralpedia
              </a>
              <p className="text-sm text-gray-500 mt-0.5">
                A pro-endo term library with over 2,000 entries, run and edited by the community.
              </p>
            </div>
            <div>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10950423/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-amaryllis hover:underline"
              >
                NIH Article on Dissociative Identity Disorder
              </a>
              <p className="text-sm text-gray-500 mt-0.5">
                An official health article on DID from the National Institutes of Health.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        Uncounted People — built by Ivy B. &amp; Andrew S.
      </footer>
    </div>
  )
}
