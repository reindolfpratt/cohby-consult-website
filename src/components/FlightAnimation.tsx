import React from "react";

export const FlightAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Flight Path SVG with Animated Dash & Nodes */}
      <svg
        className="absolute w-full h-full inset-0 opacity-40"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Flight Path Gradient */}
          <linearGradient id="flightPathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(32, 76%, 60%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(0, 0%, 100%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(32, 76%, 60%)" stopOpacity="0.3" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Contrail Gradient */}
          <linearGradient id="contrailGrad" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="70%" stopColor="rgba(230, 200, 150, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Primary Flight Arc Across Sky */}
        <path
          d="M -100 650 Q 350 200 800 320 T 1600 150"
          stroke="url(#flightPathGrad)"
          strokeWidth="2.5"
          strokeDasharray="8 10"
          className="animate-flight-dash"
        />

        {/* Secondary Destination Flight Arc */}
        <path
          d="M -50 450 Q 550 50 1100 280 T 1550 400"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />

        {/* Destination Node 1 - USA / West */}
        <g transform="translate(250, 370)">
          <circle r="12" fill="hsl(32, 76%, 60%)" opacity="0.2" className="animate-ping" />
          <circle r="5" fill="hsl(32, 76%, 60%)" filter="url(#nodeGlow)" />
          <circle r="2" fill="#FFF" />
          <text x="12" y="4" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif" fontWeight="600">USA & Canada</text>
        </g>

        {/* Destination Node 2 - UK & Europe */}
        <g transform="translate(720, 290)">
          <circle r="14" fill="#FFF" opacity="0.2" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle r="6" fill="#FFF" filter="url(#nodeGlow)" />
          <circle r="2.5" fill="hsl(32, 76%, 60%)" />
          <text x="14" y="-6" fill="rgba(255,255,255,0.9)" fontSize="12" fontFamily="sans-serif" fontWeight="700">UK & Europe</text>
        </g>

        {/* Destination Node 3 - Nordic / Finland & Denmark */}
        <g transform="translate(1180, 200)">
          <circle r="12" fill="hsl(32, 76%, 60%)" opacity="0.25" className="animate-ping" style={{ animationDuration: '2.5s' }} />
          <circle r="5" fill="hsl(32, 76%, 60%)" filter="url(#nodeGlow)" />
          <circle r="2" fill="#FFF" />
          <text x="12" y="4" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="sans-serif" fontWeight="600">Nordics & Austria</text>
        </g>
      </svg>

      {/* Floating Cloud Layer 1 - Background */}
      <div className="absolute inset-0 opacity-30 animate-cloud-drift-slow">
        <div className="absolute top-[15%] left-[-10%] w-[500px] h-[180px] bg-white/20 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[-5%] w-[600px] h-[220px] bg-white/15 rounded-full blur-3xl" />
      </div>

      {/* Floating Cloud Layer 2 - Midground */}
      <div className="absolute inset-0 opacity-25 animate-cloud-drift-fast">
        <div className="absolute top-[25%] left-[30%] w-[400px] h-[150px] bg-secondary/20 rounded-full blur-2xl" />
        <div className="absolute top-[60%] left-[10%] w-[450px] h-[160px] bg-white/20 rounded-full blur-2xl" />
      </div>

      {/* Main Flying Aeroplane Container */}
      <div className="absolute inset-0 animate-aeroplane-flight">
        <div className="relative w-full h-full">

          {/* Aeroplane Group (Rotated along flight pitch) */}
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            
            {/* Contrail / Vapor Trail behind Airplane */}
            <div className="absolute top-[22px] right-[75px] w-[320px] h-[10px] bg-gradient-to-l from-white/90 via-white/40 to-transparent rounded-full blur-[2px] opacity-80 animate-contrail-pulse" />
            <div className="absolute top-[28px] right-[70px] w-[260px] h-[6px] bg-gradient-to-l from-amber-200/80 via-amber-100/30 to-transparent rounded-full blur-[3px] opacity-70" />

            {/* Jet Engine Glow Particles */}
            <div className="absolute top-[18px] right-[72px] w-3 h-3 bg-amber-400 rounded-full blur-[2px] animate-ping" />
            <div className="absolute top-[27px] right-[72px] w-3 h-3 bg-amber-300 rounded-full blur-[2px] animate-ping" style={{ animationDelay: '0.2s' }} />

            {/* High Detail Vector Commercial Jet Airliner */}
            <svg
              width="115"
              height="65"
              viewBox="0 0 120 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              {/* Tail Stabilizers */}
              <path
                d="M 15 28 L 5 8 C 3 4 8 3 12 6 L 32 26 Z"
                fill="url(#tailGrad)"
              />
              <path
                d="M 12 32 L 2 40 C 0 42 5 44 8 42 L 28 34 Z"
                fill="hsl(207, 53%, 25%)"
                opacity="0.8"
              />

              {/* Main Fuselage Body */}
              <path
                d="M 10 30 C 25 28 85 24 110 30 C 118 32 118 36 110 38 C 85 44 25 40 10 38 C 5 37 5 31 10 30 Z"
                fill="url(#fuselageGrad)"
              />

              {/* Cockpit Glass */}
              <path
                d="M 98 30 C 105 31 108 33 105 35 C 100 35 96 33 98 30 Z"
                fill="#38BDF8"
                opacity="0.9"
              />

              {/* Passenger Windows Row */}
              <g fill="#38BDF8" opacity="0.75">
                <circle cx="45" cy="33" r="1.2" />
                <circle cx="52" cy="33" r="1.2" />
                <circle cx="59" cy="33" r="1.2" />
                <circle cx="66" cy="33" r="1.2" />
                <circle cx="73" cy="33" r="1.2" />
                <circle cx="80" cy="33" r="1.2" />
                <circle cx="87" cy="33" r="1.2" />
              </g>

              {/* Main Swept Wing */}
              <path
                d="M 50 34 L 30 58 C 28 62 34 64 38 60 L 78 36 Z"
                fill="url(#wingGrad)"
              />

              {/* Wingtip Light (Green Navigation Light) */}
              <circle cx="31" cy="60" r="2" fill="#22C55E" className="animate-pulse" />

              {/* Top Wing / Far Side Wing */}
              <path
                d="M 54 29 L 40 10 C 38 7 42 6 45 9 L 74 28 Z"
                fill="hsl(207, 53%, 28%)"
                opacity="0.9"
              />

              {/* Red Navigation Light on Top Wingtip */}
              <circle cx="41" cy="8" r="2" fill="#EF4444" className="animate-pulse" />

              {/* Jet Engine 1 (Underwing) */}
              <rect x="52" y="42" width="14" height="6" rx="3" fill="#64748B" />
              <rect x="63" y="43" width="3" height="4" rx="1.5" fill="#F59E0B" />

              {/* Fuselage Accent Stripe (Cohby Brand Secondary Gold Color) */}
              <path
                d="M 20 35 C 45 35 90 34 106 35 C 100 36 50 37 20 37 Z"
                fill="hsl(32, 76%, 60%)"
              />

              {/* SVG Gradients */}
              <defs>
                <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E2E8F0" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>

                <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>

                <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(32, 76%, 60%)" />
                  <stop offset="100%" stopColor="hsl(207, 53%, 36%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>

      {/* Floating Sparkles & Sky Stardust */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[25%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[35%] left-[65%] w-2 h-2 bg-white rounded-full opacity-80 animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute top-[50%] left-[80%] w-1.5 h-1.5 bg-secondary rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[70%] left-[45%] w-2 h-2 bg-amber-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '2.5s' }} />
      </div>
    </div>
  );
};
