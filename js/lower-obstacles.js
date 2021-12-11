class Lowerobstacle {
    constructor(ctx,x,y, initialSpeed){
        this.ctx = ctx
        this.x = x
        this.y = y
        
        this.width = 46
        this.height = 96

        

        this.img = new Image()
        this.img.src = './images/cactus1.png'

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
        }

        this.vx = initialSpeed
    }


    draw(){
        this.ctx.save()
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )
        this.ctx.restore()
        this.move()
    }
    move(){
        this.x += this.vx
    }

    
}