-- =============================================================================
-- UNCOUNTED PEOPLE — DATABASE SCHEMA
-- =============================================================================
-- This file creates all the tables the app needs.
-- Run this in the Supabase SQL Editor (see docs/01-supabase-setup.md).
--
-- A NOTE FOR IVY:
-- Think of each CREATE TABLE block as designing a spreadsheet.
-- Each column is a piece of information we want to store.
-- The type (text, boolean, integer, etc.) tells the database what kind of
-- data is allowed in that column.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- SYSTEMS
-- One row per registered system (the group of alters sharing a body).
-- This is the "top level" of our data — everything else belongs to a system.
-- -----------------------------------------------------------------------------
create table systems (
  id              uuid        primary key default gen_random_uuid(),
  user_id         uuid        references auth.users not null,
  collective_name text        not null,
  collective_pronouns text,
  description     text,
  theme_color     text        default '#c0396b',  -- Amaryllis pink
  share_token     text        unique not null
                              default encode(gen_random_bytes(12), 'hex'),
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Automatically update the updated_at timestamp whenever a row changes
create or replace function touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger systems_updated_at
  before update on systems
  for each row execute function touch_updated_at();


-- -----------------------------------------------------------------------------
-- ALTERS
-- One row per alter. Each alter belongs to exactly one system.
-- The system_id column is the link between this table and the systems table.
-- -----------------------------------------------------------------------------
create table alters (
  id           uuid        primary key default gen_random_uuid(),
  system_id    uuid        references systems(id) on delete cascade not null,
  name         text        not null,
  pronouns     text,
  role         text,
  description  text,
  color        text,
  is_visible   boolean     default true,   -- show on the public card?
  is_fronting  boolean     default false,  -- currently at front?
  display_order integer    default 0,      -- controls the order in the list
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

create trigger alters_updated_at
  before update on alters
  for each row execute function touch_updated_at();


-- -----------------------------------------------------------------------------
-- FRONTING LOG
-- Every time someone marks a new fronter, we record it here.
-- This gives the system a history of who fronted and when.
-- ended_at is empty (null) while that alter is still fronting.
-- -----------------------------------------------------------------------------
create table fronting_log (
  id         uuid        primary key default gen_random_uuid(),
  alter_id   uuid        references alters(id) on delete cascade not null,
  system_id  uuid        references systems(id) on delete cascade not null,
  started_at timestamptz default now(),
  ended_at   timestamptz             -- null = still fronting
);
