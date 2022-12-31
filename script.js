const secondhand =document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setTime() {
const currentTime = new Date();
  const seconds =currentTime.getSeconds()
  const secondDeg = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondDeg}deg)`
}

  
  
}
                                        