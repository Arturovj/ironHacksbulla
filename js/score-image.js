class ScoreImage {
    constructor(ctx){
        this.ctx = ctx 

        this.width = 400
        this.height = 400

        this.x = 250
        this.y = 150

        this.score = 0

        this.img = new Image ()
        this.img.src = './images/hasbullascore.jpg'

        this.img.isReady = false

        this.img.onload = () => {
            this.img.isReady = true
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
    this.ctx.fillText(`Your final Score ${this.score}` , this.ctx.canvas.width / 2, this.ctx.canvas.height / 5 + 50)
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