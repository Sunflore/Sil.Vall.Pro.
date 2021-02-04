class CButtons{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
        }
        this.rand= this.rand();
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

  rand() {
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1: CButtons.addImage(bAI);
      case 2: CButtons.addImage(bBI);
      case 3: CButtons.addImage(bCI);
      case 4: CButtons.addImage(bDI);
    }
    return rand;
  }

      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
}