class Box
{
    constructor(x, y)
    {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        };
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
        this.Visibility=255;
        this.img=loadImage("box.png");
        World.add(world,this.body);
    }
    score()
    {
        if(this.Visibility<0 && this.Visibility>-105)
        {
            score++;
        }
    }
    display()
    {
        if(this.body.speed<3)
        {
            var pos =this.body.position;
            var angle = this.body.angle;
            strokeWeight(3);
            stroke("brown");
            fill("pink");
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.img, 0, 0, this.width, this.height); 
            pop(); 
        }
        else
        {
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-50;
            tint(255,this.Visibility);
            image(this.img, this.body.position.x, this.body.position.y, 40, 40);
            pop();
        }
    }
}