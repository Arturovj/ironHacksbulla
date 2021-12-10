class Player {
    constructor(ctx){
        this.ctx = ctx 

        this.width = 84
        this.height = 84

        this.x = 50
        this.y = 50

        this.img = new Image ()
        this.img.src = './images/hasbullabien.png'

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
        }
        
        this.vx = 0
        this.vy = 0

        this.ay = 0.3

        this.jumping = false
        this.maxY = 335
    }

    draw(){
       this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height,
       )

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

    }


    onKeyDown(keyCode) {
        if (keyCode === KEY_SPACEBAR) {
          this.vy = -10
          this.jumping = true
        }
    }



}