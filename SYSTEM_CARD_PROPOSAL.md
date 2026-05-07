# Uncounted People — System Card Feature Proposal

## What We're Building

A web feature called the **System Card** — a personal, private profile page for plural systems.
It is inspired by the now-shutdown app Simply Plural, and fills the same gap: a place where
systems can organize their information and share it with people they trust.

This replaces the original "Chattery" chat room idea with something more useful, more unique,
and safer for the community.

---

## The Problem It Solves

Since Simply Plural shut down, there is no good free tool for systems to:
- Keep track of their alters in one place
- Show a partner, friend, or therapist who is currently fronting
- Share system information without handing over a whole explanation every time

The System Card solves all three.

---

## How It Works (User Journey)

### 1. A system creates an account
They sign up with an email and password. One account = one system.

### 2. They set up their System Profile
In a private dashboard they fill in:
- Their **collective name** and **collective pronouns**
- A short **description** of their system
- A **color or theme** for their card (Amaryllis-inspired options)

### 3. They add their Alters
For each alter they can add:
- Name
- Pronouns
- Role (protector, host, little, etc.)
- A short description
- A color

They can also mark alters as **private** so they don't appear on the shared card.

### 4. They mark who is fronting
With one click they update who is currently at front.
Co-fronting (more than one alter at once) is supported.
The card shows when this was last updated so viewers know how current it is.

### 5. They get a private share link
The system gets a unique link that looks like:

```
uncounted-people.vercel.app/s/amaryllis-x7k2p
```

This link is **unguessable** — only people they personally send it to can find it.
There is no public directory. No strangers can browse for profiles.

### 6. Whoever they share it with opens the card
The viewer sees:
- System name, pronouns, and description
- Who is currently fronting and that alter's info
- The list of alters (only the ones marked as visible)
- When the front was last updated

The viewer does **not** need an account. They just open the link.

### 7. If a link is ever shared somewhere it shouldn't be
The system can **regenerate their link** from the dashboard.
The old link immediately stops working.

---

## What Is NOT Included (By Design)

- No public browsing or discovery — safety first
- No real-time chat — keeps the project manageable and avoids moderation complexity
- No direct messaging between users

These could be added later if the project grows beyond a class project.

---

## Technology (Simplified)

| What | Tool | Cost |
|---|---|---|
| Database & accounts | Supabase | Free |
| Website hosting | Vercel | Free |
| Web framework | Next.js | Free / open source |
| Domain name | TBD | ~$10/year or use free Vercel subdomain |

Everything runs on free tiers. No ongoing cost for a proof of concept.

---

## Three Decisions needed from Ivy and Andrew

Before building starts, it would help to know:

1. **Alter fields** — Beyond name, pronouns, role, and description, are there other fields
   that feel important? (e.g. age, favorite color, associated emoji, status/mood)

2. **Theming** — The site is based on the Amaryllis flower. Are there specific colors,
   fonts, or vibes they have in mind for the card design?

3. **Account name** — What should the site/tool be called? "The System Card"?
   Something else?

---

## Timeline (Rough)

For a proof-of-concept class project this is very buildable. A rough order of work:

1. Set up database structure (alter profiles, fronting log, share links)
2. Build the private dashboard (create system, add alters, mark front)
3. Build the public shareable card page
4. Style everything with the Amaryllis theme
5. Test and polish

---

## Summary

The System Card gives plural systems a private, organized place to manage their information
and share it safely with people they trust — exactly what Simply Plural offered, rebuilt as
a free web tool under the Uncounted People project.

It is realistic for a class project timeline, costs nothing to run, and serves a real need
in the community.
