export default function IndexPage() {
  return (
    <div className="p-8">
      {/* <h1 className="text-2xl font-bold mb-6">manfromexistence/ui</h1> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ColorSwatch name="background" />
        <ColorSwatch name="foreground" />
        <ColorSwatch name="card" />
        <ColorSwatch name="card-foreground" />
        <ColorSwatch name="popover" />
        <ColorSwatch name="popover-foreground" />
        <ColorSwatch name="primary" />
        <ColorSwatch name="primary-foreground" />
        <ColorSwatch name="secondary" />
        <ColorSwatch name="secondary-foreground" />
        <ColorSwatch name="muted" />
        <ColorSwatch name="muted-foreground" />
        <ColorSwatch name="accent" />
        <ColorSwatch name="accent-foreground" />
        <ColorSwatch name="destructive" />
        <ColorSwatch name="destructive-foreground" />
        <ColorSwatch name="border" />
        <ColorSwatch name="input" />
        <ColorSwatch name="ring" />
        <ColorSwatch name="radius" label="Not a color" />
        <ColorSwatch name="chart-1" />
        <ColorSwatch name="chart-2" />
        <ColorSwatch name="chart-3" />
        <ColorSwatch name="chart-4" />
        <ColorSwatch name="chart-5" />
        <ColorSwatch name="sidebar-background" />
        <ColorSwatch name="sidebar-foreground" />
        <ColorSwatch name="sidebar-primary" />
        <ColorSwatch name="sidebar-primary-foreground" />
        <ColorSwatch name="sidebar-accent" />
        <ColorSwatch name="sidebar-accent-foreground" />
        <ColorSwatch name="sidebar-border" />
        <ColorSwatch name="sidebar-ring" />
      </div>
    </div>
  )
}

function ColorSwatch({ name, label }: { name: string, label?: string }) {
  // Determine if this is likely a dark background for text contrast
  const isDarkColor = name.includes("foreground") || 
                      name === "primary" ||
                      name === "destructive" ||
                      name === "chart-3";
  
  return (
    <div 
      className="p-6 rounded-md flex items-center justify-center h-32 border"
      style={{ backgroundColor: name === "radius" ? "#f0f0f0" : `hsl(var(--${name}))` }}
    >
      <div className={`px-2 py-1 rounded`}>
        <p 
          className="font-bold text-transparent"
          style={{ 
            background: 'linear-gradient(to right, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: isDarkColor ? 'drop-shadow(0px 0px 1px rgba(255,255,255,0.7))' : 'drop-shadow(0px 0px 1px rgba(0,0,0,0.7))'
          }}
        >
          {label || `bg-${name}`}
        </p>
      </div>
    </div>
  )
}

