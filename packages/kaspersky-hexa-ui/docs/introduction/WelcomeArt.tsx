import React from 'react'

// Decorative UI miniatures inherit the active HEXA theme.
export function WelcomeArt({ kind = 'components' }: { kind?: string }) {
  const frame = <rect x="28" y="30" width="224" height="132" rx="14" className="hexa-art-paper" />
  return <svg className={`hexa-art hexa-art-${kind}`} viewBox="0 0 280 200" fill="none" aria-hidden="true" focusable="false">
    <g className="hexa-art-grid" stroke="currentColor">{[40,80,120,160,200,240].map(x => <path key={x} d={`M${x} 0V200`} />)}{[40,80,120,160].map(y => <path key={y} d={`M0 ${y}H280`} />)}</g>
    {kind === 'hero' ? <g stroke="currentColor" strokeWidth=".8"><ellipse cx="140" cy="100" rx="100" ry="40" transform="rotate(-30 140 100)" /><ellipse cx="140" cy="100" rx="100" ry="40" transform="rotate(30 140 100)" /><ellipse cx="140" cy="100" rx="100" ry="40" transform="rotate(90 140 100)" /><circle cx="140" cy="100" r="65" /><circle cx="140" cy="100" r="5" fill="currentColor" /></g> : <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      {frame}
      <path d="M28 56H252" opacity=".2" /><g fill="currentColor" stroke="none" opacity=".3"><circle cx="42" cy="43" r="2"/><circle cx="51" cy="43" r="2"/><circle cx="60" cy="43" r="2"/></g>
      {kind === 'design' || kind === 'foundations' ? <><rect x="52" y="76" width="68" height="65" rx="10" className="hexa-art-paper"/><circle cx="86" cy="100" r="13" fill="currentColor" opacity=".6"/><path d="M69 126H102M140 85H220M140 101H204M140 133H220"/><rect x="140" y="111" width="22" height="10" rx="3" fill="currentColor" opacity=".3"/></> : kind === 'development' || kind === 'work' ? <><path d="m89 87-18 17 18 17m102-34 18 17-18 17m-40-42-21 62" strokeWidth="3"/><path d="M62 146H153" opacity=".3"/></> : kind === 'testing' ? <><path d="m52 85 6 6 12-14m-18 39 6 6 12-14m-18 39 6 6 12-14M88 85H222M88 116H193M88 147H210"/></> : kind === 'ecosystem' ? <><rect x="50" y="77" width="48" height="62" rx="7"/><rect x="116" y="77" width="48" height="62" rx="7"/><rect x="182" y="77" width="48" height="62" rx="7"/><path d="M98 108H116M164 108H182M63 124V107M74 124V95M85 124V86m43 35 12-26 12 26m-13-13h11"/><circle cx="206" cy="108" r="12"/></> : <><rect x="46" y="74" width="188" height="24" rx="6" className="hexa-art-paper"/><rect x="46" y="104" width="188" height="24" rx="6" className="hexa-art-paper"/><circle cx="61" cy="86" r="5" fill="currentColor" opacity=".3"/><path d="M77 86H130M150 86H176M191 86H221M58 116H113M135 116H177" opacity=".4"/><rect x="184" y="110" width="38" height="12" rx="6" fill="currentColor" opacity=".55"/><circle cx="215" cy="116" r="4" className="hexa-art-paper"/><path d="M50 146H142" opacity=".3"/></>}
    </g>}
  </svg>
}

export function MemberAvatar({ url, index = 0 }: { url?: string; index?: number }) {
  const [failed, setFailed] = React.useState(false)
  React.useEffect(() => setFailed(false), [url])
  return <span className="hexa-avatar" aria-hidden="true">{url && !failed ? <img src={url} alt="" onError={() => setFailed(true)} /> : <svg viewBox="0 0 64 64" focusable="false"><rect width="64" height="64" fill="currentColor" opacity=".07"/><path d="M7 64c0-24 50-24 50 0" fill="currentColor" opacity={index % 2 ? '.65' : '.3'}/><ellipse cx="32" cy="28" rx="13" ry="16" fill="currentColor" opacity=".22"/><path d={index % 2 ? 'M18 28C10 5 48 3 47 28L39 17 20 25Z' : 'M18 26C17 7 47 8 46 25L34 16 18 26Z'} fill="currentColor" opacity=".8"/><path d="M27 34q5 4 10 0" stroke="currentColor" fill="none"/></svg>}</span>
}
