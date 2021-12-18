class ScoreImage {
    constructor(ctx, imageType){
        this.ctx = ctx 

        this.width = 300
        this.height = 300

        this.x = 350
        this.y = 175

        this.score = 0
        
        this.images = [
            './images/hasbullaenfadado2.png',
            './images/hasbullascore.jpg',
            './images/hasbullatraje.jpg',
            './images/hasbullaganador.jpg',

        ]

        this.img = new Image ()
        this.img.src = this.images[imageType]

        console.log(this.img.src)

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
            this.draw()
        }
    
}




draw(){
   this.ctx.save()
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.9)'
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.font = 'bold 32px sans-serif'
    this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 5)

    
     
    if (this.score >= 0 && this.score < 5) {
        this.ctx.fillText(`Hasbulla is not happy, you did ${this.score} points` , this.ctx.canvas.width / 2, this.ctx.canvas.height / 5 + 50)
    }
    else if (this.score >= 5 && this.score < 15) {
        this.ctx.fillText(`Hasbulla is happy, you did ${this.score} points` , this.ctx.canvas.width / 2, this.ctx.canvas.height / 5 + 50)
    }
    else if (this.score >= 15 && this.score < 25) {
        this.ctx.fillText(`Hasbulla is the boss you did ${this.score} points` , this.ctx.canvas.width / 2, this.ctx.canvas.height / 5 + 50)
    }

    else if (this.score >= 25 ) {
        this.ctx.fillText(`Hasbulla is the champion you did ${this.score} points` , this.ctx.canvas.width / 2, this.ctx.canvas.height / 5 + 50)
    }
    

    
    this.ctx.restore()
 

    if (this.img.isReady) {
        console.log('ready')
        this.ctx.drawImage(   
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
           )
    }
 }



}