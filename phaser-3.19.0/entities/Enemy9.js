      




 class Enemy9 extends AbstractEnemy{

        constructor(scene, x, y) {


                super(scene, x, y);




                //console.log(scene)
                this.id = 0;
                this.hit = false;
                this.halt = false;
                this.animHit = false;
             
                this.stunCount = 12;
                this.health = 25*this.stunCount;
                this.stunHit = false;
                
                this.attack=false;
                this.damage=25;
            
                this.toughness=3;

                this.rand = 0;

                this.rand = Math.ceil(1 + Math.random() * 4);
                //this.scale = scale;

                this.stop=false;
              
                this.punchMax=3;
                this.rate=1200;
                this.speed=.7;;
                
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
                key: 'thugEwalk',
                frameRate: 5,
                frames: scene.anims.generateFrameNames("thugE", {
                    prefix: "thugE",
                    suffix: ".png",
                    frames: [1, 2, 3, 4]
                }),

                repeat: -1
            })



            scene.anims.create({
                key: 'thugEstun',
             ///   frameRate: 10,
                 duration: 1500,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugE", {
                    prefix: "thugE",
                    suffix: ".png",
                    frames: [5, 6, 5, 6,5,6]
                })
                
                ,repeat: -1

            })



            
             scene.anims.create({
                key: 'thugEWinding',
                
                   duration: 300,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugE", {
                    prefix: "thugE",
                    suffix: ".png",
                    frames: [7,8,9,10]
                })


            })

            scene.anims.create({
                key: 'thugEPunch',
                
                   duration: 600,
                 //frameRate: 10,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugE", {
                    prefix: "thugE",
                    suffix: ".png",
                    frames: [11,10]
                })


            })
            
            
            
            scene.anims.create({
                key: 'thugEhit',
                frameRate: 100,
                //   repeat:-1,
                frames: scene.anims.generateFrameNames("thugE", {
                    prefix: "thugE",
                    suffix: ".png",
                    frames: [12]
                })


            })
                
                     this.animation={
                     walk:'thugEwalk',punch:'thugEPunch',stun:'thugEstun',hit:'thugEhit',winding:'thugEWinding'}
                     
                
                //
//this.body.setSize(260, 238, 130, 0);
            }



            
            
            
            preUpdate(time, delta) {


          
                super.preUpdate(time, delta);
          var  scene = game.scene.scenes[0];
               // console.log(Phaser.Geom.hitLC__proto__);

                
                
       
if(this.body!=null)
    this.body.setSize(260, 238, 130, 0);



            }







        }
