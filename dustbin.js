class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		//this.dustbinWidth=200;
		//this.dustbinHeight=213;
		
		var options = {
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
   
		   }



		this.image = loadImage("trashcangreen.png")
		
		//World.add(world, this.body)
	}
	display()
	{
			
		//var dustbinPos = this.body.position
			

			push()
		//	translate( dustbinPos.x,  dustbinPos.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,1000,550);
			pop()

			
	}

}