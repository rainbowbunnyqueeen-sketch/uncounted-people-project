# Why We Chose Not to Build a Chat Feature

This document explains why the original "Chattery" chat room idea was set aside
in favour of the System Card. This is not a permanent decision — it is a
considered one, and the reasons are worth understanding.

---

## The Safety Problem

The Uncounted People community includes minors and people dealing with trauma,
dissociation, and mental health challenges. This makes safety in an open chat
environment much harder than on a typical website.

**Real-time chat is very difficult to moderate.**
In a live chat room, harmful messages appear instantly. A moderator — in this
case, Ivy or Andrew — would need to be watching at all times to catch and
remove them. That is not realistic for two people running a class project,
or even for a small volunteer team.

**Automated moderation is imperfect.**
Tools that scan messages for harmful content (slurs, threats, self-harm
language, etc.) are helpful but not reliable enough on their own. They miss
things. They also sometimes block messages that are not harmful at all. For
a community that deals with sensitive topics as part of everyday life, a
hair-trigger automated filter would block legitimate conversations constantly.

**Anonymity creates risk.**
Open chat rooms attract bad actors. Without strong identity verification —
which is its own complex and expensive problem — there is no reliable way to
keep out people who want to harass, troll, or harm vulnerable users.

**Minors require extra protection.**
Any platform that allows minors to chat with strangers carries legal and
ethical responsibilities around safeguarding. These are taken seriously for
a reason, and they are genuinely complex to implement correctly.

---

## The Technical Problem

Even setting safety aside, building a reliable chat system is significantly
more complex than building the System Card:

- **Real-time infrastructure** — messages need to appear instantly for all
  users simultaneously, which requires a different (and more expensive) type
  of server connection than a normal website uses.

- **Message history and storage** — every message needs to be stored,
  searchable, and retrievable. At scale this grows quickly.

- **User accounts and identity** — chat requires knowing who said what, which
  means robust account management including the ability to ban users.

- **Abuse reporting** — users need a way to flag harmful content for review,
  and someone needs to action those reports.

Each of these is a project in itself. The System Card, by contrast, is
private by design — it has no open interaction between strangers, so almost
none of these problems apply.

---

## The Bottom Line

The System Card does something a chat room cannot: it lets systems share
information safely with people they have already chosen to trust. There is
no risk of a stranger saying something harmful, because strangers cannot
find the card unless they are given the link directly.

Chat can always be added later, once the project has grown, has a moderation
team, and has the infrastructure to support it safely. Building it now, for
a class project deadline, would mean building it badly — and a badly built
chat on a site for vulnerable people is worse than no chat at all.
