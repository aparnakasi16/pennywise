class Joker{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h =h;
        this.image = loadImage("./pennywiseimgs/j.png");
    }

    movement(){
        if(keyIsDown(68) ){
            this.body.position.x += 5 
        }
        if(keyIsDown(65)){
            this.body.position.x -= 5 
        }
    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        image(this.image,pos.x, pos.y,this.w, this.h);
        pop();

    }


}