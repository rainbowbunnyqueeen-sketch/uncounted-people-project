import type { Alter } from '@/lib/types'

type Props = {
  alters: Alter[]
  themeColor: string
}

export default function FrontingBadge({ alters, themeColor }: Props) {
  if (alters.length === 0) {
    return (
      <p className="text-sm text-gray-400 italic">
        No one is marked as fronting right now.
      </p>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {alters.map(alter => (
        <div
          key={alter.id}
          className="flex items-center gap-2 rounded-full px-3 py-1.5"
          style={{
            backgroundColor: `${themeColor}22`,
            border: `1px solid ${themeColor}55`,
          }}
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
          {alter.role && (
            <span className="text-xs font-medium" style={{ color: themeColor }}>
              {alter.role}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
