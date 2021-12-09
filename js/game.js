const OBSTACLE_FRAMES = 120

class Game {
   constructor(ctx){
       this.ctx = ctx

       this.background = new Background(ctx)
       this.backgroundfooter = new BackgroundFooter(ctx)



       this.fps = 1000 / 60
   }




   start(){
    if(!this.intervalId) {
        this.intervalId = setInterval(() => {
           /* if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
                this.addLowerObstacle()
      
                this.obstacleFramesCount = 0
              }*/
            this.clear()

            this.move()

            this.draw()

           // this.checkCollissions()

           // this.obstacleFramesCount++




        }, this.fps)
    }
   }

   clear(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
   }

   move(){
       this.background.move()
       this.backgroundfooter.move()

   }

   draw(){
       this.background.draw()
       this.backgroundfooter.draw()

   }

}

