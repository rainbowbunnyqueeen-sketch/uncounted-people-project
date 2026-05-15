# Step 2 — Deploying to Vercel

Vercel is where the website lives. Every time code is pushed to GitHub,
Vercel automatically builds and publishes the updated site. This guide
walks you through connecting the two.

**Time needed:** about 15 minutes
**What you need:** a GitHub account, and the two Supabase keys from Step 1

---

## Part A — Create a Vercel Account

1. Go to **vercel.com** and click **Sign Up**
2. Choose **Continue with GitHub** — this is the easiest option as it links
   your accounts automatically
3. Authorize Vercel to access your GitHub account when prompted

---

## Part B — Import the Project

1. On the Vercel dashboard, click **Add New… → Project**
2. Find `uncounted-people-project` in the list of your GitHub repositories
   and click **Import**
3. Leave all the settings as their defaults for now
4. Do NOT click Deploy yet — we need to add the secret keys first

---

## Part C — Add the Supabase Keys

The app needs to know how to find and talk to your Supabase database.
We give it that information through **Environment Variables** —
think of these as secret settings that only Vercel can see.

1. On the import page, expand the section called **Environment Variables**
2. Add the first variable:
   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** paste your Supabase Project URL (from Step 1, Part E)
3. Click **Add** and then add the second:
   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** paste your Supabase anon public key (from Step 1, Part E)
4. Click **Add**

---

## Part D — Deploy

1. Click the **Deploy** button
2. Vercel will show you a log of the build process — this takes 1-2 minutes
3. When it finishes you will see a congratulations screen with a URL like:
   `uncounted-people-project.vercel.app`
4. Click **Visit** to see your live site

---

## Part E — What Happens on Future Updates

Every time someone pushes code to the `main` branch on GitHub:

1. Vercel detects the change automatically
2. It builds the new version of the site
3. It publishes it, usually within 60 seconds
4. The old version stays up until the new one is ready (no downtime)

You can watch this happen in real time from the Vercel dashboard under
**Deployments**.

---

## Useful Things in the Vercel Dashboard

| Section | What it shows |
|---|---|
| Deployments | Every version of the site ever published, with build logs |
| Functions | The server-side code running behind the scenes |
| Environment Variables | Where to update or add secret keys |
| Domains | Where to connect a custom domain name if you get one |

---

## Troubleshooting

**The build failed with an error about missing environment variables**
→ Go to Project Settings → Environment Variables and check that both
Supabase values are there with no extra spaces.

**The site loads but login doesn't work**
→ Double-check that the Supabase URL and anon key are exactly right —
even one wrong character will break the connection.

**I want to use a custom domain (like uncountedpeople.com)**
→ Go to Project Settings → Domains, add your domain, and follow the
instructions to update your domain's DNS settings.
