 class PunchBulletLeft extends Phaser.GameObjects.Sprite {
 
 
             constructor(scene, x, y,health,speed) {


                super(scene, x, y);
           
              
                 
              //   this.load.image("node","../assets/image/testParticle.png")
                    this.setTexture('punchBulletL1');
                 this.zIndex=10
                 this.y=scene.leftHitBoxBar.outerBound.y+(scene.leftHitBoxBar.hitBar1.height/2);
                 this.x=scene.leftHitBoxBar.outerBound.x;//
                 this.displayOriginX=48;
                 this.speed=speed;
                 this.health=health;
                 this.active= true;
            //   this.left=false;
                 scene.pArrayLeft.push(this);
                // this.id=scene.pArrayLeft.length;
                 
         scene.sys.updateList.add(this);
         scene.sys.displayList.add(this);
     //   scene.sys.arcadePhysics.world.enableBody(this, 0);
             }
     
     
     
     
             preUpdate(time, delta) {         
                super.preUpdate(time, delta);
                              
                 
                 if(scene.bossRound ==false){
                 if (this.health==1) this.setTexture('punchBulletL1');
                 if (this.health==2) this.setTexture('punchBulletL2');
                 if (this.health==3) this.setTexture('punchBulletL3');
                 }else{
                        
                     
                 this.setTexture('BossBulletL1');
                         
                       if(this.health==0)  this.setTexture('BossBulletL1Dead'); 
                 }

                 //console.log(this.health);
          //if(this.speed==0) { this.x+=((leftE.speed)*(delta))/18;}else
      //    if(this.speed==0) { this.x+=((5)*(delta))/18;}else
          
        //  {this.x+=  (((this.speed)*(delta))/18)+((player.body.velocity.x/5)/delta)  }
         
                     if (scene.eSpawnMgt[roundNum][0][0] == "balloon1") {
                         
                         this.x=scene.leftHitBoxBar.outerBound.x+70;
                         
                     }else{
                 
                 
                 
          {this.x+=((this.speed)*(game.loop.delta))/18.5}     }
               //  console.log(scene.pArrayLeft[0].left)
                // if ( this.x>scene.halfPoint){this.destroy()
                 
                 
                 
                 if ( this.x>scene.placeHolder.x){this.destroy()
                                             scene.pArrayLeft.shift();
                                             }
                 
              //[0] index is always forefront 
                // this.x=scene.halfPoint
            
                       //this.x>scene.leftHitBoxBar.penaltyBar.x+scene.leftHitBoxBar.penaltyBar.width
                 
                 
                 
             }

     
     
     
 
 }