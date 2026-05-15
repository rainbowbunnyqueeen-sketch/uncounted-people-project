# Step 1 — Setting Up Supabase

Supabase is the database and login system for the Uncounted People project.
Think of it as the filing cabinet that stores all system profiles and alter
information safely. This guide walks you through setting it up from scratch.

**Time needed:** about 20 minutes
**What you need:** an email address and a web browser

---

## Part A — Create Your Account and Project

1. Go to **supabase.com** and click **Start your project**
2. Sign up with your email (or with GitHub if you have one)
3. Once logged in, click **New project**
4. Fill in the details:
   - **Name:** `uncounted-people`
   - **Database password:** make a strong password and save it somewhere safe
     (a password manager or a piece of paper you won't lose)
   - **Region:** pick the one closest to where most of your users will be
     (US East is a safe default)
5. Click **Create new project** and wait about 2 minutes while it sets up

You will land on a project dashboard. This is your home base in Supabase.

---

## Part B — Create the Database Tables

This is the most important step. You are going to run the SQL files from the
`supabase/` folder in this project. SQL (Structured Query Language) is the
language databases speak — we use it to create tables and set rules.

1. In the left sidebar, click **SQL Editor**
2. Click **New query** (the `+` button near the top left)
3. Open the file `supabase/schema.sql` from this project
4. Copy the entire contents and paste it into the SQL Editor
5. Click the green **Run** button (or press Ctrl+Enter / Cmd+Enter)
6. You should see a message that says `Success. No rows returned`

Now do the same for the second file:

7. Click **New query** again
8. Open the file `supabase/rls.sql` from this project
9. Copy, paste, and run it the same way

If you see any red error messages, check that you ran `schema.sql` before
`rls.sql` — the order matters.

---

## Part C — Check That It Worked

1. In the left sidebar, click **Table Editor**
2. You should see three tables listed: `systems`, `alters`, `fronting_log`
3. Click on `alters` — you will see the columns we defined:
   name, pronouns, role, description, color, is_visible, is_fronting, and more

If you see those tables, everything worked! 🎉

---

## Part D — Enable Email Authentication

By default Supabase has auth turned on, but we need to double-check one setting.

1. In the left sidebar, click **Authentication**
2. Click **Providers**
3. Make sure **Email** is enabled (toggle should be blue/on)
4. Under **Email**, turn OFF **Confirm email** for now
   (this makes testing easier — you can turn it back on before launch)

---

## Part E — Get Your Project Keys

The app needs two pieces of information to connect to your Supabase project.

1. In the left sidebar, click **Project Settings** (the gear icon at the bottom)
2. Click **API**
3. You will see two values — copy both and keep them somewhere safe:
   - **Project URL** — looks like `https://abcdefghij.supabase.co`
   - **anon public key** — a long string starting with `eyJ...`

You will paste these into Vercel in the next setup guide.

---

## What You Just Built

You now have a fully working database with:
- A `systems` table for system profiles
- An `alters` table for alter profiles, linked to their system
- A `fronting_log` table to track who fronted and when
- Security rules that make sure each user can only see their own data

The database is empty for now — data will appear here once the app is running
and people start creating accounts.
