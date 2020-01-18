class Player{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 15;
        this.verticalVelocity = 0;
        this.horizontalVelocity = 0;
        this.canMove = false;
        this.direction = 0;//radians
    }

    launch(){
        this.canMove = true;
        this.horizontalVelocity = Math.cos(this.direction);
        this.verticalVelocity = -1 * Math.sin(this.direction);
    }
    
    turnLeft(){
        this.direction += .05;
        if (this.direction > Math.PI * 2){
            this.direction = this.direction - (Math.PI * 2);
        }
    }

    turnRight(){
        this.direction -= .05;
        if (this.direction < 0){
            this.direction = this.direction + (Math.PI * 2);
        }
    }
}



//howdy