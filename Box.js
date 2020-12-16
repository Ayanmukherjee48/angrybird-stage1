class Box{
    constructor(x,y,width,height){
        var options ={
            restitution: 0.2,
            friction:1.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width
        this.height = height
    }

    display(){

        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill (255)
        strokeWeight(3)
        stroke("blue")
        rect(0,0,this.width,this.height);
        pop()
    }


}

