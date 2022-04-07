 class BalloonGuy1 extends AbstractEnemy{
     
     
             constructor(scene, x, y) {


                super(scene, x, y);

                //console.log(scene)
                      this.id = 0;
                this.hit = false;
                this.halt = false;
                this.animHit = false;
             
                this.stunCount = 1;
                this.health = 25*this.stunCount;
                this.stunHit = false;
                
                this.attack=false;
                this.damage=0;
            
                this.toughness=3;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;

                this.stop=false;
              
                this.punchMax=1;
                this.rate=.5;
                this.speed=.1;
                
                this.offset=0;
                this.hitBoxStart=400;//-this.offset;
                this.hitBoxEnd=-50;//-this.offset; //Math.abs(scene.halfPoint-this.hitBoxStart) ;

                this.barData=[10,2,10,2,10];
            
                this.missed=false;
                this.penalty=false;
            
                this.punch=false;
            
                this.setTexture('thugA');
                 this.velocity= (this.x > scene.halfPoint ) ? -1400 : 1400; 
                 
                 this.flipX = (this.x > scene.halfPoint ) ? true : false;
       
                scene.sys.updateList.add(this);
                scene.sys.displayList.add(this);
            

                 
                scene.anims.create({
                key: 'balloonBounce',
                frameRate: 5,
                frames: scene.anims.generateFrameNames("balloon0", {
                    prefix: "baloons",
                    suffix: ".png",
                    frames: [1, 2, 3, 4]
                }),

                repeat: -1
            });

            scene.anims.create({
                key: 'balloonPop',
                frameRate: 35,
                frames: scene.anims.generateFrameNames("balloon0", {
                    prefix: "baloons",
                    suffix: ".png",
                    frames: [3]
                }),

                repeat: -1
            })
                 
                           this.animation={
                     walk:'balloonBounce',punch:'balloonBounce',stun:'balloonPop',hit:'balloonPop',winding:'balloonBounce'
                     
                 }
                 
                 
            }
     
     
     
    

        
    
   
            
    preUpdate(time, delta) {

this.hit = false;
            this.attack=false 
this.punch=false; 
          super.preUpdate(time, delta);
        
   
     
 }
 
 
 
 
 }