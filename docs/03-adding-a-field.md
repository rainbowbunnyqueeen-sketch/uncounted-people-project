# Step 3 — Adding a New Field to Alter Profiles

This guide is for Ivy. It explains how to add a new piece of information
to alter profiles — for example, adding a "mood" field or a "favourite
colour" field — without breaking anything.

This is real systems design work. Every change to the database structure
needs to be done carefully and recorded so that anyone else working on the
project knows what changed and why.

---

## Before You Start — Think It Through

Before touching anything, answer these questions:

1. **What is the field called?** Use lowercase with underscores for the
   database name (e.g. `mood`, `favorite_color`, `age_appearance`).

2. **What type of information is it?**
   - Short text (a word or sentence) → `text`
   - A whole number (like an age) → `integer`
   - True/false → `boolean`
   - A date → `date`

3. **Is it required or optional?** Most alter fields should be optional —
   not every system will want to fill in every field.

4. **Should it appear on the public card?** Or is it private/internal only?

Write down your answers before continuing.

---

## Method 1 — Using the Supabase Table Editor (No SQL needed)

This is the visual way. Good for when you are experimenting.

1. Go to your Supabase project dashboard
2. Click **Table Editor** in the left sidebar
3. Click on the **alters** table
4. Click the **+** button in the column header row to add a new column
5. Fill in:
   - **Name:** your field name (e.g. `mood`)
   - **Type:** choose from the dropdown (e.g. `text`)
   - **Default value:** leave empty for optional fields
   - **Is nullable:** leave checked (this means the field is optional)
6. Click **Save**

The column now exists. Every existing alter row will have this field set
to empty until someone fills it in.

---

## Method 2 — Writing a Migration File (The Professional Way)

A migration file is a SQL file that records the change. This is better
because it means the change is saved in the project's history, and anyone
else working on the project can run the same file to get the same result.

**Step 1: Create the file**

In the `supabase/` folder, create a new file named with today's date and
a description, like:

```
supabase/migrations/2024-03-15-add-mood-to-alters.sql
```

**Step 2: Write the SQL**

Inside the file, write the ALTER TABLE command:

```sql
-- Add a mood field to alter profiles
-- This is optional (nullable) — not every alter needs a mood set.
alter table alters
  add column mood text;
```

If you wanted to add multiple fields at once:

```sql
-- Add mood and an age appearance field to alter profiles
alter table alters
  add column mood          text,
  add column age_appearance integer;
```

**Step 3: Run it in Supabase**

1. Go to **SQL Editor** in Supabase
2. Create a new query
3. Paste the contents of your migration file
4. Click **Run**

**Step 4: Commit the file to GitHub**

Save and commit the migration file so there is a permanent record of what
changed. Write a clear commit message like:

```
add mood field to alter profiles
```

---

## After Adding a Field

Once the field exists in the database, the developer working on the app
code needs to know about it so they can:
- Show it on the alter editing form in the dashboard
- Show it on the public system card (if it should be public)

Write a note about what you added and what it is for, so they know how
to use it.

---

## Example Fields You Might Want to Add

Here are some ideas based on how the plural community uses apps like this.
These are just suggestions — you decide what makes sense for the project.

| Field name | Type | Description |
|---|---|---|
| `mood` | text | Current mood or status of the alter |
| `age_appearance` | integer | How old the alter appears/presents |
| `favorite_color` | text | A colour associated with the alter |
| `emoji` | text | An emoji that represents the alter |
| `is_little` | boolean | Whether the alter is a little/child alter |
| `trigger_warning` | text | Warnings others should know about |
| `comfort_items` | text | Things that help this alter feel safe |

---

## The Golden Rule

> **Always add a migration file before changing the table.**

If you change the table without a file, the change is not recorded anywhere.
If the database ever needs to be rebuilt, that change will be lost.
The migration file is the receipt.
