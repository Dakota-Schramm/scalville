import React, { useState, useEffect } from 'react'

const PepperScale = ({ peppers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPepper = peppers?.[currentIndex]
  const {url, frontmatter} = currentPepper;
  const {title} = frontmatter;

  useEffect(() => {
    function keyDown(e) {
      console.log(e)
      switch (e.key) {
        case "ArrowDown": {
          setCurrentIndex((c) => c-1)
          return
        }
        case "ArrowUp": {
          setCurrentIndex((c) => c+1)
          return
        }
      }
    }
    document.addEventListener("keydown", keyDown)
  
    return () => document.removeEventListener("keydown", keyDown)
  }, [])
  

  return (
    <>
      <section className="flex flex-col">
        {currentPepper 
          ? <a href={url}>{title}</a>
          : null
        }
      </section>
      <meter className="rotate-90"></meter>
    </>
  )
}

export default PepperScale