      




 class Enemy5 extends AbstractEnemy {

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
                this.damage=15;
            
                this.toughness=2;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;

                this.stop=false;
              
                this.punchMax=3;
                this.rate=900;
                this.speed=.7;
                
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


                


            scene.anims.create({
                key: 'thugAAwalk',
                frameRate: 5,
                frames: scene.anims.generateFrameNames("thugAA", {
                    prefix: "thug",
                    suffix: ".png",
                    frames: [0, 1, 2, 3]
                }),

                repeat: -1
            })



            scene.anims.create({
                key: 'thugAAstun',
             ///   frameRate: 10,
                 duration: 1500,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugAA", {
                    prefix: "thug",
                    suffix: ".png",
                    frames: [4, 5, 4, 5,4,5]
                })
                
                ,repeat: -1

            })



            
             scene.anims.create({
                key: 'thugAAWinding',
                
                   duration: 300,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugAA", {
                    prefix: "thug",
                    suffix: ".png",
                    frames: [12, 10, 11]
                })


            })

            scene.anims.create({
                key: 'thugAAPunch',
                
                   duration: 600,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugAA", {
                    prefix: "thug",
                    suffix: ".png",
                    frames: [13,12]
                })


            })
            
            
            
            scene.anims.create({
                key: 'thugAAhit',
                frameRate: 100,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugAA", {
                    prefix: "thug",
                    suffix: ".png",
                    frames: [6, 7, 8, 9]
                })


            })
                
                
                          this.animation={
                     walk:'thugAAwalk',punch:'thugAAPunch',stun:'thugAAstun',hit:'thugAAhit',winding:'thugAAWinding'}
                     
            

            }
        
       
            
            preUpdate(time, delta) {



                super.preUpdate(time, delta);
          var  scene = game.scene.scenes[0];
  


            }







        }
