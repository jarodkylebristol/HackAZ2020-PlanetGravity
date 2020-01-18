(function(){
    let player;
    let planets = [];

    function draw(){
        let canvas = document.getElementById("primarystage");
        let ctx = canvas.getContext("2d");
        let playerImg = document.getElementById("player");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(playerImg, player.x, player.y, playerImg.width, playerImg.height);
    }

    window.onload = function(){
        player = new Player(0,360);
        draw();
    }
})();