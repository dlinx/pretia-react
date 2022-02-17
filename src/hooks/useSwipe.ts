import { useState } from "react"
import { Carousel } from "../components/Carousel"

type SwipeEventHandlers = {
  onSwiping?: (x: number) => void
  onSwipeEnd?: (x: number) => void
}

export const useSwipe = (evt: SwipeEventHandlers) => {
  const [startPoint, setStartPoint] = useState(0)
  const [delta, setDelta] = useState(0)

  const onTouchStart = (e: any) => {
    if (e.touches[0]) {
      setStartPoint(e.touches[0].clientX)
    }
  }
  const onTouchEnd = (e: any) => {
    if (evt.onSwipeEnd) {
      evt.onSwipeEnd(delta)
    }
  }
  const onTouchMove = (e: any) => {
    if (e.touches[0]) {
      const delta = e.touches[0].clientX - startPoint;
      setDelta(delta)
    }
    if (evt.onSwiping) {
      evt.onSwiping(delta)
    }
  }
  return { onTouchStart, onTouchEnd, onTouchMove }
}