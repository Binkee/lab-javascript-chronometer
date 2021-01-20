class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() =>{
     this.currentTime = this.currentTime + 1
    callback()
    }, 1000)

  }
  getMinutes() {
    let min = Math.floor(this.currentTime / 60);
    return min;
  }
  getSeconds() {
    let sec = Math.floor(this.currentTime % 60 )
    return sec
  }
  twoDigitsNumber(num) {
    if (num <= 9) {
      return "0" + num
    } else if (num > 9) {
      return num.toFixed(2)
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    
    let min = this.twoDigitsNumber(this.getMinutes()) 
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }

}
