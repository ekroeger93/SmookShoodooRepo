 class AbstractEnemy extends Phaser.GameObjects.Sprite {
     
     
             constructor(scene, x, y) {


                super(scene, x, y);




                //console.log(scene)
                this.id = 0;
                this.hit = false;
                this.halt = false;
                this.animHit = false;
             
                this.stunCount = 4;
                this.health = 25*this.stunCount;
                this.stunHit = false;
                
                this.attack=false;
                this.damage=10;
            
                this.toughness=1;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;

                this.stop=false;
              
                this.punchMax=3;
                this.rate=600;
                this.speed=1.6;
                
                this.offset=0;
                this.hitBoxStart=400;//-this.offset;
                this.hitBoxEnd=-50;//-this.offset; //Math.abs(scene.halfPoint-this.hitBoxStart) ;

                this.barData=[5,3,10,5,3];
            
                this.missed=false;
                this.penalty=false;
            
                this.punch=false;
            
                this.setTexture('thugA');

                scene.sys.updateList.add(this);
                scene.sys.displayList.add(this);


                 
                this.animation={
                     walk:'',punch:'',stun:'',hit:'',winding:''
                     
                 }

                
            

            }
     
            hitEnemyL(enemy) {
                 
                 
 if(scene.hitType.LEFT.MISS==false && scene.hitType.LEFT.PENALTY==false ){
                 enemy.missed=false;comboTimer.paused=false;

     scene.pArrayLeft[0].health-=1;
  scene.points+=(10*((scene.comboHit+1)/10));
//              scene.pArrayLeft[0].destroy();
//     scene.pArrayLeft.shift();
    
     
            if(scene.hitType.LEFT.HIT && scene.pArrayLeft[0].health>0){
           
           scene.comboHit++;     particles.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(50);
           
       }
     
     
     
  if(scene.hitType.LEFT.HIT && scene.pArrayLeft[0].health<=0){
  //  scene.points+=(10*((scene.comboHit+1)/10));
      
                    scene.pArrayLeft[0].destroy();
     scene.pArrayLeft.shift();
            particles.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(50);
      
    // if (enemy.body.velocity.y == 0) { 
         scene.comboHit++; enemy.health -= 25; enemy.stunCount-=1;
     //}
      
      enemy.stunHit = true;
          enemy.hit = true;
      
  }

                 
  if(scene.hitType.LEFT.CRIT){  scene.points+=(50*((scene.comboHit+1)/10));
                    scene.pArrayLeft[0].destroy();
     scene.pArrayLeft.shift();
                  particles.emitParticleAt(enemy.x, enemy.y);critPart.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(70);
      
  //   if (enemy.body.velocity.y == 0) {
         scene.comboHit+=10; enemy.health -= 100; enemy.stunCount-=4;
    // }
      
      enemy.stunHit = true;
          enemy.hit = true;

  }
     
//       if(scene.hitType.LEFT.CRIT && scene.pArrayLeft[0].health<=0){
//                            scene.pArrayLeft[0].destroy();
//     scene.pArrayLeft.shift();
//                  particles.emitParticleAt(enemy.x, enemy.y);
//            game.scene.scenes[0].cameras.main.shake(70);
//      
//     if (enemy.body.velocity.y == 0) { scene.comboHit+=10; enemy.health -= 100; enemy.stunCount-=4;}
//      
//      enemy.stunHit = true;
//          enemy.hit = true;
//
//  }
     
     
                  if (enemy.stunCount <= 0 && enemy.health <=0  ) {
                      if(typeof scene.pArrayLeft[0]!=="undefined")scene.pArrayLeft[0].health=0;
                    scene.punchLRateT.paused=true; 
                        for(var i=0;i<  scene.pArrayLeft.length;i++){
                scene.pArrayLeft[i].destroy();}
                         scene.pArrayLeft.shift();
                enemy.body.setVelocityY((-400));
   // enemy.body.checkCollision.none=true
            } 
     
    
 }
                 
//if (scene.hitType.LEFT.MISS==true){
//     scene.comboHit=0;
//     enemy.missed=true;//scene.comboHit
//
// }

        }
     
            hitEnemyR(enemy) {
                 
                 
                      
                      
if(scene.hitType.RIGHT.MISS==false && scene.hitType.RIGHT.PENALTY==false ){
     
     
     
                 enemy.missed=false;comboTimer.paused=false;
       
      scene.pArrayRight[0].health-=1;  
    scene.points+=(10*((scene.comboHit+1)/10));
//              scene.pArrayRight[0].destroy();
//     scene.pArrayRight.shift();
                 
            
     if(scene.hitType.RIGHT.HIT && scene.pArrayRight[0].health>0){
           
           scene.comboHit++;     particles.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(50);
           
       }
     
     
     
  if(scene.hitType.RIGHT.HIT  && scene.pArrayRight[0].health<=0){
     // scene.points+=(10*((scene.comboHit+1)/10));
      
                    scene.pArrayRight[0].destroy();
     scene.pArrayRight.shift();
      
            particles.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(50);
      
     ///if (enemy.body.velocity.y == 0) {//bug incident
         
         scene.comboHit++; enemy.health -= 25; enemy.stunCount-=1;
     
     //}
      
      enemy.stunHit = true;
          enemy.hit = true;
      
  }
     
     
     
     
     
                 
  if(scene.hitType.RIGHT.CRIT){      scene.points+=(50*((scene.comboHit+1)/10));
        scene.pArrayRight[0].destroy();
     scene.pArrayRight.shift();
      
                  particles.emitParticleAt(enemy.x, enemy.y);critPart.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(70);
      
    // if (enemy.body.velocity.y == 0) {
         scene.comboHit+=10; enemy.health -= 100; enemy.stunCount-=4;
   //  }
      
      enemy.stunHit = true;
          enemy.hit = true;
      
     
      
  }
     
                  if (enemy.stunCount <= 0 && enemy.health <=0) {
                    scene.punchRRateT.paused=true; 
                        for(var i=0;i<  scene.pArrayRight.length;i++){
                scene.pArrayRight[i].destroy();}
                         scene.pArrayRight.shift();
                enemy.body.setVelocityY((-400));
               //     enemy.body.checkCollision.none=true

            } 
     
    
 }
                 
//if (scene.hitType.RIGHT.MISS==true){
//   //  scene.comboHit=0;
//   //  enemy.missed=true;//scene.comboHit
//
// }

        }
    
   
            
    preUpdate(time, delta) {


            

          super.preUpdate(time, delta);
        
          var  scene = game.scene.scenes[0];
         
            this.body.collideWorldBounds = true;
            this.body.setSize(233 - 150, 238, 150, 0);
                

            if (this.hit === true && this.stunCount > 0) {

                    this.anims.play(this.animation.stun, true);
                    this.body.velocity.x = 0

                   this.body.checkCollision.none =  (this.anims.currentFrame.index < 1 );
                    if (this.anims.getProgress()==1 && this.anims.currentAnim.key == this.animation.stun) this.hit = false;


                }





            

                if (this.body.velocity.y !== 0 && this.stunCount <= 0) {
                    this.hit = false
                    if (this.animHit == false) {

                    var rand=Math.floor(1+Math.random() * 5);
                        
                    this.anims.play(this.animation.hit, false, rand);
                    this.anims.stop();
                  
                        if (this.x < scene.halfPoint)  scene.haltLeft=false;
                        if( this.x > scene.halfPoint)  scene.haltRight=false;  
                    
                        this.animHit = true;
                    }


                    this.body.checkCollision.none = true



                    if (this.x > scene.halfPoint) //this.body.velocity.x*=-((hitBoxR.alpha+.1)*5);
                        this.body.setVelocityX(((//hitBoxR.alpha +
                                                 1) * 200));
                    if (this.x < scene.halfPoint) //this.body.velocity.x*=-((hitBoxL.alpha+.1)*5);
                        this.body.setVelocityX(-((//hitBoxL.alpha + 
                                                 1) * 200));

     
                    
               
                   
                }



                
       
            
           this.attack=(this.x+160 >= scene.halfPoint &&  this.x < scene.halfPoint && !this.hit
                        || this.x-160 <= scene.halfPoint && this.x > scene.halfPoint && !this.hit
                       );
               //bug attack causing delay detection on bar 
             
          // scene.rightId=-1;scene.leftId=-1;
        
      if(typeof leftE != "undefined" && typeof rightE != "undefined")
                if( this!==leftE &&  this!==rightE && this.body.velocity.x ==0 ) {  this.anims.stop();}
                                            
        
        
        
         if (this.attack==true && 
             this.body.velocity.y == 0 && this.stunCount > 0){ 
            
              scene.leftHitBoxBar.outerBound.offset=  leftE.barData[0];
                scene.leftHitBoxBar.hitBar1.offset=     leftE.barData[1];
                scene.leftHitBoxBar.criticalBar.offset= leftE.barData[2];
                scene.leftHitBoxBar.hitBar2.offset=     leftE.barData[3];
                scene.leftHitBoxBar.penaltyBar.offset=  leftE.barData[4];
             
             
             scene.rightHitBoxBar.outerBound.offset=  rightE.barData[0];
                scene.rightHitBoxBar.hitBar1.offset=     rightE.barData[1];
                scene.rightHitBoxBar.criticalBar.offset= rightE.barData[2];
                scene.rightHitBoxBar.hitBar2.offset=     rightE.barData[3];
                scene.rightHitBoxBar.penaltyBar.offset=  rightE.barData[4];
             
             
             
        
          
             
         ///////////////////////////////////////////////////////////    
        
             
             if  ( scene.hitType.LEFT.PENALTY==true && typeof scene.pArrayLeft[0] !== "undefined") {leftE.punch=true;    
                                                                   scene.pArrayLeft[0].speed=10;     
                                                                                                        scene.comboHit=0;
                                                                                                   }                                          

             
            if(leftE.missed==false && leftE.punch==false){
                var x;  x=7-(5.9*((100-player.vital)/100));
               leftE.barData=[40,2,10,5,x];
                }
                
             
             
             if (this.punchMax>scene.pArrayLeft.length){
                   scene.punchLRateT.delay=leftE.rate;
                    if ( leftE===this && leftE.health>0) scene.punchLRateT.paused=false;
                    scene.punchLRateT.args[0]=leftE.toughness
                    scene.punchLRateT.args[1]=leftE.speed;
             }
             else { scene.punchLRateT.paused=true;}
             
    
             
             
                
            ////////////////////////////////////////////////////////////////////////////////
                
            if( scene.hitType.RIGHT.PENALTY==true && typeof scene.pArrayRight[0] !== "undefined") {rightE.punch=true;
                                                                                      scene.pArrayRight[0].speed=10;                    scene.comboHit=0;
                                                                                                  }
            
             
                   if(rightE.missed==false && rightE.punch==false){
                          var x; x=7-(5.9*((100-player.vital)/100));
                         rightE.barData=[40,2,10,5,x];
                }
             
             
             if (this.punchMax>scene.pArrayRight.length){
                   scene.punchRRateT.delay=rightE.rate;
                 if ( rightE===this && rightE.health>0) scene.punchRRateT.paused=false;  //console.log("here");
                scene.punchRRateT.args[0]=rightE.toughness
                scene.punchRRateT.args[1]=rightE.speed
             }
             else{ scene.punchRRateT.paused=true;}
        
             
         ///////////////////////////////////////////
             
             
                       if(this.punch==false  && this.hit == false && this.animHit==false ) {this.anims.play(this.animation.winding, true)  ;}
            if(this.punch==true && this.hit == false){     this.anims.play(this.animation.punch, true) ; ;}  
            if (this.anims.getProgress()==1 && this.anims.currentAnim.key == this.animation.punch && scene.eSpawnMgt[roundNum][0][0] != "balloon1"){  
                
                var rand=Math.floor(1+Math.random() * 4);
            switch(rand){
                    case 1: {    scene.slap1Sound.play();}break;
                    case 2: {    scene.slap2Sound.play();}break;
                    case 3: {    scene.slap3Sound.play();}break;
                    case 4: {    scene.slap4Sound.play();}break;
                    
                    
            }
                                                                                           this.punch=false;}
             
                              

             
   
             
                         this.body.setVelocityX(0); 
             
               if (rightE.x <= scene.halfPoint+160 && rightE.body.velocity.y == 0  ) { scene.haltRight=true;}
               if( leftE.x >= scene.halfPoint-160 && leftE.body.velocity.y == 0  ) { scene.haltLeft=true;  }
                                                                     
                                                                   }
        
                /////////////////////////////////////////////////////////////////////////////////////
                


                if (this.x > scene.halfPoint)
                    this.angle = this.body.velocity.y == 0 ? 0 : (this.angle += 5);

                if (this.x < scene.halfPoint)
                    this.angle = this.body.velocity.y == 0 ? 0 : (this.angle -= 5);


                if (this.y == 481  && this.hit == false && this.attack==false ) {
                    this.animHit = false;

   this.body.checkCollision.none = false;


                    if (this.x < scene.halfPoint && this.hit == false && this.stop==false ) {
                        this.body.setVelocityX(400)// * deltaTime;

                        this.anims.play(this.animation.walk, true);

                    } else
                    if (this.x > scene.halfPoint && this.hit == false  && this.stop==false) {

                        this.body.setVelocityX(-400)// * deltaTime;

                        this.anims.play(this.animation.walk, true);
                        this.flipX = true;
                    }

                }


                if(this.x < scene.halfPoint && scene.haltLeft==true)this.body.velocity.x=0;
                if(this.x > scene.halfPoint && scene.haltRight==true)this.body.velocity.x=0;

                if (
                    this.y > 450 && //460
                    this.health <= 0 &&
                    this.body.velocity.y > 0 
                ) { 
                    
    
   
                    
                    
//                    if (this.x > scene.halfPoint)     this.body.setVelocityX(400) 
//                    if (this.x < scene.halfPoint)     this.body.setVelocityX(-400) 
             scene.rightId=-1;scene.leftId=-1;
                    scene.eCount--;
                    this.destroy();
                }



            }




     
     
     
 }