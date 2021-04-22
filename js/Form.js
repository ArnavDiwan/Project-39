class Form {

  constructor() {
    this.input = createInput("Tell your name");
    this.button = createButton('Click me to start the game');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.wait = createElement('h2')
    this.hint = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.wait.hide()
  }

  display(){
    this.title.html("Bike and car survival");
    this.title.position(displayWidth/2 - 50, 0);

    
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.hint.html("Hint (there is a code in this game if you press that you will get an extra boost to know it ask the creator)");
    this.hint.position(displayWidth - 1270, displayHeight/2 + 200)

2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.hint.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.wait.html("please wait until your opponent comes")
      this.wait.position(displayWidth/2 - 70, displayHeight/2);
      // this.hint.html("Hint (there is a code letter in this game if you press that you will get an extra boost and you will win)");
      // this.hint.position(displayWidht/2 + 50, displayHeight/2)
    });

  }
}
