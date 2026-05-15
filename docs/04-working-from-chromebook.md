# Working on Uncounted People from a Chromebook

Good news — you can do everything you need to do for this project from a
Chromebook. No installations required. This guide explains your options.

---

## Step 0 — Create a GitHub Account

Everything in this project lives on GitHub. You need a free account to
read files, make changes, and save your work.

1. Go to **github.com** and click **Sign up**
2. Enter your email address and create a password
3. Choose a username — this will be visible publicly, so pick something
   you are comfortable with
4. Complete the short verification puzzle
5. On the plan selection screen, choose **Free**
6. You can skip the personalisation questions

Once your account is created, send your GitHub username to whoever manages
the project so they can add you as a collaborator. You will get an email
invitation — click **Accept invitation** in that email before trying to
make any changes to the project.

**A note on age:** GitHub's terms of service require users to be 13 or
older. If your school has a policy about signing up for external accounts,
check with a parent or teacher first.

---

## The Supabase Dashboard

**What you use it for:** Setting up the database, adding columns to the
alters table, and running SQL files.

**How to access it:** Go to supabase.com and sign in. Everything works in
the Chrome browser exactly as described in `docs/01-supabase-setup.md` and
`docs/03-adding-a-field.md`.

Nothing special to set up. Just open Chrome and go.

---

## Option 1 — GitHub Web Editor

**What you use it for:** Reading files in the project and making simple
edits to one file at a time.

**How to access it:** Go to the project on github.com. Click on any file,
then click the pencil icon (✏️) in the top right to edit it. When you are
done, scroll down and click **Commit changes**.

**Good for:**
- Reading the project files to understand how things are structured
- Making a small edit to a single file (like adding a note)

**Not great for:**
- Editing multiple files at once
- Writing a SQL migration file and updating the TypeScript types at the
  same time

---

## Option 2 — GitHub.dev (Recommended for editing files)

**What you use it for:** Editing multiple project files at once, just like
a real code editor — without installing anything.

**How to access it:** Go to the project on github.com, then press the
**period key** (`.`) on your keyboard. The page will transform into a full
VS Code editor running entirely in your browser.

**What you can do here:**
- Open and edit any file in the project
- See all the files in the sidebar at once
- Edit `supabase/migrations/your-file.sql` and `lib/types.ts` side by side
- Commit and push your changes using the Source Control panel on the left
  (the icon that looks like a branch)

**What you cannot do here:**
- Run the project (you can not preview the website here)
- Run `npm install` or `npm run dev`

For your work on alter fields, github.dev is all you need alongside the
Supabase dashboard. You write the migration file here, run it in Supabase,
and update the TypeScript types here — done.

---

## Option 3 — GitHub Codespaces (For running the full app)

**What you use it for:** Running the actual website so you can see your
changes working in a real browser, just like a developer with a full laptop
would.

**How to access it:** Go to the project on github.com. Click the green
**Code** button, then click the **Codespaces** tab, then click
**Create codespace on main** (or the current branch name).

GitHub will take about a minute to set up a complete development environment
for you in the cloud. When it is ready, you will see a VS Code editor —
just like github.dev — but this one has a terminal at the bottom.

**First time setup (do this once after the codespace loads):**

In the terminal at the bottom of the screen, type these commands one at a time:

```
npm install
```

Then create your environment file. In the file panel on the left, right-click
and create a new file called `.env.local`. Paste in the Supabase credentials
(ask whoever set up the Supabase project for these values — they look like
what is described in `.env.local.example`).

Then start the app:

```
npm run dev
```

A notification will pop up asking if you want to open the site in a browser
tab. Click **Open in Browser** and you will see the running website.

**Free tier limit:** GitHub gives you 60 hours of Codespaces time per month
for free. For a class project, this is plenty. Remember to **stop your
codespace** when you are done working (click the codespace name at the bottom
left and choose Stop) so you do not use up your hours while idle.

---

## Which Option Should I Use?

| What I want to do | Use this |
|---|---|
| Set up the database for the first time | Supabase dashboard |
| Add a new column to the alters table visually | Supabase table editor |
| Write a SQL migration file and commit it | GitHub.dev |
| Update the TypeScript types after adding a column | GitHub.dev |
| See the website running with my changes | GitHub Codespaces |
| Make a quick one-line edit to a file | GitHub web editor |

---

## The Workflow for Adding a New Alter Field

Here is the exact sequence Ivy uses to add a new field, from a Chromebook,
start to finish:

1. **Decide on the field** — name, type, required or optional
   (see `docs/03-adding-a-field.md` for guidance)

2. **Write the migration file** — open github.dev (press `.` on the repo),
   create a new file in `supabase/migrations/`, write the SQL, commit it

3. **Run it in Supabase** — go to the Supabase dashboard → SQL Editor,
   paste the migration SQL, click Run

4. **Update the TypeScript type** — back in github.dev, open `lib/types.ts`
   and add the new field to the `Alter` type, commit

5. **Update the form** — in github.dev, open `components/AlterForm.tsx`
   and add an input for the new field, commit

6. **Check it works** — open a Codespace, run `npm run dev`, and test
   that the new field appears and saves correctly

Steps 2–5 can all be done without Codespaces. Step 6 is optional but
recommended before telling anyone the field is ready.
