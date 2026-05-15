// These types match the database tables defined in supabase/schema.sql.
// If Ivy adds a new column to the alters table, add the matching field here too.

export type System = {
  id: string
  user_id: string
  collective_name: string
  collective_pronouns: string | null
  description: string | null
  theme_color: string
  share_token: string
  created_at: string
  updated_at: string
}

export type Alter = {
  id: string
  system_id: string
  name: string
  pronouns: string | null
  role: string | null
  description: string | null
  color: string | null
  is_visible: boolean
  is_fronting: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export type FrontingLogEntry = {
  id: string
  alter_id: string
  system_id: string
  started_at: string
  ended_at: string | null
}
