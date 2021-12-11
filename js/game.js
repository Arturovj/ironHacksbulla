const OBSTACLE_FRAMES = 120

class Game {
   constructor(ctx){
       this.ctx = ctx
       this.gameSpeed = 0

       this.background = new Background(ctx)
       this.backgroundfooter = new BackgroundFooter(ctx)
       this.player = new Player(ctx)
       this.scoreimage = new ScoreImage(ctx)
       

       this.obstacles = []


       this.obstacleFramesCount = 0
       this.intervalId = undefined

       this.score = 0

       this.fps = 1000 / 60
   }




   start(){
    if(!this.intervalId) {
        this.intervalId = setInterval(() => {
            if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
                this.addLowerObstacle()
      
                this.obstacleFramesCount = 0
              }
            this.clear()

            this.move()

            this.draw()



            this.checkCollissions()

           this.obstacleFramesCount++




        }, this.fps)

        this.controlGameSpeed()
    }
   }

   clear(){
       const previousObstaclesLength = this.obstacles.length
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.obstacles = this.obstacles.filter(obstacle => obstacle.x + obstacle.width > 0)

    if (this.obstacles.length < previousObstaclesLength) {
        this.score++
      }
   }

   move(){
       this.background.move()
       this.backgroundfooter.move()
       this.player.move()

   }

   draw(){
       this.background.draw()
       this.obstacles.forEach( obstacle => obstacle.draw())
       this.backgroundfooter.draw()
       this.player.draw()
       this.drawScore()


   }


   drawScore() {
    this.ctx.save()

    

    this.ctx.fillStyle = 'orange'
    this.ctx.font = ' bold 20px sans-serif'

    this.ctx.fillText(`Score: ${this.score} ptos`, 80, 40)

    this.ctx.restore()
}

   controlGameSpeed(){
    setInterval(() => {

        console.log(this.gameSpeed, this.backgroundfooter.vx)
        console.log(this.gameSpeed, this.obstacles[0].vx)

        this.gameSpeed += 0.1
        this.background.vx -= this.gameSpeed
        this.backgroundfooter.vx -= this.gameSpeed
        this.obstacles.forEach((obstacle)=>{
            obstacle.vx -= this.gameSpeed
        })
    }, 3000)

   }


   addLowerObstacle() {
    this.obstacles.push(
      new Lowerobstacle(this.ctx, 900 , 335, this.backgroundfooter.vx)
    )
  }

   onKeyDown(keyCode) {
    this.player.onKeyDown(keyCode)
  }


  checkCollissions() {
    const condition = this.obstacles.some(obstacle => this.player.collidesWith(obstacle))

    if (condition) {
      this.gameOver()
    }
}





gameOver() {
    clearInterval(this.intervalId)
    this.scoreimage.score = this.score
    this.scoreimage.draw()

    

  }

}

