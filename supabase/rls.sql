-- =============================================================================
-- UNCOUNTED PEOPLE — ROW LEVEL SECURITY (RLS)
-- =============================================================================
-- Run this AFTER schema.sql.
--
-- A NOTE FOR IVY:
-- Row Level Security (RLS) is how the database protects people's data.
-- Without it, any logged-in user could technically read anyone else's data.
-- With RLS, the database checks "who is asking?" before returning anything.
--
-- Each POLICY is a rule. Think of it like a bouncer at a door:
-- "You can only enter if THIS condition is true."
-- =============================================================================


-- Turn on RLS for every table (off by default in Supabase)
alter table systems     enable row level security;
alter table alters      enable row level security;
alter table fronting_log enable row level security;


-- =============================================================================
-- SYSTEMS POLICIES
-- =============================================================================

-- A user can only see their own system profile
create policy "owner can read their system"
  on systems for select
  using (auth.uid() = user_id);

-- A user can only create a system tied to their own account
create policy "owner can create their system"
  on systems for insert
  with check (auth.uid() = user_id);

-- A user can only edit their own system
create policy "owner can update their system"
  on systems for update
  using (auth.uid() = user_id);


-- =============================================================================
-- ALTERS POLICIES
-- The system_id column links alters back to a system.
-- We check that the system belongs to the logged-in user before allowing access.
-- =============================================================================

create policy "owner can read their alters"
  on alters for select
  using (
    system_id in (select id from systems where user_id = auth.uid())
  );

create policy "owner can create alters"
  on alters for insert
  with check (
    system_id in (select id from systems where user_id = auth.uid())
  );

create policy "owner can update their alters"
  on alters for update
  using (
    system_id in (select id from systems where user_id = auth.uid())
  );

create policy "owner can delete their alters"
  on alters for delete
  using (
    system_id in (select id from systems where user_id = auth.uid())
  );


-- =============================================================================
-- FRONTING LOG POLICIES
-- Same pattern as alters — only the system owner can see their own log.
-- =============================================================================

create policy "owner can read their fronting log"
  on fronting_log for select
  using (
    system_id in (select id from systems where user_id = auth.uid())
  );

create policy "owner can add to their fronting log"
  on fronting_log for insert
  with check (
    system_id in (select id from systems where user_id = auth.uid())
  );

create policy "owner can update their fronting log"
  on fronting_log for update
  using (
    system_id in (select id from systems where user_id = auth.uid())
  );


-- =============================================================================
-- PUBLIC CARD ACCESS
-- The shareable card is handled in the application code, not here.
-- When someone opens a share link, the app looks up the system by its
-- share_token using a server-side call that bypasses RLS safely.
-- This means we never expose all systems to the public — only the one
-- matching the exact token in the URL.
-- =============================================================================
