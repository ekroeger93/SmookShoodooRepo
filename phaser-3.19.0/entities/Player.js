
        class Player extends Phaser.GameObjects.Sprite {

            constructor(scene, x, y) {


                super(scene, x, y);
         

                this.pend = {
                    left: false,
                    right: false
                };
               // this.scale = scale;
                // this.setTexture('guy');
                this.setTexture('player0');
                this.depth = 1;
                this.vital=100
                this.hit=false;
                this.hitCoolDown;
                this.attack=false;

                this.y = 600;
                
                this.fatigue=false
                
                this.burst=false
                this.dodge=false;
                this.penalty=false;
           
               
                this.heart;
                this.health=1;
                
                this.lastShiftX=0;
                this.shift=false;
                this.effectX=0;
                
                //scene.textures.addSpriteSheetFromAtlas("mistaIdle",{frameWidth:59,frameHeight:99,atlas:"player", frame:"mistaIdle"});

           // this.placeHolder= new PlaceHolder(400,478);
                
                scene.sys.updateList.add(this);
                scene.sys.displayList.add(this);
this.heart = { 1: scene.add.image(this.x-120, this.y+160, 'heart')
             };
                
                    this.intial={x:this.x,y:478};
                
//this.warning={left:scene.add.image(this.x-150, this.y+50, 'warning'),
//            right:scene.add.image(this.x+150, this.y+50, 'warning')
//            }
//                
//this.eGuard={left:scene.add.image(this.x-150, this.y+50, 'guard'),
//            right:scene.add.image(this.x+150, this.y+50, 'guard')
//            }
  //  this.heart =  scene.add.image(this.x+(50), this.y+70, 'heart');
             
                          scene.anims.create({
                key: 'mistaIdle',
                // frameRate:10,   
                duration: scene.attackSpeed,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [1]
                }),
                repeat: -1

            })

            scene.anims.create({
                key: 'mistaSlapF',
                //frameRate:20,
                duration: scene.attackSpeed,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [1, 2, 3, 4, 4]
                }),

            })

            scene.anims.create({
                key: 'mistaSlapB',
                //frameRate:20,
                duration: scene.attackSpeed,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [5, 6, 7, 8, 8]
                }),

            })

            scene.anims.create({
                key: 'mistaAttack',
                // frameRate:1.666,
                duration: scene.attackSpeed,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
                }),
                repeat: -1
            })

            scene.anims.create({
                key: 'mistaBlock',
                // frameRate:1.666,
                duration: scene.attackSpeed,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [11,10,11,10,11,10]
                }), repeat: -1
         
            })
    
            scene.anims.create({
                key: 'mistaTired',
                // frameRate:1.666,
                duration: scene.attackSpeed,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [12]
                }),
                repeat: -1
            })

            
            scene.anims.create({
                key: 'mistaBreakout',
                 frameRate:15,
               // duration: 300,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [13,14,15,15,15,1]
                })
            })
                
            
                scene.anims.create({
                    key:"mistaDodge",
                    
                                   frameRate:0,
               // duration: 300,
                frames: scene.anims.generateFrameNames("player0", {
                    prefix: "player",
                    suffix: ".png",
                    frames: [17,16,18]
                })
                    
                })
                
                

            }
            
            
            
            
        comboExpired(){ comboTimer.paused=true;
     
         }
        
        staminaPenalty(){player.fatigue=false
                          player.hit=true; player.hitCoolDown.paused=false;
            penStamTime.paused=true;
                 player.vital=45; 
          //      Phaser.Geom.Rectangle.Inflate(vBar.shape, 25,0); 
                            player.anims.play('mistaIdle', true);  
        }
      
         playerHitRec(){
            player.hit=false;
            player.hitCoolDown.paused=true;
            
        }
        
         resVital(){
        
            player.vital+=5;
        }
        

       playerAttack(flip) {
                         
                         
                         
                         
//                        if(//scene.hitType.LEFT.PENALTY+scene.hitType.RIGHT.PENALTY==0 &&
//                           player.dodge==false)
                        
                       {
          //   console.log("hit")
            if(player.fatigue==false){
           if(scene.bossRound===false) { strikeHit();}else{
               
              if(player.dodge==false)strikeHit(); 
           }
                
                
            if(player.anims.currentAnim.key!="mistaAttack")    
           player.anims.play('mistaAttack', true);
             if(scene.bossRound===false)  { player.flipX = flip;}else{
                 player.flipX =false;
             }
        

            }
                        }
//                         if(player.dodge)
//                             player.playerDodge();
                         
                         
                         
                         
        }
            
            
        playerDodge(){
            
             if(scene.bossRound===true){
            player.dodge=true;
            
            
                         player.body.setDragX(100)  ;
            
                  if(scene.hitType.LEFT.PENALTY ===false){
                      
 
            if(typeof scene.pArrayLeft[0] !== "undefined" //&& left.isDown
              ){
            if( scene.hitType.LEFT.CRIT===true || scene.hitType.LEFT.HIT===true){
            player.anims.play('mistaDodge',false,enemy.seqAttack);    player.body.setVelocityX(-140); 
                if(enemy.animAttack==2)player.y=478-70;
                
            }//else{this.penalty=true}
            
                
                
            if(scene.hitType.LEFT.MISS)  this.penalty=true;   
            }else if (typeof scene.pArrayLeft[0] == "undefined" && left.isDown) {this.penalty=true}
            
                  }
            
             }
       
            
            
        }
        
        activatehitFx(hitFX) {
            hitFX
                .setActive(true)
                .setVisible(true)

            //  console.log(player.anims.currentFrame.index<5);
            //  .setTint(Phaser.Display.Color.RandomRGB().color)
            //       if(player.anims.currentFrame.index<5){
            //           hitFx.depth=2;
            //           flare.play('flare1')}else{  flare.depth=0;flare.play('flare2');  }

            if (player.anims.currentFrame.index < 5) {
                hitFX.depth = 2;
                hitFX.flipY = false;
                hitFX.play('hitFx1');
            } else {
                hitFX.depth = 0;
                hitFX.flipY = true;
                hitFX.y -= 20;
                hitFX.play('hitFx1');
            }




            hitFX.flipX = player.flipX;
        }
            
        addSeq(callback) {

            if (scene.nxtSeq)
                callback();

        }
            
        addHearts(){
             
               scene = game.scene.scenes[0];

           
             
             for(var i=2;i<=5;i++){
              
               this.heart[""+i]=scene.add.image((this.x-170)+(50*i), this.y+160, 'heart');
                 
                
      
                 
             }
           //   this.heart=scene.add.image(this.x, this.y+70, 'heart');
             
             
         } 
            
        breakOut(eLeft,eRight){
                     this.vital=100;           
                        // vBar.shape.width=200;
                       //  vBar.shape.x=300; 
       
                   //  hitBoxL.body.enable = true;
                 //   hitBoxL.lifeTime = 1;
             
        //     hitBoxR.body.enable = true;
                 //   hitBoxR.lifeTime = 1;
             
                           if (scene.bossRound==false ){
                     this.burst=true;
             
             if(scene.pArrayLeft.length >0 && scene.leftId !==-1 && scene.leftId !==-Infinity &&  typeof leftE!=="undefined" && typeof leftE.anims!=="undefined" ){ //   eLeft.hit = true;
      leftE.hit=true;leftE.punch=false;
                 eLeft.health = 0; 
    eLeft.stunCount=0;    
//                  leftE.hitEnemyL(leftE);

                        scene.punchLRateT.paused=true; 
                        for(var i=0;i<  scene.pArrayLeft.length;i++){
                scene.pArrayLeft[i].destroy();}
                         scene.pArrayLeft.shift();
                leftE.body.setVelocityY((-400));
                 
                 
//                                  for(var i=0;i<  scene.pArrayLeft.length;i++){
//                scene.pArrayLeft[i].destroy();}
                      //   scene.pArrayLeft.shift();                      
                                             
            //eLeft.body.setVelocityY(-400);  
             }
             if(scene.pArrayRight.length >0 && scene.rightId !==-1 && scene.rightId !==-Infinity &&  typeof rightE!=="undefined" && typeof rightE.anims!=="undefined" ){   // eRight.hit = true;  
    rightE.hit=true;rightE.punch=false;
                 eRight.health = 0; 
    eRight.stunCount=0;
//   rightE.hitEnemyR(rightE);
               scene.punchRRateT.paused=true; 
                        for(var i=0;i<  scene.pArrayRight.length;i++){
                scene.pArrayRight[i].destroy();}
                         scene.pArrayRight.shift();
                rightE.body.setVelocityY((-400));
//                                             for(var i=0;i<  scene.pArrayRight.length;i++){
//                scene.pArrayRight[i].destroy();}
                      //   scene.pArrayRight.shift();            
                                              
           //    eRight.body.setVelocityY(-400);  
                 
         }            
   
                           }
         
         
         }       
        
        shiftFx(){
            
      //     this.effectX =1/(2*Math.PI)*Math.sqrt(x-10/.03);
            
        
        }
            
        getUpdatePosX(){
            
            return this.x; 
        }
            
            
            
        preUpdate(time, delta) {
             
            super.preUpdate(time, delta);
                this.body.collideWorldBounds = true;
                this.body.immovable = true;

     
            if (scene.eSpawnMgt[roundNum][0][0] == "balloon1") {this.vital=100;}else
            
{
                this.vital=Math.min(Math.max(parseInt(this.vital),0),100);}
                
                var barWidth=Math.min(Math.max(parseInt(vBar.x-((this.vital*4 ))/2), 0),400);
           
                vBar.shape.setTo( barWidth , vBar.y, this.vital*4, vBar.h)

                
          
                
          if(Object.keys(this.heart).length==1)
        this.addHearts();
                
                player=this;      
                var x;
                 for( x in this.heart){
                     
                       this.heart[x].alpha=(cam.zoom-.65)*4;
                 }
 

                
           var leftE=scene.eArray[scene.leftId];
           var rightE=scene.eArray[scene.rightId];


                if(!scene.bossRound){
                    
                  if(scene.rightId !==-1 &&  rightE != undefined && rightE.punch==true && this.burst==false){
                       
                      this.hit=true; 
                      this.hitCoolDown.paused=false;
                            
                       
                         if(this.anims.currentAnim.key!="mistaBlock")player.vital-=rightE.damage;   
                         
//               
                       if(this.anims.currentAnim.key!="mistaBlock" && (player.vital)<0){
                     if(Object.keys(this.heart).length!=this.health-1)
                                    {this.heart[this.health].setVisible(false);
                                 this.health++;}     this.breakOut(leftE,rightE);
                       }
                       
                       
                       
                           this.anims.play('mistaBlock', true);
            
                       
               
                   }
                
                   if(scene.leftId !==-1 &&  leftE != undefined && leftE.punch==true && this.burst==false){
                       
                       this.hit=true;
                       this.hitCoolDown.paused=false;
                       
                    
                       if(this.anims.currentAnim.key!="mistaBlock") player.vital-=leftE.damage;   
                         
//               
                       if(this.anims.currentAnim.key!="mistaBlock" && (player.vital)<0){
                     if(Object.keys(this.heart).length!=this.health-1)
                                    {    this.heart[this.health].setVisible(false);
                                 this.health++;}
//                         this.anims.play('mistaBreakout', true);  
                         
                   this.breakOut(leftE,rightE);
                       }
                       
                       
                       
                           this.anims.play('mistaBlock', true);
               
                       
               
                   }
                }else{
                    
                    
                    
                        if(scene.leftId !==-1 &&  leftE != undefined && leftE.punch==true &&  typeof scene.pArrayLeft[0] != "undefined" && scene.hitType.LEFT.PENALTY==true ){
                        
                       this.hit=true;
                       this.hitCoolDown.paused=false;
                       
                       if(this.anims.currentAnim.key!="mistaBlock") player.vital-=leftE.damage;   
//               
                       if(this.anims.currentAnim.key!="mistaBlock" && (player.vital)<0){
                     if(Object.keys(this.heart).length!=this.health-1)
                                    {    
                                        this.vital=100;
                                        this.heart[this.health].setVisible(false);
                                 this.health++;}
//           
                       }
                       
                       
                       
                     this.anims.play('mistaBlock', true);
               
                       
               
                   }
                    //if(scene.leftId !==-1 &&  leftE != undefined) console.log(""+leftE.punch);
                    
                    
                    
                }
                
                
                
                
                if(this.burst==true){this.anims.play('mistaBreakout', true);  game.scene.scenes[0].cameras.main.shake(50); }
                
                 if (this.anims.currentAnim.key=="mistaBreakout" && this.anims.getProgress()>.6){   
                 
                 this.burst=false;
                 }
                
                
                
                
            
      if(player.vital<100 && this.fatigue==false){resVitalTime.paused=false;}else
        {resVitalTime.paused=true;}  
         
  
                
         if(this.fatigue){ particles.emitParticleAt(this.x, this.y);   
                          penStamTime.paused=false;
                     player.anims.play('mistaTired', true);  
                         }
                
                
                
                 
                
              if( this.fatigue===false && this.burst===false){   
                  
                   if (scene.countDown.text==""){
             if(scene.bossRound===false){
                  
                  
                    right.on('down', function(key, event) {player.playerAttack(false); });       
                    left.on('down', function(key, event) {  player.playerAttack(true); });
                      player.dodge=false;
                  }else{
                      
           right.on('down', function(key, event){  player.playerAttack(); });
            left.on('down', function(key, event){  player.playerDodge(); });
           

                  }}
                  
        

                  
//                 this.dodge=(this.anims.currentAnim.key=="mistaDodge"
//                           //   &&  scene.pArrayLeft.length>0  
//                          //    && this.body.velocity.x==0
//                             && scene.bossRound==true 
//                            
//                            );
                //  this.dodge=(this.anims.currentAnim.key=="mistaDodge" &&  scene.pArrayLeft.length>0 && scene.bossRound==true  );
            
                  if(!this.dodge && !this.hit && this.anims.currentAnim.key!="mistaAttack" && this.body.velocity.x==0  )  player.anims.play('mistaIdle', true);
            
                  if(scene.pArrayLeft.length == 0 )this.penalty=false;
                 
              if (scene.countDown.text==""){       
   if(Phaser.Input.Keyboard.JustDown(left) 
   ){
     
      player.vital-=8; //  Phaser.Geom.Rectangle.Inflate(vBar.shape, -8,0); 
       
       
        if( scene.pArrayLeft.length >0 && 
           scene.leftId !==-1 && 
           scene.leftId !==-Infinity &&  
           typeof leftE!=="undefined" && 
           typeof leftE.anims!=="undefined" && 
           typeof leftE.body !== "undefined"  ){
            
            leftE.hitEnemyL(leftE);
          
              var rand=Math.floor(1+Math.random() * 4);
            switch(rand){
                    case 1: {    scene.slap1Sound.play();}break;
                    case 2: {    scene.slap2Sound.play();}break;
                    case 3: {    scene.slap3Sound.play();}break;
                    case 4: {    scene.slap4Sound.play();}break;
                    
                    
            }
    
        }
       
   }
                  
                  
                 // console.log(this.attack);
      
                this.attack=(this.anims.currentAnim.key=="mistaAttack" &&  !this.hit   && scene.hitType.LEFT.PENALTY==false //&& !this.dodge
                            
                            );
                  
                  if(typeof rightE!=="undefined" && scene.bossRound==true){
              
                      
                      if(scene.pArrayRight[0].health<=0){
                          this.body.setDragX(0)  
                          this.body.setVelocityX(200*(this.x+240 < rightE.x));   
                          
                          
                      }else{
                          
                           this.body.setDragX(200); 
                          
//                          if(this.x+240 > rightE.x)   { this.body.setVelocityX(0); this.x = rightE.x-240;
//                                                      }
                              
                            if( !this.dodge) { 
                                
                                
                                if(this.x+240 < rightE.x) {this.body.setVelocityX(200);}else{
                                    this.body.setVelocityX(0); this.x = rightE.x-240;
                                    
                                }
                           }else{
                              // this.body.setVelocityX(-200);
                             
                               if(this.body.velocity.x>=0)this.dodge=false;
                           }
                          
                            
                          
                          
                      }
                     // if(scene.pArrayRight[0].health>0)this.body.setDragX(100) ;
                  
                  }
                  
    
       if(Phaser.Input.Keyboard.JustDown(right)
         ){
     
    player.vital-=8;//   Phaser.Geom.Rectangle.Inflate(vBar.shape, -8,0); 
       
        if( scene.pArrayRight.length >0 &&
           scene.rightId !==-1 && 
           scene.rightId !==-Infinity && 
           typeof rightE!=="undefined" &&  
           typeof rightE.body !== "undefined" 
          ){
            rightE.hitEnemyR(rightE);
            
                   var rand=Math.floor(1+Math.random() * 4);
            switch(rand){
                    case 1: {    scene.slap1Sound.play();}break;
                    case 2: {    scene.slap2Sound.play();}break;
                    case 3: {    scene.slap3Sound.play();}break;
                    case 4: {    scene.slap4Sound.play();}break;
                    
                    
            }
            
        }
       
   }
    
              }
                

// if (Phaser.Input.Keyboard.JustDown(right)){ console.log("AA"); player.vital-=5;   Phaser.Geom.Rectangle.Inflate(vBar.shape, -5,0); }
// if (Phaser.Input.Keyboard.JustDown(left)){ player.vital-=5;  Phaser.Geom.Rectangle.Inflate(vBar.shape, -5,0); }



            if (right.isUp && left.isDown && player.flipX == false && player.pend.right == false) {
                player.pend.left = true
            }
            if (left.isUp && right.isDown && player.flipX == true && player.pend.left == false) {
                player.pend.right = true
            }


            if (player.pend.left == true && player.pend.right == false && 
                scene.bossRound==false &&
            ((player.anims.currentFrame.index)) % 5 == 1 && player.flipX == false) {

                player.flipX = true

            }

            if (player.pend.right == true && player.pend.left == false && ((player.anims.currentFrame.index)) % 5 == 1 && player.flipX == true) {

                player.flipX = false

            }
  }


            if (player.anims.currentFrame.index == 5 && player.pend.right == true && player.flipX == false) player.pend.right = false;
            if (player.anims.currentFrame.index == 5 && player.pend.left == true && player.flipX == true) player.pend.left = false;

            if (player.anims.currentFrame.index == 10 && player.pend.right == true && player.flipX == false) player.pend.right = false;
            if (player.anims.currentFrame.index == 10 && player.pend.left == true && player.flipX == true) player.pend.left = false;

                
                

            if (scene.comboC && scene.seqCount == scene.comboCount) {
                scene.comboCount += 1;
                scene.comboC= false;
            }





            if (player.anims.currentFrame.index != 1) {

                if (((player.anims.currentFrame.index) % 5) == 4) scene.nxtSeq = true;

                if ( // scene.seqCount<scene.comboCount && 
                    ((player.anims.currentFrame.index) + (scene.comboCount * 5)) % 5 === 0) {
                    player.addSeq(function() {

                        scene.seqCount += 1;
                        scene.nxtSeq = false




                    });
                }



                if (((player.anims.currentFrame.index)) % 5 == 0 && scene.comboCount < scene.seqCount) {
                    player.anims.play('mistaIdle', true);
                    scene.comboCount = 0;
                    scene.seqCount = 0;
              
                }


            }
                
                
                
                
                
                
                
                
                
                
            }


        }


class PlaceHolder extends Phaser.GameObjects.GameObject {
    
           constructor(scene, x, y) {

                super(scene,x, y);
 
       this.x=400;
       this.y=478;

               
               
            }
            
    
    
    
    
}

