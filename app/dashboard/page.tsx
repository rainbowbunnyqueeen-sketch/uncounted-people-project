import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardClient from './DashboardClient'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: system } = await supabase
    .from('systems')
    .select('*')
    .eq('user_id', user.id)
    .single()

  const { data: alters } = system
    ? await supabase
        .from('alters')
        .select('*')
        .eq('system_id', system.id)
        .order('display_order', { ascending: true })
    : { data: [] }

  return (
    <DashboardClient
      system={system ?? null}
      alters={alters ?? []}
      userId={user.id}
    />
  )
}
