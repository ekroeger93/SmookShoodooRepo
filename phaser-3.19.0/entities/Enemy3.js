      


 class Enemy3 extends AbstractEnemy {

        constructor(scene, x, y) {


                super(scene, x, y);




                //console.log(scene)
                this.id = 0;
                this.hit = false;
                this.halt = false;
                this.animHit = false;
             
                this.stunCount = 2;
                this.health = 25*this.stunCount;
                this.stunHit = false;
                
                this.attack=false;
                this.damage=15;
            
                this.toughness=1;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;

                this.stop=false;
              
                this.punchMax=1;
                this.rate=750;
                this.speed=1.3;;
                
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
                key: 'thugCwalk',
                frameRate: 5,
                frames: scene.anims.generateFrameNames("thugC", {
                    prefix: "thugC",
                    suffix: ".png",
                    frames: [1, 2, 3, 4]
                }),

                repeat: -1
            })



            scene.anims.create({
                key: 'thugCstun',
             ///   frameRate: 10,
                 duration: 1500,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugC", {
                    prefix: "thugC",
                    suffix: ".png",
                    frames: [5, 6, 5, 6,5,6]
                })
                
                ,repeat: -1

            })



            
             scene.anims.create({
                key: 'thugCWinding',
                
                   duration: 300,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugC", {
                    prefix: "thugC",
                    suffix: ".png",
                    frames: [7, 8, 9]
                })


            })

            scene.anims.create({
                key: 'thugCPunch',
                
                   duration: 600,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugC", {
                    prefix: "thugC",
                    suffix: ".png",
                    frames: [11,9,10]
                })


            })
            
            
            
            scene.anims.create({
                key: 'thugChit',
                frameRate: 100,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugC", {
                    prefix: "thugC",
                    suffix: ".png",
                    frames: [12]
                })


            })
                
                                 this.animation={
                     walk:'thugCwalk',punch:'thugCPunch',stun:'thugCstun',hit:'thugChit',winding:'thugCWinding'
                     
                 }
                
                //

            }


        
     

            
            
            
            
            preUpdate(time, delta) {



                super.preUpdate(time, delta);



            }







        }
