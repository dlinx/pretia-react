import React, { useEffect, useState } from 'react';
import './App.css';
import { Carousel } from './components/Carousel';
import { getSlideData } from './services/api'

type Slide = {
  image: string
  link: string
  text: string
}
function App() {
  const [slideData, setSlideData] = useState<Slide[]>([])
  useEffect(() => {
    getSlideData().then(res => {
      setSlideData(res);
    })
  }, [])
  return (
    <div>
      <Carousel>
        {slideData.map((slide, i) =>
          <div key={i} className="image-text-slide">
            <img src={slide.image} />
            <a href={slide.link} target="_blank" className='slide-text'>
              <p>{slide.text}</p>
            </a>
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default App;
