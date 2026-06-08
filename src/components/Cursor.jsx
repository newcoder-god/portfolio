import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')
    let rx = 0, ry = 0

    const move = (e) => {
      cur.style.left = e.clientX + 'px'
      cur.style.top = e.clientY + 'px'
    }
    const follow = () => {
      const cx = parseFloat(cur.style.left) || 0
      const cy = parseFloat(cur.style.top) || 0
      rx += (cx - rx) * 0.12
      ry += (cy - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(follow)
    }
    window.addEventListener('mousemove', move)
    follow()
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="cur" className="hidden md:block" />
      <div id="cur-ring" className="hidden md:block" />
    </>
  )
}
