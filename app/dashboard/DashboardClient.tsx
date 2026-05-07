'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { System, Alter } from '@/lib/types'
import AlterCard from '@/components/AlterCard'
import AlterForm from '@/components/AlterForm'

type Props = {
  system: System | null
  alters: Alter[]
  userId: string
}

export default function DashboardClient({ system: initialSystem, alters: initialAlters, userId }: Props) {
  const router = useRouter()
  const supabase = createClient()

  const [system, setSystem] = useState(initialSystem)
  const [alters, setAlters] = useState(initialAlters)
  const [editingProfile, setEditingProfile] = useState(!initialSystem)
  const [profileForm, setProfileForm] = useState({
    collective_name: initialSystem?.collective_name ?? '',
    collective_pronouns: initialSystem?.collective_pronouns ?? '',
    description: initialSystem?.description ?? '',
    theme_color: initialSystem?.theme_color ?? '#C0396B',
  })
  const [showAlterForm, setShowAlterForm] = useState(false)
  const [editingAlter, setEditingAlter] = useState<Alter | null>(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [origin, setOrigin] = useState('')

  useEffect(() => { setOrigin(window.location.origin) }, [])

  const shareUrl = system ? `${origin}/s/${system.share_token}` : null
  const fronting = alters.filter(a => a.is_fronting)

  async function saveProfile() {
    setError(null)
    if (!profileForm.collective_name.trim()) {
      setError('System name is required.')
      return
    }

    if (system) {
      const { data, error } = await supabase
        .from('systems')
        .update(profileForm)
        .eq('id', system.id)
        .select()
        .single()
      if (error) { setError(error.message); return }
      setSystem(data)
    } else {
      const { data, error } = await supabase
        .from('systems')
        .insert({ ...profileForm, user_id: userId })
        .select()
        .single()
      if (error) { setError(error.message); return }
      setSystem(data)
    }
    setEditingProfile(false)
  }

  async function toggleFronting(alter: Alter) {
    const nowFronting = !alter.is_fronting
    const { error } = await supabase
      .from('alters')
      .update({ is_fronting: nowFronting })
      .eq('id', alter.id)
    if (error) { setError(error.message); return }

    if (nowFronting) {
      await supabase.from('fronting_log').insert({
        alter_id: alter.id,
        system_id: alter.system_id,
      })
    } else {
      await supabase
        .from('fronting_log')
        .update({ ended_at: new Date().toISOString() })
        .eq('alter_id', alter.id)
        .is('ended_at', null)
    }

    setAlters(prev => prev.map(a => a.id === alter.id ? { ...a, is_fronting: nowFronting } : a))
  }

  async function toggleVisible(alter: Alter) {
    const { error } = await supabase
      .from('alters')
      .update({ is_visible: !alter.is_visible })
      .eq('id', alter.id)
    if (error) { setError(error.message); return }
    setAlters(prev => prev.map(a => a.id === alter.id ? { ...a, is_visible: !a.is_visible } : a))
  }

  async function deleteAlter(alter: Alter) {
    if (!confirm(`Remove ${alter.name} from your system?`)) return
    const { error } = await supabase.from('alters').delete().eq('id', alter.id)
    if (error) { setError(error.message); return }
    setAlters(prev => prev.filter(a => a.id !== alter.id))
  }

  function handleAlterSave(saved: Alter) {
    if (editingAlter) {
      setAlters(prev => prev.map(a => a.id === saved.id ? saved : a))
    } else {
      setAlters(prev => [...prev, saved])
    }
    setShowAlterForm(false)
    setEditingAlter(null)
  }

  async function copyLink() {
    if (!shareUrl) return
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function regenerateLink() {
    if (!system) return
    if (!confirm('This will break any existing shared links. Continue?')) return
    const bytes = crypto.getRandomValues(new Uint8Array(12))
    const newToken = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
    const { data, error } = await supabase
      .from('systems')
      .update({ share_token: newToken })
      .eq('id', system.id)
      .select()
      .single()
    if (error) { setError(error.message); return }
    setSystem(data)
  }

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-amaryllis-bg">
      <header className="bg-amaryllis text-white px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌺</span>
          <span className="font-semibold">Uncounted People</span>
        </div>
        <button onClick={signOut} className="text-sm opacity-80 hover:opacity-100 underline">
          Sign out
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* ── System Profile ── */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Your System</h2>
            {system && !editingProfile && (
              <button
                onClick={() => setEditingProfile(true)}
                className="text-sm text-amaryllis hover:underline"
              >
                Edit
              </button>
            )}
          </div>

          {editingProfile ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  System name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={profileForm.collective_name}
                  onChange={e => setProfileForm({ ...profileForm, collective_name: e.target.value })}
                  placeholder="e.g. The Amaryllis System"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Collective pronouns
                </label>
                <input
                  type="text"
                  value={profileForm.collective_pronouns}
                  onChange={e => setProfileForm({ ...profileForm, collective_pronouns: e.target.value })}
                  placeholder="e.g. they/them"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={profileForm.description}
                  onChange={e => setProfileForm({ ...profileForm, description: e.target.value })}
                  rows={3}
                  placeholder="A little about your system…"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card colour</label>
                <input
                  type="color"
                  value={profileForm.theme_color}
                  onChange={e => setProfileForm({ ...profileForm, theme_color: e.target.value })}
                  className="h-9 w-16 border border-gray-200 rounded cursor-pointer"
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  onClick={saveProfile}
                  className="bg-amaryllis text-white px-4 py-2 rounded-lg text-sm hover:bg-amaryllis-dark transition-colors"
                >
                  Save
                </button>
                {system && (
                  <button
                    onClick={() => setEditingProfile(false)}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ) : system ? (
            <div>
              <p className="font-medium">{system.collective_name}</p>
              {system.collective_pronouns && (
                <p className="text-sm text-gray-500 mt-0.5">{system.collective_pronouns}</p>
              )}
              {system.description && (
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{system.description}</p>
              )}
            </div>
          ) : null}
        </section>

        {system && (
          <>
            {/* ── Who's Fronting ── */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Who&apos;s Fronting</h2>
              {fronting.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No one is marked as fronting right now. Use the buttons on your alters below.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {fronting.map(alter => (
                    <div
                      key={alter.id}
                      className="flex items-center gap-2 bg-amaryllis-light rounded-full px-3 py-1.5"
                    >
                      {alter.color && (
                        <span
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: alter.color }}
                        />
                      )}
                      <span className="text-sm font-medium">{alter.name}</span>
                      {alter.pronouns && (
                        <span className="text-xs text-gray-500">({alter.pronouns})</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ── Alters ── */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Alters</h2>
                <button
                  onClick={() => { setShowAlterForm(true); setEditingAlter(null) }}
                  className="text-sm bg-amaryllis text-white px-3 py-1.5 rounded-lg hover:bg-amaryllis-dark transition-colors"
                >
                  + Add alter
                </button>
              </div>

              {(showAlterForm || editingAlter) && (
                <div className="mb-4">
                  <AlterForm
                    alter={editingAlter ?? undefined}
                    systemId={system.id}
                    onSave={handleAlterSave}
                    onCancel={() => { setShowAlterForm(false); setEditingAlter(null) }}
                  />
                </div>
              )}

              {alters.length === 0 && !showAlterForm ? (
                <p className="text-sm text-gray-500">No alters added yet — click &quot;Add alter&quot; to get started.</p>
              ) : (
                <div className="space-y-2">
                  {alters.map(alter => (
                    <AlterCard
                      key={alter.id}
                      alter={alter}
                      onToggleFronting={toggleFronting}
                      onToggleVisible={toggleVisible}
                      onEdit={a => { setEditingAlter(a); setShowAlterForm(false) }}
                      onDelete={deleteAlter}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* ── Share Link ── */}
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-2">Your Share Link</h2>
              <p className="text-sm text-gray-600 mb-4">
                Send this link to people you trust. They can view your system card
                without needing an account.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={shareUrl ?? ''}
                  readOnly
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-700 min-w-0"
                />
                <button
                  onClick={copyLink}
                  className="bg-amaryllis text-white px-4 py-2 rounded-lg text-sm hover:bg-amaryllis-dark transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <button
                onClick={regenerateLink}
                className="mt-3 text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                Regenerate link (breaks old link)
              </button>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
