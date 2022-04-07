      




 class Enemy2 extends AbstractEnemy {

        constructor(scene, x, y) {


                super(scene, x, y);



      this.barData=[5,3,10,5,3];
                //console.log(scene)
                this.id = 0;
                this.hit = false;
                this.halt = false;
                this.animHit = false;
             
                this.stunCount = 6;
                this.health = 25*this.stunCount;
                this.stunHit = false;
                
                this.attack=false;
                this.damage=15;
            
                this.toughness=2;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;

                this.stop=false;
              
                this.punchMax=2;
                this.rate=750;
                this.speed=.7;;
                
                this.offset=0;
                this.hitBoxStart=400;//-this.offset;
                this.hitBoxEnd=-50;//-this.offset; //Math.abs(scene.halfPoint-this.hitBoxStart) ;

          
            
                this.missed=false;
                this.penalty=false;
            
                this.punch=false;
            
                this.setTexture('thugA');

                scene.sys.updateList.add(this);
                scene.sys.displayList.add(this);


                


            scene.anims.create({
                key: 'thugBwalk',
                frameRate: 5,
                frames: scene.anims.generateFrameNames("thugB", {
                    prefix: "thugB",
                    suffix: ".png",
                   frames: [1, 2, 3, 4]
                }),

                repeat: -1
            })



            scene.anims.create({
                key: 'thugBstun',
             ///   frameRate: 10,
                 duration: 1500,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugB", {
                    prefix: "thugB",
                    suffix: ".png",
                    frames: [5, 6, 5, 6,5,6]
                })
                
                ,repeat: -1

            })



            
             scene.anims.create({
                key: 'thugBWinding',
                
                   duration: 300,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugB", {
                    prefix: "thugB",
                    suffix: ".png",
                    frames: [7, 8, 9]
                })


            })

            scene.anims.create({
                key: 'thugBPunch',
                
                   duration: 600,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugB", {
                    prefix: "thugB",
                    suffix: ".png",
                    frames: [10,9]
                })


            })
            
            
            
            scene.anims.create({
                key: 'thugBhit',
                frameRate: 100,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugB", {
                    prefix: "thugB",
                    suffix: ".png",
                    frames: [11]
                })


            })
                
                          this.animation={
                     walk:'thugBwalk',punch:'thugBPunch',stun:'thugBstun',hit:'thugBhit',winding:'thugBWinding'
                     
                 }
                
                //

            }


        

            
            
            
            preUpdate(time, delta) {



                super.preUpdate(time, delta);




            }







        }
