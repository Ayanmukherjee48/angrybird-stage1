class Bird{
    constructor(x,y){
        var options ={
            restitution: 0.2
        }
        
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.width = 50
        this.height = 50
    }

    display(){
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill ("red")
        
        rect(0,0,this.width,this.height);
        pop()
    }


}
