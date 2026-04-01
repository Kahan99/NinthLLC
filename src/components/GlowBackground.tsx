export default function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Central Large Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[160px]" />
      
      {/* Side Color Accents (Subtle) */}
      <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-indigo-500/[0.01] rounded-full blur-[140px]" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Vertical Gradient Lines (Ninth Style) */}
      <div className="absolute inset-0 flex justify-around px-4 opacity-[0.05]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ opacity: Math.random() * 0.5 + 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
