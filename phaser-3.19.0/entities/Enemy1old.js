      




 class Enemy1 extends Phaser.GameObjects.Sprite {

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

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                this.scale = scale;

              

                this.setTexture('thugA');

                scene.sys.updateList.add(this);
                scene.sys.displayList.add(this);


                //

            }

             
            


         hitEnemyL(hitBoxL, enemy, i) {

 
            
            particles.emitParticleAt(enemy.x, enemy.y);
            game.scene.scenes[0].cameras.main.shake(50);

   
               
            
                if (enemy.body.velocity.y == 0 && enemy.attack==true && enemy.anims.getProgress()< .79 ||   enemy.stunHit == true ){ comboHit++; enemy.health -= 25; enemy.stunCount-=1;}
            if (enemy.body.velocity.y == 0 && enemy.attack==true && enemy.anims.getProgress()>= .8 && enemy.stunHit == false ){comboHit+=10;  ;enemy.health -= 100; enemy.stunCount-=4;}
            
            //if (enemy.body.velocity.y == 0) enemy.health -= 25;

            if (enemy.stunCount <= 0 && enemy.health <=0) {
                enemy.body.setVelocityY((-400));

            }
            enemy.stunHit = true;
            enemy.hit = true;


        }
        
         hitEnemyR(hitBoxR, enemy, i) {
            
    
            
            game.scene.scenes[0].cameras.main.shake(50);
            particles.emitParticleAt(enemy.x, enemy.y);



            if (enemy.body.velocity.y == 0 && enemy.attack==true && enemy.anims.getProgress()< .79 ||   enemy.stunHit == true ){comboHit++; enemy.health -= 25; enemy.stunCount-=1;}
            if (enemy.body.velocity.y == 0 && enemy.attack==true && enemy.anims.getProgress()> .8 ){comboHit+=10;  ;enemy.health -= 100; enemy.stunCount-=4; }


            
            
            if (enemy.stunCount <= 0  && enemy.health <=0) {
                enemy.body.setVelocityY(-400);
            }


            enemy.stunHit = true;
            enemy.hit = true;


        }
            
  
            
            
            
            
            
            
            preUpdate(time, delta) {


            

                super.preUpdate(time, delta);
          
               // console.log(Phaser.Geom.hitLC__proto__);

                this.body.collideWorldBounds = true;

                //body width 233
                //body height 238

                this.body.setSize(233 - 150, 238, 150, 0);

                
                
                  this.halt= (this.x > halfPoint && haltRight) ;
                  this.halt= (this.x < halfPoint && haltLeft) ;

           
          //  console.log(this.attack==true && this.x > halfPoint);  
                

//                if (this.stunHit == true && this.stunCount !== 0) {
//                   //(this.health)/25;
//                    this.stunHit = false;
//                }


                if (this.hit === true && this.stunCount > 0) {
   //this.body.checkCollision.none = true
                    this.anims.play('thugAstun', true)
                    this.body.velocity.x = 0

              
//                    if (this.x > halfPoint) {
//                        this.x = hitBoxR.x + 200;
//                    }
//                    if (this.x < halfPoint) {
//                        this.x = hitBoxL.x - 200;
//                    }

                   this.body.checkCollision.none =  (this.anims.currentFrame.index < 2 )
                    if (this.anims.getProgress()==1 && this.anims.currentAnim.key == 'thugAstun') this.hit = false;


                }



//                if (this.hit == true && this.stunCount == 0) {
//                    this.hit = false
//                    this.attack = false;
//                    this.animHit == false
//                }




            

                if (this.body.velocity.y !== 0 && this.stunCount <= 0) {
  this.hit = false
                    if (this.animHit == false) {

                      var rand=Math.floor(1+Math.random() * 5);
                        this.anims.play('thugAhit', false, rand);

                        this.anims.stop();
                  
    if (this.x < halfPoint) haltLeft=false;
   if( this.x > halfPoint) haltRight=false;  
                    
                           
                   
                        

                        this.animHit = true;
                    }


                    this.body.checkCollision.none = true



                    if (this.x > halfPoint) //this.body.velocity.x*=-((hitBoxR.alpha+.1)*5);
                        this.body.setVelocityX(((//hitBoxR.alpha +
                                                 .5) * 200));
                    if (this.x < halfPoint) //this.body.velocity.x*=-((hitBoxL.alpha+.1)*5);
                        this.body.setVelocityX(-((//hitBoxL.alpha + 
                                                  .5) * 200));

                    
                    for( var i = 0; i < eArray.length; i++){ 
   if ( eArray[i].id === this.id) {
       
       eArray[i]=-1;
    // eArray.splice(i, 1); 
       
   }
}
                    
               
                   
                    // var rand=Math.floor(4+Math.random() * 3);

                    //this.setFrame("thug"+rand+".png");
                    //enemy.anims.currentFrame.index=0;


                    //this.animHit=true;
                }



                //if(this.x-140 < halfPoint && this.body.velocity.x<0 ){ this.attack=true; }
               
                
               // if(this.x+160 > halfPoint &&  this.body.velocity.x>0 ){   {  this.attack=true;}

            
           this.attack=(this.x+160 > halfPoint &&  this.x < halfPoint && !this.hit  || this.x-160 < halfPoint && this.x > halfPoint && !this.hit   );
               
            // if(this.x+160 > halfPoint &&  this.body.velocity.x>0 || this.x-140 < halfPoint && this.body.velocity.x<0) {this.attack=true}else{this.attack=false}
              
                                                                       
                if (this.attack==true && this.body.velocity.y == 0 && this.stunCount > 0){ this.body.setVelocityX(0);  this.anims.play('thugAPunch', true)  ; 
                                                                    
                
                                  
                                 
                                                                    
                                                                    
               if (this.x < halfPoint) {haltLeft=true;}
               if( this.x > halfPoint) {haltRight=true;  }
                                                               
                                                                   
                                                                   
                                                                   }



                if (this.x > halfPoint)
                    this.angle = this.body.velocity.y == 0 ? 0 : (this.angle += 5);

                if (this.x < halfPoint)
                    this.angle = this.body.velocity.y == 0 ? 0 : (this.angle -= 5);


                if (this.y == 481  && this.hit == false && this.attack==false ) {
                    this.animHit = false;

   this.body.checkCollision.none = false;


                    if (this.x < halfPoint && this.hit == false ) {
                        this.body.setVelocityX(400) * deltaTime;

                        this.anims.play('thugAwalk', true);

                    } else
                    if (this.x > halfPoint && this.hit == false) {

                        this.body.setVelocityX(-400) * deltaTime;

                        this.anims.play('thugAwalk', true);
                        this.flipX = true;
                    }

                }


                if(this.x < halfPoint && haltLeft==true)this.body.velocity.x=0;
                if(this.x > halfPoint && haltRight==true)this.body.velocity.x=0;

                if (
                    this.y > 470 &&
                    this.health <= 0 &&
                    this.body.velocity.y > 0
                    //   && this.animHit===false 
                    //   && this.anims.currentFrame.index==4

                    //   && this.anims.currentAnim.key==="thugAhit" 
                ) { 
             rightId=-1;leftId=-1;
                    eCount--;
                    this.destroy();
                }



            }







        }
