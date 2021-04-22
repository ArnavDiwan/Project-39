class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car = createSprite(50, 200, 20, 30);
    car.addImage("car", carImg);
    bike = createSprite(700, 200, 20, 30);
    bike.addImage("bike", bikeImg)
    cars = [car, bike];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
  
      var index = 0;

      image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);

      var x = 0;
      var y;

       

      for(var plr in allPlayers){
        
        index = index + 1 ;

        x = x + 400;
        
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
      
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
     // player.velocityY = -5
      player.distance +=10
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      // player.velocityX = -5
       player.distance +=20
       player.update();
     }
     if(keyIsDown(DOWN_ARROW) && player.index !== null){
      // player.velocityX = -5
       player.distance -=20
       player.update();
     }

    drawSprites();
  }
}
