import { useState } from 'react';

const layouts = [
  { id: 1, name: 'Glassmorphism', desc: 'Frostat glas, djupt lila', preview: 'bg-[#2d1b69]' },
  { id: 2, name: 'Neubrutalism', desc: 'Tjocka kanter, retro-bold', preview: 'bg-[#ffe156]' },
  { id: 3, name: 'Warm Retro', desc: 'Varma toner, mjuka former', preview: 'bg-[#f4e8d1]' },
];

export default function LayoutSwitcher({ current, onChange }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Expanded panel */}
      {expanded && (
        <div className="mb-3 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl w-64 animate-in">
          <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Välj Layout</p>
          <div className="space-y-2">
            {layouts.map((l) => (
              <button
                key={l.id}
                onClick={() => { onChange(l.id); setExpanded(false); }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                  current === l.id
                    ? 'bg-white/10 border border-white/20'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${l.preview} flex-none border border-white/10`} />
                <div>
                  <div className="text-white text-sm font-medium">{l.name}</div>
                  <div className="text-gray-500 text-xs">{l.desc}</div>
                </div>
                {current === l.id && (
                  <svg className="w-4 h-4 text-green-400 ml-auto flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-gray-900 border border-gray-700 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all"
        title="Byt landing page layout"
      >
        {expanded ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        )}
      </button>
    </div>
  );
}
