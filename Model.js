class Model{
    constructor(){
        let canvas = document.getElementById("primarystage");
        this.player = new Player(0, (canvas.height / 2) - (playerHeight / 2));
        this.planets = [];
        let i = 0;
        while (i < numPlanets){
            newPlanet = new Planet(Math.random() * (parseInt(canvas.width) - 50) + 50, Math.random() * parseInt(canvas.height), 50);
        }
    }

    getTheta(player, normalizedOtherX, normalizedOtherY){
        normalizedPlayerX = player.x + player.width / 2;
		normalizedPlayerY = document.getElementById("primarystage").height - player.y - (player.height / 2);
		dx = normalizedOtherX - normalizedPlayerX;
		dy = normalizedOtherY - normalizedPlayerY;
		if (dy == 0) {
			dy += .01;
		}
		if (dx == 0) {
			dx += .01;
		}
		theta = Math.atan(dy / dx);
		if (dy < 0 && dx < 0) {
			theta += Math.PI;
		} else if (dy > 0 && dx < 0) {
			theta += Math.PI;
		} else if (dy < 0 && dx > 0) {
			theta += 2 * Math.PI;
		}
		return theta;
    }

    distance(x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2));
    }
}

