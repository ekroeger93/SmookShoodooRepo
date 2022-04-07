 class PunchShieldRight extends Phaser.GameObjects.Sprite {
 
 
             constructor(scene, x,y,health) {


                super(scene, x, y);
           
                 
             //      console.log(health);
                 
              //   this.load.image("node","../assets/image/testParticle.png")
                    this.setTexture('bossSheild');
                 this.zIndex=10
                 this.y=scene.rightHitBoxBar.outerBound.y+(scene.rightHitBoxBar.hitBar1.height/2);
                 this.x=scene.rightHitBoxBar.outerBound.x+  scene.rightHitBoxBar.outerBound.width;//550
                 this.displayOriginX=0;
                 this.speed=0;
                 this.health=health;
            //   this.left=false;
                 scene.pArrayRight.push(this);
                // this.id=scene.pArrayLeft.length;
                 
         scene.sys.updateList.add(this);
         scene.sys.displayList.add(this);
     //   scene.sys.arcadePhysics.world.enableBody(this, 0);
             }
     
     
     
     
             preUpdate(time, delta) {
    
             super.preUpdate(time, delta);
                 
     
                 
        //  if(this.speed==0) { this.x-=((rightE.speed)*(delta))/18;}else
       //   if(this.speed==0) { this.x-=((5)*(delta))/18;}else
          
                 
                 if(this.health==0)     this.setTexture('bossSheild');
                 
                 this.x=scene.rightHitBoxBar.criticalBar.x+(scene.rightHitBoxBar.criticalBar.width/2)-30;
                 
        //  {this.x-=((this.speed)*(delta))/18}
                 
               //  console.log(scene.pArrayLeft[0].left)
               //  if ( this.x+48<scene.halfPoint){this.destroy()
//                 if ( this.x+48<scene.placeHolder.x){this.destroy()
//                                             scene.pArrayRight.shift();
//                                             }
                 
              //[0] index is always forefront 
                // this.x=scene.halfPoint
                 ///scene.rightHitBoxBar.penaltyBar.x
            
             }

     
     
     
     
 
 }