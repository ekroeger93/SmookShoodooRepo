      




 class Boss extends Phaser.GameObjects.Sprite {

        constructor(scene, x, y) {


                super(scene, x, y);




                 this.id = 0;
                this.hit = false;
                this.halt = false;
                this.animHit = false;
             
                this.stunCount = 4;
                this.health =3;
                this.stunHit = false;
                
                this.attack=false;
                this.damage=100;
            
                this.toughness=20;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;
            
                this.seqAttack=0; 

                this.stop=false;
              
                this.punchMax=2;
               // this.rate=2200;
              //  this.rate=1200;
                this.rate=700;
                this.speed=3.6;
                
                this.offset=0;
                this.hitBoxStart=400;//-this.offset;
                this.hitBoxEnd=-50;//-this.offset; //Math.abs(scene.halfPoint-this.hitBoxStart) ;

                this.barData=[4,5,4,5,4];
            
                this.missed=false;
                this.penalty=false;
            
                this.punch=false;
            this.x= scene.halfPoint+250
            
                this.sideLeft=false;
                this.animAttack=0;
            
                this.idle=true;
            
               // this.setTexture('thugA');

                scene.sys.updateList.add(this);
                scene.sys.displayList.add(this);
                

                scene.PunchShieldRight(this.toughness);
           // scene.spawnPunchShieldRight(this.toughness);
            
                 scene.anims.create({
                key: 'thugBossIdle',
               duration: 6000,
                frames: scene.anims.generateFrameNames("boss", {
                    prefix: "boss",
                    suffix: ".png",
                    frames: [1,1,2]
                })

              
            })
                
            
                    scene.anims.create({
                key: 'thugBossPrepAttack1',
                frameRate: 0,
                frames: scene.anims.generateFrameNames("boss", {
                    prefix: "boss",
                    suffix: ".png",
                    frames: [2,4,6]
                }),

                repeat: -1
            })
//                           scene.anims.create({
//                key: 'thugBossPrepAttack1',
//                 duration: 1000,
//                frames: scene.anims.generateFrameNames("boss", {
//                    prefix: "boss",
//                    suffix: ".png",
//                    frames: [2,1,4,1,6,1]
//                }),
//  so when the boss is attack frame e.g. 2 there is a duration until it is 1 then reset to prepAnim
//                repeat: -1
//            })
                          scene.anims.create({
                key: 'thugBossAttack1',
                frameRate: 0,
                frames: scene.anims.generateFrameNames("boss", {
                    prefix: "boss",
                    suffix: ".png",
                    frames: [3,5,7]
                }),

                repeat: -1
            })
            
                 scene.anims.create({
                key: 'thugBossStun',
                frameRate: 0,
                frames: scene.anims.generateFrameNames("boss", {
                    prefix: "boss",
                    suffix: ".png",
                    frames: [8]
                }),

                repeat: -1
            })
            
                     scene.anims.create({
                key: 'thugBossHit',
                    duration: 1000,
                frames: scene.anims.generateFrameNames("boss", {
                    prefix: "boss",
                    suffix: ".png",
                    frames: [9,10,9,10,9,10]
                })
            })
            
            
                     scene.anims.create({
                key: 'thugBossDead',
                    frameRate: 0,
                frames: scene.anims.generateFrameNames("boss", {
                    prefix: "boss",
                    suffix: ".png",
                    frames: [11]
                }),  repeat: -1
            })

            }


    
//   
//              
            hitEnemyL(enemy) {
                 
                 
 if(scene.hitType.LEFT.MISS==false && scene.hitType.LEFT.PENALTY==false ){
     
       scene.pArrayLeft[0].health=0;
 }

       }
//     
//     
            hitEnemyR(enemy) {
                 
                                
                
 ///if( scene.hitType.LEFT.MISS==false ){
       scene.points+=(10*((scene.comboHit+1)/10));
         scene.pArrayRight[0].health-=1;
        particles.emitParticleAt(enemy.x, enemy.y);
          game.scene.scenes[0].cameras.main.shake(70);

     
 //}
  
//     
// if(scene.hitType.LEFT.MISS==false && scene.hitType.LEFT.PENALTY==false
//   ){       
//     
//     if(  scene.pArrayRight[0].health<=0){
//          //       scene.pArrayRight[0].destroy();
//           //     scene.pArrayRight.shift();
//             //   enemy.body.setVelocityY((-400));
                
//         
//         if(typeof scene.pArrayLeft[0] != "undefined"){
//                scene.pArrayLeft[0].destroy();
//                scene.pArrayLeft.shift();}
//         
//         
//         
//          scene.punchLRateT.paused=true
          
 //}
                 
if (scene.hitType.RIGHT.MISS==true){
     scene.comboHit=0;
     enemy.missed=true;//scene.comboHit

 }
                
                
                         if (enemy.health ==1 && scene.pArrayRight[0].health<-9 ) {
                    scene.punchLRateT.paused=true; 
                     
                             
//                             for(var i=0;i<  scene.pArrayLeft.length;i++){
//                scene.pArrayLeft[i].destroy();}
//                         scene.pArrayLeft.shift();
//                             
                             
                enemy.body.setVelocityY((-400));

            }   
                

        }
            
     
             activatehitFx(hitFX) {   
            hitFX
                .setActive(true)
                .setVisible(true)

                 hitFX.scale=2;
                 
if (this.anims.currentFrame.index == 1) {
           
                hitFX.play('bossFx1');
            } 

if (this.anims.currentFrame.index == 2) {
           
                hitFX.play('bossFx2');
            } 
                 
if (this.anims.currentFrame.index ==3) {
           
                hitFX.play('bossFx3');
            }         

                 
                 
        
        }
     
     
     
            preUpdate(time, delta) {

                         super.preUpdate(time, delta);
          var  scene = game.scene.scenes[0];
           
                

                
                
    this.body.setSize(286,370);
                
                

                
                
                scene.rightHitBoxBar.outerBound.offset= 10
                scene.rightHitBoxBar.hitBar1.offset=    10
                scene.rightHitBoxBar.criticalBar.offset=1.3
                scene.rightHitBoxBar.hitBar2.offset=    10
                scene.rightHitBoxBar.penaltyBar.offset= (10)
                
                var x;  x=(!player.penalty)*(3.9*((100-player.vital)/100));//5.9
          //      console.log(x)
                
                scene.leftHitBoxBar.outerBound.offset=  (2+player.penalty*4)+x;
                scene.leftHitBoxBar.hitBar1.offset=     12;
                scene.leftHitBoxBar.criticalBar.offset= 3.3+player.penalty*4;;
                scene.leftHitBoxBar.hitBar2.offset=     12;
                scene.leftHitBoxBar.penaltyBar.offset=  ((2+3)-player.penalty*4)-(x);
                
                super.preUpdate(time, delta);
                var  scene = game.scene.scenes[0];
            

                this.body.collideWorldBounds = true;

              //  var rand= Math.ceil(1+Math.random() * 3);
                
                if(this.seqAttack>2)this.seqAttack=0;
               // if(!this.animAttack) this.animAttack=this.seqAttack;//Math.ceil(Math.random() * 3);
   
                
             
                if (this.idle && scene.countDown.text=="") this.anims.play('thugBossIdle',true,0);
                if(this.anims.currentAnim!=null && this.anims.currentAnim.key=="thugBossIdle" && this.anims.currentFrame.index>1)this.idle=false;
                

                if(this.anims.currentAnim!=null)
              //  console.log(this.anims.currentFrame.index);
                
                //700
                    
                    if(game.loop.actualFps>30){
                     if(this.health==3) {this.rate=1200; this.punchMax=1}
                    if(this.health==2) {this.rate=350; scene.punchLRateT.args[1]=.1 ;this.punchMax=2;}
                    if(this.health==1) {this.rate=150;  scene.punchLRateT.args[1]=.1 ;this.punchMax=2; }
                    
                    }else
                        {
                    if(this.health==3) {this.rate=1200; this.punchMax=1}
                    if(this.health==2) {this.rate=350; scene.punchLRateT.args[1]=.1 ;this.punchMax=2;}
                    if(this.health==1) {this.rate=350;  scene.punchLRateT.args[1]=.1 ;this.punchMax=2; }
                            
                        }
                    
  scene.punchLRateT.delay=this.rate;

                    if(typeof scene.pArrayLeft[1]!="undefined")scene.pArrayLeft[1].speed=scene.pArrayLeft[0].speed/2.3;
                    
                    
            if  ( scene.hitType.LEFT.MISS==true && typeof scene.pArrayLeft[0] !== "undefined"){
                            scene.pArrayLeft[0].speed=3.6 ;  
                leftE.punch=false; 
                 }
            if  ( scene.hitType.LEFT.HIT==true && typeof scene.pArrayLeft[0] !== "undefined"||
                 scene.hitType.LEFT.CRIT==true && typeof scene.pArrayLeft[0] !== "undefined"
                ){
                            scene.pArrayLeft[0].speed=2.3
                     
                 }
             
                
            //    console.log(this.seqAttack);
            
        if  ( scene.hitType.LEFT.PENALTY==true && typeof scene.pArrayLeft[0] !== "undefined" && leftE!=-1 ){
                 this.anims.play('thugBossAttack1', false,this.seqAttack);   bossStrikeHit();        game.scene.scenes[0].cameras.main.shake(70);
       
            scene.comboHit=0;
                scene.pArrayLeft[0].speed=5
                leftE.punch= scene.pArrayLeft[0].health>0 ;      // this.sideLeft=.6//(rand%2);
            //  console.log(rand%2);     
                //console.log(scene.pArrayLeft[0].speed);
            }
//       if  ( scene.hitType.LEFT.PENALTY!=true && typeof scene.pArrayLeft[0] !== "undefined" ){
//                leftE.punch=false;                              
//          
//           
//           
//            }
            
            
  
                if(!this.idle){
                if(scene.hitType.LEFT.PENALTY==false || typeof scene.pArrayLeft[0] == "undefined"){
              
                    if( this.anims.currentAnim !== null && this.anims.currentAnim.key!="thugBossPrepAttack1" )this.seqAttack++;
                    
           
                    if (scene.pArrayRight[0].health>0) this.anims.play('thugBossPrepAttack1', false,this.seqAttack)
                
                
                }
         
                 if (scene.pArrayRight[0].health<=0 && scene.pArrayRight[0].health>-10){
                     
                   //  scene.pArrayRight[0].health=0;
                   if(player.attack==false)  this.anims.play('thugBossStun', false);
                   if(player.attack==true)  this.anims.play('thugBossHit', true);
                                          
                     
                if(typeof scene.pArrayLeft[0] != "undefined"){
                scene.pArrayLeft[0].destroy();
                scene.pArrayLeft.shift();}

                     
                     if(this.anims.currentAnim.key=="thugBossHit") { this.body.setVelocityX(0)  ;
                                                                   } else{this.body.setVelocityX(0)}
                     
                     
                     
                 }}
                
                
                if( scene.pArrayRight[0].health<=-10)
                    {this.health--; //console.log(this.health);
                     this.idle=true;
                        scene.pArrayRight[0].health=this.toughness;
                        
                    }
                

                
                
                
                if(this.health<=0 ){this.anims.play('thugBossDead', false);this.body.setVelocityX(0);this.angle += 10; player.body.velocity.x=0;};
                
                
if (typeof scene.pArrayLeft[0] == "undefined" && typeof scene.pArrayRight[0] == "undefined")this.animAttack=0;
            
                
//console.log(this.punchMax<scene.pArrayLeft.length);
  
                if (scene.countDown.text==""){
                    
                    
                  scene.punchLRateT.paused=( this.anims.currentAnim.key!="thugBossPrepAttack1" ||
                      this.punchMax<scene.pArrayLeft.length ||
                      scene.pArrayRight[0].health<=0 || 
                                            this.x > player.x+240 || 
                      this.health<1 || player.anims.currentAnim.key=="mistaBlock"
                                           || this.idle
                                           
                                           );}
                
                
                //console.log(scene.punchLRateT.paused);

           if (     this.y > 400 &&
                    this.health <= 0 
               && this.body.velocity.y > 0 
                ) {
                   
//                    if (this.x > player.x+50)     this.body.setVelocityX(400) 
//                    if (this.x < player.x+50)     this.body.setVelocityX(-400) 
          //   scene.rightId=-1;scene.leftId=-1;
              
           
               
               scene.eCount--;
                    this.destroy();
                }







        }}
