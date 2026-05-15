# Uncounted People — System Card Architecture

## High Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        VERCEL (hosting)                      │
│                                                              │
│  ┌───────────────────────────┐  ┌────────────────────────┐  │
│  │   DASHBOARD (private)     │  │  SYSTEM CARD (public)  │  │
│  │  • Edit system profile    │  │  • System name/pronouns│  │
│  │  • Add/edit alters        │  │  • Current fronter(s)  │  │
│  │  • Mark who's fronting    │  │  • Visible alter list  │  │
│  │  • Generate share link    │  │  • Last updated time   │  │
│  └─────────────┬─────────────┘  └───────────┬────────────┘  │
└────────────────┼─────────────────────────────┼──────────────┘
                 │                             │
                 └──────────┬──────────────────┘
                            │ reads / writes
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                        SUPABASE                              │
│                                                              │
│  ┌────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │    AUTH    │  │   DATABASE   │  │   DATABASE           │ │
│  │            │  │   systems    │  │   alters             │ │
│  │ email +    │  │  • name      │  │  • name              │ │
│  │ password   │  │  • pronouns  │  │  • pronouns / role   │ │
│  │            │  │  • share_    │  │  • description       │ │
│  │            │  │    token     │  │  • color             │ │
│  └────────────┘  │  • theme     │  │  • is_visible        │ │
│                  └──────────────┘  │  • is_fronting       │ │
│                                    └──────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## User Journeys

```
  SYSTEM MEMBER                       TRUSTED PERSON
       │                                    │
       │ signs up / logs in                 │ gets link via DM or text
       ▼                                    ▼
   Dashboard                     uncounted-people.vercel.app
       │                              /s/[random-token]
       ├── edits system profile            │
       ├── adds alters                     ▼
       ├── marks who is fronting     System Card page
       └── copies share link         (no login needed,
            │                         no account required)
            └──────────────────────────────┘
                    sends to trusted person
```

## Key Design Decisions

- **Vercel** hosts everything — the private dashboard and the public card are the same
  Next.js app, just different pages.
- **Supabase Auth** and **Supabase Database** are independent — Auth manages who is
  logged in, the Database stores all system and alter data.
- **The public card is read-only** — a viewer with the link can never modify anything.
- **The share token is the only bridge** between private and public. No token, no access.
  If a link is ever shared somewhere it shouldn't be, the system member can regenerate
  their token and the old link immediately stops working.
