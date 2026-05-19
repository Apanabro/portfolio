import { useEffect, useRef, useState } from "react"
import { styled } from "../styles/stitches.config"

const Canvas = styled("canvas", { width:"100%", maxWidth:"720px", height:"120px", borderRadius:"$md" })
const StatRow = styled("div", { display:"flex", gap:"$6", marginTop:"$4", flexWrap:"wrap" })
const Stat = styled("div", { textAlign:"center" })
const StatVal = styled("div", { fontSize:"$2xl", fontWeight:"$bold", color:"$primary" })
const StatLabel = styled("div", { fontSize:"$xs", color:"$textDim" })

export default function ContributionGraph({ username }: { username: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stats, setStats] = useState({ total:0, streak:0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 720; canvas.height = 120
    ctx.fillStyle = "#12121a"; ctx.fillRect(0, 0, 720, 120)

    const cellSize = 11; const gap = 2; const cols = 52; const rows = 7
    let total = 0; let streak = 0; let maxStreak = 0

    ctx.fillStyle = "#1a1a2e"
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
          ctx.fillStyle = "#1a1a2e"
          if (streak > maxStreak) maxStreak = streak
          streak = 0
        }
        ctx.fillRect(x, y, cellSize, cellSize)
        ctx.fillStyle = "#ffffff08"
        ctx.fillRect(x, y, cellSize, 1)
      }
    }
    if (streak > maxStreak) maxStreak = streak
    setStats({ total: total * 3, streak: maxStreak })
  }, [username])

  return (
    <div>
      <Canvas ref={canvasRef} />
      <StatRow>
        <Stat><StatVal>{stats.total}</StatVal><StatLabel>Total Contributions</StatLabel></Stat>
        <Stat><StatVal>{stats.streak}</StatVal><StatLabel>Longest Streak (days)</StatLabel></Stat>
      </StatRow>
    </div>
  )
}