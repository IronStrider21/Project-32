class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);

    }
    display()
    {
      //console.log(this.body.speed);
      if((this.body.speed)<7)
      {
        super.display();
      } else
      {
        World.remove(world,this.body)
      }
    }
  
  };