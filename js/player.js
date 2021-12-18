class Player {
    constructor(ctx){
        this.ctx = ctx 

        this.width = 100
        this.height = 100

        this.x = 50
        this.y = 335

        this.img = new Image ()
        this.img.src = './images/hasbullabien.png'

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
        }
        
        this.vx = 0
        this.vy = 0
        

        this.ay = 0.3

        this.horizontalFrames = 4
        this.verticalFrames = 1
    
        this.xFrame = 0
        this.yFrame = 0

        this.jumping = false
        this.maxY = 345

        this.tick = 0
    }

    draw(){
       this.ctx.drawImage(   
        this.img,
        (this.img.width * this.xFrame) / this.horizontalFrames,
        (this.img.height * this.yFrame) / this.verticalFrames,
        this.img.width / this.horizontalFrames,
        this.img.height / this.verticalFrames,
        this.x,
        this.y,
        this.width,
        this.height
       )

       this.tick++

    }

    move(){
        this.vy += this.ay
        this.y += this.vy

        console.log('test caida')

        if (this.y <= 0) {
          this.y = 0
        }
        if (this.y >= this.maxY) {
          this.y = this.maxY
          this.jumping = false
        }

        if (this.tick % 4 === 0) {
            this.xFrame += 1
      
            if (this.xFrame > 3) {
              this.xFrame = 0
            }
          }

    }


    onKeyDown(keyCode) {
        if (keyCode === KEY_SPACEBAR && !this.jumping) {
          this.vy = -10
          this.jumping = true
        }
    }

    collidesWith(obstacle) {

        if (
          this.x +30  < (obstacle.x) + obstacle.width &&
          this.x + (this.width - 50) > obstacle.x &&
          this.y +50 < obstacle.y + obstacle.height &&
          this.y + (this.height -30 ) > obstacle.y
        ) {
            console.log('collision')
          return true
        }
        
        return false
      }

}