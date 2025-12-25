'use client'
import React from 'react'
import Lenis from '@studio-freight/lenis'
import { cn } from './lib/utils'
import { CircularGallery } from '../components/ui/autoscroll'

import cert0 from '../public/cert0.jpeg'
import cert2 from '../public/cert2.jpeg'
import cert4 from '../public/cert4.jpeg'
import cert5 from '../public/cert5.jpeg'
import cert6 from '../public/cert6.jpeg'
import cert7 from '../public/cert7.jpeg'
import cert8 from '../public/cert8.jpeg'

export default function DefaultDemo() {

  React.useEffect(() => {
    const lenis = new Lenis()
    function raf(time:number){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const images = [
    { image: cert8.src, text: 'Dinesh #1' },
    { image: cert7.src, text: 'Ramu #2' },
    { image: cert0.src, text: 'Murugan #3' },
    { image: cert5.src, text: 'Venkatesh #4' },
    { image: cert4.src, text: 'Sudhagar #5' },
    { image: cert2.src, text: 'Surendar #6' },
    { image: cert6.src, text: 'Karthick #7' },
  ]

  return (
    <main className="w-full bg-black py-12">

      {/* Heading */}
      <div className="relative flex h-[10vh] items-center justify-center mb-10">
        <div aria-hidden className={cn(
          'absolute -top-1/2 left-1/2 h-[120vmin] w-[140vmin] -translate-x-1/2 rounded-full',
          'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.08),transparent_55%)] blur-[40px]'
        )}/>
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white tracking-tight">
          Students Achievements
        </h1>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileScroller images={images}/>
      </div>

      {/* Desktop */}
      <DesktopGallery images={images}/>
    </main>
  )
}

/* -------------------- DESKTOP GALLERY -------------------- */

function DesktopGallery({images}:{images:any[]}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if(!el) return

    let isDown=false, startX=0, scrollLeft=0

    const down=(e:any)=>{
      isDown=true
      startX=e.pageX-el.offsetLeft
      scrollLeft=el.scrollLeft
    }
    const move=(e:any)=>{
      if(!isDown) return
      e.preventDefault()
      el.scrollLeft=scrollLeft-(e.pageX-el.offsetLeft-startX)
    }
    const up=()=>isDown=false

    el.addEventListener('mousedown',down)
    el.addEventListener('mousemove',move)
    el.addEventListener('mouseup',up)
    el.addEventListener('mouseleave',up)

    return()=>{el.removeEventListener('mousedown',down);el.removeEventListener('mousemove',move);el.removeEventListener('mouseup',up);el.removeEventListener('mouseleave',up)}
  },[])

  return (
    <div
      ref={ref}
      data-lenis-prevent
      className="hidden md:block h-[520px] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
    >
      <div className="min-w-[1200px] h-full">
        <CircularGallery items={images} bend={3} borderRadius={0.05}/>
      </div>
    </div>
  )
}

/* -------------------- MOBILE AUTO SCROLLER -------------------- */

function MobileScroller({images}:{images:any[]}) {
  const ref=React.useRef<HTMLDivElement>(null)
  const [touching,setTouching]=React.useState(false)

  React.useEffect(()=>{
    let raf:number
    const loop=()=>{
      if(!touching && ref.current) ref.current.scrollLeft+=0.45
      raf=requestAnimationFrame(loop)
    }
    raf=requestAnimationFrame(loop)
    return()=>cancelAnimationFrame(raf)
  },[touching])

  return (
    <div
      ref={ref}
      onTouchStart={()=>setTouching(true)}
      onTouchEnd={()=>setTouching(false)}
      className="flex gap-4 overflow-x-auto px-4 py-6 scrollbar-hide"
    >
      {images.map((item,i)=>(
        <div key={i} className="flex-shrink-0 w-44 h-64 rounded-xl overflow-hidden relative shadow-xl">
          <img src={item.image} className="w-full h-full object-cover"/>
          <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white text-xs py-2 text-center">
           
          </div>
        </div>
      ))}
    </div>
  )
}
