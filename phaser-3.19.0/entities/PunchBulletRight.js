 class PunchBulletRight extends Phaser.GameObjects.Sprite {
 
 
             constructor(scene, x,y,health,speed) {


                super(scene, x, y);
           
                 
             //      console.log(health);
                 
              //   this.load.image("node","../assets/image/testParticle.png")
                    this.setTexture('punchBulletR1');
                 this.zIndex=10
                 this.y=scene.rightHitBoxBar.outerBound.y+(scene.rightHitBoxBar.hitBar1.height/2);
                 this.x=scene.rightHitBoxBar.outerBound.x//550
                 this.displayOriginX=0;
                 this.speed=speed;
                 this.health=health;this.active= true;
            //   this.left=false;
                 scene.pArrayRight.push(this);
                // this.id=scene.pArrayLeft.length;
                 
         scene.sys.updateList.add(this);
         scene.sys.displayList.add(this);
     //   scene.sys.arcadePhysics.world.enableBody(this, 0);
             }
     
     
     
     
             preUpdate(time, delta) {
    
             super.preUpdate(time, delta);
                 
                 if (this.health==1) this.setTexture('punchBulletR1');
                 if (this.health==2) this.setTexture('punchBulletR2');
                  if (this.health==3) this.setTexture('punchBulletR3');
                 //   console.log(this.health);
                 
        //  if(this.speed==0) { this.x-=((rightE.speed)*(delta))/18;}else
       //   if(this.speed==0) { this.x-=((5)*(delta))/18;}else
                if (scene.eSpawnMgt[roundNum][0][0] == "balloon1") {
                         
                         this.x=scene.rightHitBoxBar.outerBound.x-70;
                         
                     }else{
          {this.x-=((this.speed)*(game.loop.delta))/18.5}}
                 
               //  console.log(scene.pArrayLeft[0].left)
               //  if ( this.x+48<scene.halfPoint){this.destroy()
                 if ( this.x+48<scene.placeHolder.x){this.destroy()
                                             scene.pArrayRight.shift();
                                             }
                 
              //[0] index is always forefront 
                // this.x=scene.halfPoint
                 ///scene.rightHitBoxBar.penaltyBar.x
            
             }

     
     
     
     
 
 }