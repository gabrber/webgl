import { handleCSSAnimation } from "../cssAnimation.js"
import { handleCanvasAnimation } from "../canvasAnimation.js"
import { handleThreeAnimation, handleThreeAnimationPrev } from "../threeAnimation.js"
import { SLIDES_COUNT } from "../utils.js"

const title = document.getElementById('title')

let slideIndex = 0

export const nextSlide = () => {
  if(slideIndex >= SLIDES_COUNT){
    slideIndex = 0
  } else {
    slideIndex++
  }

  title.innerHTML = ''
  const text = document.createTextNode(`slide${slideIndex+1}`)
  title.appendChild(text)

  handleCSSAnimation()
  handleCanvasAnimation(slideIndex)
  handleThreeAnimation()
}

export const prevSlide = () => {
  if(slideIndex <= 0){
    slideIndex = SLIDES_COUNT
  } else {
    slideIndex--
  }

  title.innerHTML = ''
  const text = document.createTextNode(`slide${slideIndex+1}`)
  title.appendChild(text)

  handleCSSAnimation()
  handleCanvasAnimation(slideIndex)
  handleThreeAnimationPrev()
}