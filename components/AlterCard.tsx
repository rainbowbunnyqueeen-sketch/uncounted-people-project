'use client'

import type { Alter } from '@/lib/types'

type Props = {
  alter: Alter
  onToggleFronting: (alter: Alter) => void
  onToggleVisible: (alter: Alter) => void
  onEdit: (alter: Alter) => void
  onDelete: (alter: Alter) => void
}

export default function AlterCard({ alter, onToggleFronting, onToggleVisible, onEdit, onDelete }: Props) {
  return (
    <div className={`rounded-xl border p-4 flex items-start gap-3 transition-colors ${
      alter.is_fronting ? 'border-amaryllis bg-amaryllis-light' : 'border-gray-100 hover:border-gray-200'
    }`}>
      {/* Colour dot */}
      <div
        className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 border border-white shadow-sm"
        style={{ backgroundColor: alter.color ?? '#C0396B' }}
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-sm">{alter.name}</span>
          {alter.pronouns && (
            <span className="text-xs text-gray-500">{alter.pronouns}</span>
          )}
          {alter.role && (
            <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">
              {alter.role}
            </span>
          )}
          {!alter.is_visible && (
            <span className="text-xs bg-yellow-50 text-yellow-600 rounded-full px-2 py-0.5">
              hidden from card
            </span>
          )}
        </div>
        {alter.description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{alter.description}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <button
          onClick={() => onToggleFronting(alter)}
          title={alter.is_fronting ? 'Remove from front' : 'Mark as fronting'}
          className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${
            alter.is_fronting
              ? 'bg-amaryllis text-white hover:bg-amaryllis-dark'
              : 'bg-gray-100 text-gray-600 hover:bg-amaryllis hover:text-white'
          }`}
        >
          {alter.is_fronting ? 'Fronting' : 'Front'}
        </button>
        <button
          onClick={() => onToggleVisible(alter)}
          title={alter.is_visible ? 'Hide from public card' : 'Show on public card'}
          className="p-1.5 text-gray-300 hover:text-gray-600 transition-colors text-sm"
        >
          {alter.is_visible ? '👁' : '🙈'}
        </button>
        <button
          onClick={() => onEdit(alter)}
          title="Edit"
          className="p-1.5 text-gray-300 hover:text-gray-600 transition-colors text-sm"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(alter)}
          title="Remove"
          className="p-1.5 text-gray-300 hover:text-red-400 transition-colors text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
