import React from "react";

export const FlightAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Rich Sky Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36] via-[#102A4C] to-[#1E3A5F]" />

      {/* Radiant Horizon Atmosphere Glow */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[1300px] h-[520px] bg-gradient-to-r from-secondary/30 via-sky-400/20 to-amber-500/25 rounded-full blur-[110px] opacity-75" />

      {/* SVG Flight Arcs & Destination Waypoints */}
      <svg
        className="absolute w-full h-full inset-0 z-10 opacity-90"
        viewBox="0 0 1440 850"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main Flight Path Gradient */}
          <linearGradient id="flightPathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
          </linearGradient>

          {/* Secondary Arc Gradient */}
          <linearGradient id="flightPathGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary Flight Arc Across Sky (Left to Right) */}
        <path
          d="M -100 620 Q 380 140 920 280 T 1600 80"
          stroke="url(#flightPathGrad)"
          strokeWidth="3.5"
          strokeDasharray="10 12"
          className="animate-flight-dash"
        />

        {/* Secondary Flight Arc Across Sky (Right to Left) */}
        <path
          d="M 1550 180 Q 850 480 300 160 T -100 420"
          stroke="url(#flightPathGrad2)"
          strokeWidth="2.5"
          strokeDasharray="8 10"
          className="animate-flight-dash"
          style={{ animationDirection: 'reverse' }}
        />

        {/* Waypoint 1: USA & Canada */}
        <g transform="translate(180, 410)">
          <circle r="15" fill="#F59E0B" opacity="0.3" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle r="6" fill="#F59E0B" filter="url(#nodeGlow)" />
          <circle r="2.5" fill="#FFF" />
          <text x="14" y="5" fill="#FFF" fontSize="12" fontFamily="sans-serif" fontWeight="700" className="drop-shadow-md">USA & Canada</text>
        </g>

        {/* Waypoint 2: UK */}
        <g transform="translate(480, 210)">
          <circle r="16" fill="#38BDF8" opacity="0.35" className="animate-ping" style={{ animationDuration: '2.4s' }} />
          <circle r="7" fill="#38BDF8" filter="url(#nodeGlow)" />
          <circle r="3" fill="#FFF" />
          <text x="-12" y="-12" fill="#FFF" fontSize="13" fontFamily="sans-serif" fontWeight="800" className="drop-shadow-md">UK</text>
        </g>

        {/* Waypoint 3: France */}
        <g transform="translate(670, 240)">
          <circle r="14" fill="#F59E0B" opacity="0.35" className="animate-ping" style={{ animationDuration: '2.8s' }} />
          <circle r="6" fill="#F59E0B" filter="url(#nodeGlow)" />
          <circle r="2.5" fill="#FFF" />
          <text x="-10" y="20" fill="#FFF" fontSize="13" fontFamily="sans-serif" fontWeight="800" className="drop-shadow-md">France</text>
        </g>

        {/* Waypoint 4: Germany */}
        <g transform="translate(860, 220)">
          <circle r="16" fill="#38BDF8" opacity="0.35" className="animate-ping" style={{ animationDuration: '3.2s' }} />
          <circle r="7" fill="#38BDF8" filter="url(#nodeGlow)" />
          <circle r="3" fill="#FFF" />
          <text x="14" y="-8" fill="#FFF" fontSize="13" fontFamily="sans-serif" fontWeight="800" className="drop-shadow-md">Germany</text>
        </g>

        {/* Waypoint 5: Italy */}
        <g transform="translate(1040, 310)">
          <circle r="15" fill="#F59E0B" opacity="0.35" className="animate-ping" style={{ animationDuration: '2.6s' }} />
          <circle r="6" fill="#F59E0B" filter="url(#nodeGlow)" />
          <circle r="2.5" fill="#FFF" />
          <text x="14" y="16" fill="#FFF" fontSize="13" fontFamily="sans-serif" fontWeight="800" className="drop-shadow-md">Italy</text>
        </g>

        {/* Waypoint 6: Europe Hub */}
        <g transform="translate(1260, 160)">
          <circle r="18" fill="#38BDF8" opacity="0.4" className="animate-ping" style={{ animationDuration: '2.2s' }} />
          <circle r="8" fill="#38BDF8" filter="url(#nodeGlow)" />
          <circle r="3.5" fill="#FFF" />
          <text x="16" y="5" fill="#FFF" fontSize="14" fontFamily="sans-serif" fontWeight="900" className="drop-shadow-md">Europe</text>
        </g>
      </svg>

      {/* Volumetric Clouds Layer 1 (Upper Sky) */}
      <div className="absolute inset-0 z-10 opacity-70 animate-cloud-drift-slow">
        <div className="absolute top-[8%] -left-[5%] w-[550px] h-[200px] bg-gradient-to-r from-white/30 to-sky-100/10 rounded-full blur-2xl" />
        <div className="absolute top-[18%] -right-[8%] w-[650px] h-[240px] bg-gradient-to-l from-white/35 to-sky-100/10 rounded-full blur-2xl" />
      </div>

      {/* Volumetric Clouds Layer 2 (Mid Sky) */}
      <div className="absolute inset-0 z-15 opacity-60 animate-cloud-drift-fast">
        <div className="absolute top-[35%] left-[18%] w-[480px] h-[180px] bg-white/25 rounded-full blur-xl" />
        <div className="absolute top-[55%] right-[12%] w-[520px] h-[200px] bg-amber-100/20 rounded-full blur-2xl" />
      </div>

      {/* PLANE 1: Left to Right Aeroplane (High Prominence Layer) */}
      <div className="absolute inset-0 z-20 animate-aeroplane-flight">
        <div className="relative w-full h-full">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]">
            
            {/* Contrail */}
            <div className="absolute top-[32px] right-[100px] w-[420px] h-[16px] bg-gradient-to-l from-white via-amber-200/80 to-transparent rounded-full blur-[3px] opacity-90 animate-contrail-pulse" />
            <div className="absolute top-[38px] right-[95px] w-[320px] h-[10px] bg-gradient-to-l from-sky-200 via-amber-400/60 to-transparent rounded-full blur-[4px] opacity-80" />

            {/* Engine Glows */}
            <div className="absolute top-[28px] right-[98px] w-4 h-4 bg-amber-400 rounded-full blur-[2px] animate-ping" />
            <div className="absolute top-[40px] right-[98px] w-4 h-4 bg-sky-400 rounded-full blur-[2px] animate-ping" style={{ animationDelay: '0.15s' }} />

            {/* Jet Airliner 1 */}
            <svg width="150" height="85" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 38 L 8 10 C 5 4 12 3 17 7 L 44 36 Z" fill="url(#tailGrad1)" stroke="#FFF" strokeWidth="0.5" />
              <path d="M 16 42 L 3 52 C 0 55 7 57 11 54 L 38 44 Z" fill="#0F172A" opacity="0.85" />
              <path d="M 14 40 C 35 37 115 32 148 40 C 158 42 158 48 148 50 C 115 58 35 53 14 50 C 7 49 7 41 14 40 Z" fill="url(#fuseGrad1)" stroke="#FFF" strokeWidth="0.75" />
              <path d="M 132 40 C 142 41 146 44 142 47 C 136 47 130 44 132 40 Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="0.75" />
              <g fill="#F59E0B">
                <circle cx="60" cy="44" r="1.8" />
                <circle cx="70" cy="44" r="1.8" />
                <circle cx="80" cy="44" r="1.8" />
                <circle cx="90" cy="44" r="1.8" />
                <circle cx="100" cy="44" r="1.8" />
                <circle cx="110" cy="44" r="1.8" />
              </g>
              <path d="M 68 45 L 40 78 C 37 83 45 86 50 81 L 105 48 Z" fill="url(#wingGrad1)" stroke="#FFF" strokeWidth="0.5" />
              <circle cx="41" cy="81" r="3" fill="#22C55E" className="animate-ping" />
              <path d="M 74 38 L 54 12 C 51 8 57 7 61 11 L 100 37 Z" fill="#1E293B" opacity="0.9" />
              <circle cx="55" cy="9" r="3" fill="#EF4444" className="animate-ping" />
              <rect x="70" y="56" width="18" height="8" rx="4" fill="#334155" stroke="#94A3B8" strokeWidth="0.5" />
              <rect x="84" y="57" width="4" height="6" rx="2" fill="#F59E0B" />
              <path d="M 28 46 C 60 46 120 45 142 46 C 134 48 60 49 28 48 Z" fill="hsl(32, 76%, 60%)" />
              <defs>
                <linearGradient id="fuseGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CBD5E1" />
                  <stop offset="40%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
                <linearGradient id="wingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#64748B" />
                </linearGradient>
                <linearGradient id="tailGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(32, 76%, 60%)" />
                  <stop offset="100%" stopColor="hsl(207, 53%, 36%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* PLANE 2: Right to Left Aeroplane (Staggered Animation) */}
      <div className="absolute inset-0 z-20 animate-aeroplane-flight-reverse">
        <div className="relative w-full h-full">
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rotate-[12deg] filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]">
            
            {/* Contrail Streaming to the Right behind plane facing Left */}
            <div className="absolute top-[32px] left-[100px] w-[400px] h-[14px] bg-gradient-to-r from-white via-sky-200/80 to-transparent rounded-full blur-[3px] opacity-90 animate-contrail-pulse" />
            <div className="absolute top-[38px] left-[95px] w-[300px] h-[9px] bg-gradient-to-r from-amber-200 via-amber-400/60 to-transparent rounded-full blur-[4px] opacity-80" />

            {/* Engine Glows */}
            <div className="absolute top-[28px] left-[98px] w-4 h-4 bg-sky-400 rounded-full blur-[2px] animate-ping" />
            <div className="absolute top-[40px] left-[98px] w-4 h-4 bg-amber-400 rounded-full blur-[2px] animate-ping" style={{ animationDelay: '0.2s' }} />

            {/* Jet Airliner 2 (Facing Left) */}
            <svg width="140" height="80" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)">
              <path d="M 20 38 L 8 10 C 5 4 12 3 17 7 L 44 36 Z" fill="url(#tailGrad2)" stroke="#FFF" strokeWidth="0.5" />
              <path d="M 16 42 L 3 52 C 0 55 7 57 11 54 L 38 44 Z" fill="#0F172A" opacity="0.85" />
              <path d="M 14 40 C 35 37 115 32 148 40 C 158 42 158 48 148 50 C 115 58 35 53 14 50 C 7 49 7 41 14 40 Z" fill="url(#fuseGrad2)" stroke="#FFF" strokeWidth="0.75" />
              <path d="M 132 40 C 142 41 146 44 142 47 C 136 47 130 44 132 40 Z" fill="#38BDF8" stroke="#38BDF8" strokeWidth="0.75" />
              <g fill="#38BDF8">
                <circle cx="60" cy="44" r="1.8" />
                <circle cx="70" cy="44" r="1.8" />
                <circle cx="80" cy="44" r="1.8" />
                <circle cx="90" cy="44" r="1.8" />
                <circle cx="100" cy="44" r="1.8" />
              </g>
              <path d="M 68 45 L 40 78 C 37 83 45 86 50 81 L 105 48 Z" fill="url(#wingGrad2)" stroke="#FFF" strokeWidth="0.5" />
              <circle cx="41" cy="81" r="3" fill="#EF4444" className="animate-ping" />
              <path d="M 74 38 L 54 12 C 51 8 57 7 61 11 L 100 37 Z" fill="#1E293B" opacity="0.9" />
              <circle cx="55" cy="9" r="3" fill="#22C55E" className="animate-ping" />
              <rect x="70" y="56" width="18" height="8" rx="4" fill="#334155" stroke="#94A3B8" strokeWidth="0.5" />
              <rect x="84" y="57" width="4" height="6" rx="2" fill="#38BDF8" />
              <path d="M 28 46 C 60 46 120 45 142 46 C 134 48 60 49 28 48 Z" fill="#38BDF8" />
              <defs>
                <linearGradient id="fuseGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E2E8F0" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
                <linearGradient id="wingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
                <linearGradient id="tailGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="hsl(207, 53%, 36%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Sparkles & Sky Stardust */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="absolute top-[18%] left-[20%] w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
        <div className="absolute top-[30%] left-[70%] w-2.5 h-2.5 bg-white rounded-full opacity-90 animate-pulse" style={{ animationDuration: '1.8s' }} />
        <div className="absolute top-[48%] left-[85%] w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDuration: '3.2s' }} />
        <div className="absolute top-[68%] left-[38%] w-2.5 h-2.5 bg-sky-300 rounded-full opacity-80 animate-pulse" style={{ animationDuration: '2.2s' }} />
      </div>
    </div>
  );
};
