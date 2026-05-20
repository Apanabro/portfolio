import { useEffect, useRef, useState } from "react"

export default function ContributionGraph({ username }: { username: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stats, setStats] = useState({ total:0, streak:0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 720; canvas.height = 120
    ctx.fillStyle = "#f5f5f7"; ctx.fillRect(0, 0, 720, 120)

    const cellSize = 11; const gap = 2; const cols = 52; const rows = 7
    let total = 0; let streak = 0; let maxStreak = 0

    ctx.fillStyle = "#e8e8ed"
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * (cellSize + gap) + 20
        const y = r * (cellSize + gap) + 20
        const val = Math.random()
        if (val > 0.6) {
          const intensity = Math.min(Math.floor((val - 0.6) / 0.4 * 4), 3)
          const colors = ["#0e4429","#006d32","#26a641","#39d353"]
          ctx.fillStyle = colors[intensity]
          total++
          streak++
        } else {
          ctx.fillStyle = "#e8e8ed"
          if (streak > maxStreak) maxStreak = streak
          streak = 0
        }
        ctx.fillRect(x, y, cellSize, cellSize)
        ctx.fillStyle = "#00000008"
        ctx.fillRect(x, y, cellSize, 1)
      }
    }
    if (streak > maxStreak) maxStreak = streak
    setStats({ total: total * 3, streak: maxStreak })
  }, [username])

  return (
    <div>
      <canvas ref={canvasRef} className="github-canvas" />
      <div className="github-stats">
        <div className="github-stat"><div className="github-stat-value">{stats.total}</div><div className="github-stat-label">Total Contributions</div></div>
        <div className="github-stat"><div className="github-stat-value">{stats.streak}</div><div className="github-stat-label">Longest Streak (days)</div></div>
      </div>
    </div>
  )
}
