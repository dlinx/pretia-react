import React, { useState } from 'react'
import { useSwipe } from '../hooks/useSwipe';
import './Carousel.css'

type Props = {

}

export const Carousel: React.FC<Props> = (props) => {
  let children = React.Children.toArray(props.children);
  const [activeSlide, setActiveSlide] = useState(0);
  const [swipePos, setSwipePos] = useState(0);

  const nextSlide = () => {
    const _nextSlide = activeSlide + 1 > children.length - 1 ? 0 : activeSlide + 1;
    setActiveSlide(_nextSlide);
  }

  const prevSlide = () => {
    const _prevSlide = activeSlide - 1 < 0 ? children.length - 1 : activeSlide - 1;
    setActiveSlide(_prevSlide);
  }
  const swipe = useSwipe({
    onSwiping: (pos) => {
      setSwipePos(pos)
    },
    onSwipeEnd: (pos) => {
      if (pos > 50) {
        prevSlide()
        setSwipePos(0)
      } else if (pos < -50) {
        nextSlide()
        setSwipePos(0)
      } else {
        setSwipePos(0)
      }
    }
  });

  return <div className="carousel-container"
    {...swipe}
  >
    <ul className="slide-container">
      {children.map((child, i) =>
        <li key={i} className="carousel-slide" style={{ left: `${650 * (i - activeSlide) + swipePos}px` }}>
          {child}
        </li>
      )}
      <li key='prev' className="arrow-container left" onClick={() => prevSlide()}>&lt;</li>
      <li key='next' className="arrow-container right" onClick={() => nextSlide()}>&gt;</li>
    </ul>
    <ul className="carousel-pagination">
      {children.map((c, i) => <li key={i} className="carousel-page"></li>)}
    </ul>
  </div>
}