'use client'

// AlterForm — add or edit a single alter.
//
// IVY: If you add a new column to the alters table (see docs/03-adding-a-field.md),
// add a matching field to `form` state below, an input in the JSX, and the field
// name in the insert/update calls. The lib/types.ts Alter type will also need updating.

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Alter } from '@/lib/types'

type Props = {
  alter?: Alter
  systemId: string
  onSave: (alter: Alter) => void
  onCancel: () => void
}

export default function AlterForm({ alter, systemId, onSave, onCancel }: Props) {
  const supabase = createClient()

  const [form, setForm] = useState({
    name:        alter?.name        ?? '',
    pronouns:    alter?.pronouns    ?? '',
    role:        alter?.role        ?? '',
    description: alter?.description ?? '',
    color:       alter?.color       ?? '#C0396B',
    is_visible:  alter?.is_visible  ?? true,
  })
  const [error, setSaveError] = useState<string | null>(null)
  const [saving, setSaving]   = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) { setSaveError('Name is required.'); return }
    setSaving(true)
    setSaveError(null)

    if (alter) {
      const { data, error } = await supabase
        .from('alters')
        .update(form)
        .eq('id', alter.id)
        .select()
        .single()
      if (error) { setSaveError(error.message); setSaving(false); return }
      onSave(data)
    } else {
      const { data, error } = await supabase
        .from('alters')
        .insert({ ...form, system_id: systemId })
        .select()
        .single()
      if (error) { setSaveError(error.message); setSaving(false); return }
      onSave(data)
    }

    setSaving(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-amaryllis-bg border border-amaryllis-light rounded-xl p-4 space-y-3"
    >
      <h3 className="text-sm font-semibold text-gray-700">
        {alter ? 'Edit alter' : 'Add an alter'}
      </h3>

      {error && <p className="text-xs text-red-600">{error}</p>}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Pronouns</label>
          <input
            type="text"
            value={form.pronouns}
            onChange={e => setForm({ ...form, pronouns: e.target.value })}
            placeholder="e.g. she/her"
            className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Role</label>
          <input
            type="text"
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
            placeholder="e.g. host, protector"
            className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Colour</label>
          <input
            type="color"
            value={form.color}
            onChange={e => setForm({ ...form, color: e.target.value })}
            className="h-9 w-full border border-gray-200 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          rows={2}
          className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amaryllis resize-none"
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={form.is_visible}
          onChange={e => setForm({ ...form, is_visible: e.target.checked })}
          className="accent-amaryllis"
        />
        <span className="text-xs text-gray-600">Show this alter on the public card</span>
      </label>

      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          disabled={saving}
          className="bg-amaryllis text-white px-4 py-1.5 rounded-lg text-sm hover:bg-amaryllis-dark disabled:opacity-50 transition-colors"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
