const OBSTACLE_FRAMES = 120

const OBSTACLE_UPPER_FRAMES = 1000


class Game {
   constructor(ctx){
       this.ctx = ctx
       this.gameSpeed = 0

       this.background = new Background(ctx)
       this.backgroundfooter = new BackgroundFooter(ctx)
       this.player = new Player(ctx)
       this.scoreimage = undefined
       

       this.obstacles = []


       this.obstacleFramesCount = 0
       this.intervalId = undefined

       this.hasbullaSound = new Audio('/sounds/hasbullajump.wav')
       this.hasbullaSound.volume = 0.3
       
       this.score = 0

       this.fps = 1000 / 60
   }




   start(){
    if(!this.intervalId) {
        this.intervalId = setInterval(() => {
            if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
                this.addLowerObstacle()
                
                
              }

            if (this.obstacleFramesCount % OBSTACLE_UPPER_FRAMES === 0) {
                this.addUpperObstacle()
      
               
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

    

    this.ctx.fillStyle = 'black'
    this.ctx.font = ' bold 20px sans-serif'

    this.ctx.fillText(`Score: ${this.score} POINTS`, 80, 40)

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

  addUpperObstacle(){
      const min = this.ctx.canvas.width;
      const max = this.ctx.canvas.width + 2000;
      const x = Math.floor(Math.random() * (max - min) + min)
    this.obstacles.push(
        new Upperobstacle(this.ctx, x , 250, this.backgroundfooter.vx -5)
      )

  }

   onKeyDown(keyCode) {
    this.player.onKeyDown(keyCode)
    this.hasbullaSound.play()
  }


  checkCollissions() {
    const condition = this.obstacles.some(obstacle => this.player.collidesWith(obstacle))

    if (condition) {
      this.gameOver()
    }
}





gameOver() {
    

    let imageType = 0;


    if (this.score > 0 && this.score < 5) {
        imageType = 0
    } else if(this.score >= 5 && this.score < 15) {
        imageType = 1
    } else if(this.score >= 15 && this.score < 25) {
        imageType = 2
    } else if(this.score >= 25 && this.score < 35) {
        imageType = 3
    }

    this.scoreimage = new ScoreImage(ctx, imageType)

    clearInterval(this.intervalId)
    this.scoreimage.score = this.score

  }


}

