class Pennywise{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h =h;
        this.image = loadImage("./pennywiseimgs/pp.gif");
        this.image1 = loadImage("./pennywiseimgs/penny.gif")
    }

    movement(){
        if(keyIsDown(RIGHT_ARROW)){
            this.body.position.x += 5 
        }
        if(keyIsDown(LEFT_ARROW)){
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
    collideDisplay(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        image(this.image1,pos.x, pos.y,this.w, this.h);
        pop();  
    }


}