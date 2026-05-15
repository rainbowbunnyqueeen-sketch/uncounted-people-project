import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import FrontingBadge from '@/components/FrontingBadge'

export default async function PublicCardPage({ params }: { params: { token: string } }) {
  const supabase = createAdminClient()

  const { data: system } = await supabase
    .from('systems')
    .select('*')
    .eq('share_token', params.token)
    .single()

  if (!system) notFound()

  const { data: alters } = await supabase
    .from('alters')
    .select('*')
    .eq('system_id', system.id)
    .eq('is_visible', true)
    .order('display_order', { ascending: true })

  const fronting = (alters ?? []).filter(a => a.is_fronting)
  const others   = (alters ?? []).filter(a => !a.is_fronting)

  return (
    <div className="min-h-screen bg-amaryllis-bg">
      <div className="max-w-lg mx-auto px-4 py-12">

        {/* System header */}
        <div
          className="rounded-2xl p-6 mb-5 text-white shadow-sm"
          style={{ backgroundColor: system.theme_color }}
        >
          <div className="text-3xl mb-3">🌺</div>
          <h1 className="text-2xl font-bold">{system.collective_name}</h1>
          {system.collective_pronouns && (
            <p className="text-sm opacity-80 mt-1">{system.collective_pronouns}</p>
          )}
          {system.description && (
            <p className="mt-3 text-sm opacity-90 leading-relaxed">{system.description}</p>
          )}
        </div>

        {/* Currently fronting */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Currently Fronting
          </h2>
          <FrontingBadge alters={fronting} themeColor={system.theme_color} />
        </div>

        {/* All other visible alters */}
        {others.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              System Members
            </h2>
            <div className="space-y-4">
              {others.map(alter => (
                <div key={alter.id} className="flex items-start gap-3">
                  <div
                    className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 border border-gray-100"
                    style={{ backgroundColor: alter.color ?? system.theme_color }}
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium">{alter.name}</span>
                      {alter.pronouns && (
                        <span className="text-xs text-gray-400">{alter.pronouns}</span>
                      )}
                      {alter.role && (
                        <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                          {alter.role}
                        </span>
                      )}
                    </div>
                    {alter.description && (
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{alter.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-xs text-gray-300 mt-10">
          Powered by Uncounted People
        </p>
      </div>
    </div>
  )
}
