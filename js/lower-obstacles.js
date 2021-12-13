class Lowerobstacle {
    constructor(ctx,x,y, initialSpeed){
        this.ctx = ctx
        this.x = x
        this.y = y
        
        this.width = 100
        this.height = 100

        

        this.img = new Image()
        this.img.src = './images/hasbullamalo.png'

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
            345,
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