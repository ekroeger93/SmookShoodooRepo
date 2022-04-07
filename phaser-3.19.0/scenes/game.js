import { CST } from "CST";
export class game extends Phaser.Scene {

    constructor ()
    {
        super({ key: CST.SCENES.GAME, active: true });
    }

    
    init(){      
        
        var loader;   
        function handle_load(gltf) {

                mesh = gltf.scene;

                mesh.children[0].material = new THREE.MeshLambertMaterial();
                scene3d.add(mesh);


            }
         
                var player, enemy, game, halfPoint, eArray, amount;
        var cam;
        var timedEvent, coolDown, comboTimer,penStamTime, text;
        var keyCombo, leftPend, rightPend;
        var attackSpeed = 600; //270;
        var comboCount = 0, comboHit=0,comboNxt=1,
            comboC, seqCount = 0,
            nxtSeq = false;

        var particles, emitter;

        var eCount, roundNum,//eSpawnAmt = [10, 20, 30],
            rightList=[[0],[0]],leftList=[[0],[0]];
        


        var haltLeft =false; var haltRight =false;



        var scale = 1
        var rateC = 0;
        var camera;
        var scene3d;
        var mesh;
        var renderer;
        
        
        var scoreLabel=null;



        //eSpawnMgnt[roundNum][enemyType][spawnNum]

        var eSpawnMgt = [

            [ //round num 1
               
            ],
//        [ //round num 10
//                
//                ["enemy2", 10],
//                ["enemy3", 30]
//            
//            ],

            [ //round num 1
                
              //      ["enemy1", 35]
              ["enemy1", 21],
              ["enemy2", 16]
                
//            [ "enemy1", 16],
//            [ "enemy2", 16],
//            [ "enemy3", 10],
             //   ["enemy4", 4],
               // ["enemy2", 10]
            ],

            [ //round num 2
                ["enemy1", 25]
             
            ],

            [ //round num 3
                ["enemy1", 35]
            ],
            
            [ //round num 4
                ["enemy1", 12],
                ["enemy2", 10],
            
            ],
            
            [ //round num 5
             [ "enemy2", 16],
                [ "enemy3", 10],
            
            ],      
            
            [ //round num 6
                ["enemy1", 10],
                ["enemy2", 20]
            
            ],   
            
            [ //round num 7
                ["enemy1", 6],
                ["enemy2", 5],
                ["enemy3", 5]
            
            ],

             [ //round num 8
                ["enemy1", 15],
                ["enemy2", 10],
                ["enemy3", 10]
            
            ],
              
            [ //round num 9
                ["enemy1", 5],
                ["enemy2", 15],
                ["enemy3", 15]
            
            ],
                 [ //round num 10
                
                ["enemy2", 10],
                ["enemy3", 30]
            
            ],

        ];



        var A, B, C, D;
        A = 0;
        B = 0;
        C = 0;
        D = 0;
        var fps;
        fps = 30;

      //  game = new Phaser.Game(config);
        game = new Phaser.Game(config);
        halfPoint = config.width / 2;
        eArray = [];
        var deltaTime;
        deltaTime = (fps * game.loop.delta) / 1000;


        var wall, street;
        var zPos = 0.17;
        var trackStep = 0;
        var rate = 500; //532 700
        //2d camera
        var minC = 0.65 //0.148;.25 0.4 0.45
        var maxC = 1 //.503
        //3d camera z position max
        var sMax = -4.5 //-5.4;-5.7


        var minCZ = 2; //2
        var maxCZ = 5;
        // var rateCZ=4
        var rateCZ = 4.72
        // var Vrate=-6;
        var Vrate = -2;

        var hitLC,graphics,hitLLine,rotA=0;
        
        var leftId=-1; var rightId=-1;
         var configTxt

        
    }
    
    
         preload() {

            
            
            
            this.load.scenePlugin('Camera3DPlugin', 'plugins/camera3d.min.js', 'Camera3DPlugin', 'cameras3d');

            this.load.atlas('attackFlare', 'assets/images/player0/playerAttackFlare.png', 'assets/images/player0/playerAttackFlare.json');
            this.load.atlas('hitFx', 'assets/images/player0/hitFxA.png', 'assets/images/player0/hitFx.json');


            this.load.atlas('player0', 'assets/images/player0/playerA.png', 'assets/images/player0/playerA.json');

            this.load.atlas('thugA', 'assets/images/thugA/thugA.png', 'assets/images/thugA/thugA.json');
            this.load.atlas('thugB', 'assets/images/thugB/thugB.png', 'assets/images/thugB/thugB.json');
            this.load.atlas('thugC', 'assets/images/thugC/thugC.png', 'assets/images/thugC/thugC.json');
            this.load.atlas('thugD', 'assets/images/thugD/thugD.png', 'assets/images/thugD/thugD.json');
            
        //    this.load.image('platform', 'assets/images/platform.png');
            this.load.image('hitBox', 'assets/images/hitBox.png');
            
            this.load.image('A6Hit', 'assets/images/thugA/thug6.png');
            this.load.image('A7Hit', 'assets/images/thugA/thug7.png');
            this.load.image('A8Hit', 'assets/images/thugA/thug8.png');
            this.load.image('A9Hit', 'assets/images/thugA/thug9.png');
            
            this.load.image('heart','assets/images/player0/heart.png')
            this.load.image('warning','assets/images/player0/warning.png')
            this.load.image('guard','assets/images/player0/guard.png')
            
            
           // this.load.bitmapFont('myfont', 'assets/images/font/font.png', 'assets/images/font/font.fnt');
            this.load.image('myfont', 'assets/images/font/knight3-sheet.png');
               


            this.load.image('spark', 'assets/images/testParticle.png');
          //  this.load.image('wall', 'assets/images/wall.png')
        }
    
    
         create() {

     configTxt = {
        image: 'myfont', 
        chars: Phaser.GameObjects.RetroFont.TEXT_SET6,
//       width: 32,
//        height: 32,  
//         charsPerRow: 10,
       width: 31,
        height: 25,  
         charsPerRow: 10,

        spacing: { x: 0, y: 0 }
    };

            
            
            
         
            
            

            yUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
            yDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
            xUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
            xDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
            zUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
            zDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);


            y2Up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT);
            y2Down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO);
            x2Up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX);
            x2Down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR);
            z2Up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_SEVEN);
            z2Down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_NINE);

            //    


            

            camera = new THREE.PerspectiveCamera(28, config.width / config.height, .12, 1000);

            //    camera.position.z = -9;
            //   camera.position.x=-0.2;
            //camera.position.y=-0.15;
            //    




            //     camera.position.z = zPos;
            //   camera.position.x=-0.173;
            //camera.position.y=-0.1525;   


            /**/

            scene3d = new THREE.Scene();

            /*
 
  camera.position
n {x: 1.0300000000000007, 
y: -0.050000000000000086, z:
2.5099999999999905}
 
     scene3d.position.y -0.010000000000000004
     
 scene3d.rotation
Qb {_x: 0, _y: -1.5600000000000012, _z: -0.2800000000000001,
 
 
 */
            camera.position.x = 1
            camera.position.y = -0.04

            //camera.position.z=1.456
            //camera.position.z=2.506
            camera.position.z = 5.4



            // scene3d.position.y= -0.01 ;
            // scene3d.position.y= -0.06 ;
            scene3d.position.y = 0;
            scene3d.rotation.y = -1.56;
            scene3d.rotation.z = -0.27;
            //CAMERA
            // camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000 );


            let view = this.add.extern();

            //LIGHTS
            var light = new THREE.AmbientLight(0xffe0cb,1);
            light.position.set(5, 5, -1);light.intensity = 1.4;
            scene3d.add(light);



//            var light2 = new THREE.PointLight(0xffffff);
//            light2.position.set(5, 5, -1)
//            light2.intensity = 1.4;
//            scene3d.add(light2);

            /*

            when pasting 2d images on 3d model push the 2d out more
            in blender

            -this would be good for posting artwork for other artest
            per level
            */

             loader = new THREE.GLTFLoader();

            loader.load('a6low.glb', handle_load);

            var mesh;

 



            let renderer = new THREE.WebGLRenderer({
                canvas: this.sys.game.canvas,
                context: this.sys.game.context,
                antialias: true
            })
            renderer.setClearColor(0xFFFFFF);
            //    renderer.setPixelRatio(window.devicePixelRatio);
            //    renderer.setSize(window.innerWidth, window.innerHeight);

            renderer.autoClear = false;

            view.render = () => {

                renderer.state.reset();

               renderer.render(scene3d, camera);

            };

         var texture= this.load.image('texture','assets/images/player0/guard.png')
            
//let button = new touchButton(this, halfPoint, 300, texture);
// this.add.existing(button);        
//var  leftKevent = document.createEvent("HTMLEvents");
//var obj = document.getElementById('left_button');
//          
//        
//
//            
//    button.onPressed = ()=>{    	
//     leftKevent.initEvent( "keydown", true, true);
//	leftKevent.keyCode = 37;
//    document.dispatchEvent(leftKevent);
//
//        console.log("BUTTON IS BEING PRESSED");
//    };
//    button.onReleased= ()=>{
//        
//        	 leftKevent.initEvent( "keyup", true, true);
//        	leftKevent.keyCode = 37;
//    document.dispatchEvent(leftKevent);
//        
//        console.log("BUTTON WAS RELEASED");
//    };
            
            
            
//            info = this.add.text(10, 10, 'a', {
//                font: '48px Arial',
//                fill: '#ffffff'
//            });

            
            
 hitLC = new Phaser.Geom.Circle(250, 650, 40);
 hitLpoint = new Phaser.Geom.Rectangle(400, 300, 1, 1);    
 
 hitRC = new Phaser.Geom.Circle(550, 650, 40);
 hitRpoint = new Phaser.Geom.Rectangle(400, 300, 1, 1);                
            
vBar={shape:null,x:400,y:700,w:200,h:30}            
            
 vBar.shape= new Phaser.Geom.Rectangle(vBar.x-(vBar.w/2), vBar.y, vBar.w, vBar.h);    
            
            
     graphics = this.add.graphics({ fillStyle: { width: 10, color: 0x00ff00 } });
    graphics.fillCircleShape(hitLC);
    graphics.fillCircleShape(hitRC);
     graphics.fillRectShape(vBar);

    hitLC.diameter = hitLC.radius;
    hitRC.diameter = hitRC.radius;

    hitLC.radius = 30;
    hitRC.radius = 30;

            
  hitLLine = new Phaser.Geom.Line(400, 300,400, 300);
  Phaser.Geom.Line.CenterOn(hitLLine, hitLpoint.x, hitLpoint.y);
  hitLLines = [];
     
  hitRLine = new Phaser.Geom.Line(400, 300,400, 300);
  Phaser.Geom.Line.CenterOn(hitRLine, hitRpoint.x, hitRpoint.y);
  hitRLines = [];            
            
            //amount=30;
            roundNum = 0;
            // eCount=eSpawnAmt[roundNum];
       
           // eArray.length = eSpawnAmt[roundNum];






            var time = this.time;


//            this.tweens.timeScale = 2.5; // tweens
//            this.physics.world.timeScale = 2.5; // physics
//            this.time.timeScale = 2.5; // time events
//            this.anims.globalTimeScale = 2.5




            ///slow time upon impact of enemy?
            this.physics.world.setFPS(fps);

 

            boxLftT = this.time.addEvent({
                delay: 1,
                callback: boxLftST,
                callbackScope: this,
                loop: true,
                timeScale: 1,
            });
            boxRhtT = this.time.addEvent({
                delay: 1,
                callback: boxRhtST,
                callbackScope: this,
                loop: true,
                timeScale: 1,
            });

 


            coolDown = false;




            this.physics.world.setBoundsCollision(false, false, false, true);

            player = this.physics.add.existing(new Player(this, halfPoint, 500, ));
            player.body.collideWorldBounds = true;
            
            
                   penStamTime = this.time.addEvent({
                delay: 1400,
                callback: player.staminaPenalty,
                callbackScope: this,
                loop: true,
                timeScale: 1,
            });

            
            
            comboTimer= this.time.addEvent({
                delay: 400,
                callback: player.comboExpired,
                callbackScope: this,
                loop: true,
                  timeScale: 1, });
            comboTimer.paused=true;
            
            resVitalTime = this.time.addEvent({
                delay: 200,
                callback: player.resVital,
                callbackScope: this,
                loop: true,
                timeScale: 1,
            });
resVitalTime.paused=true;
            
            
            player.hitCoolDown= this.time.addEvent({
                delay: 400,
                callback: player.playerHitRec,
                callbackScope: this,
                loop: true,
                timeScale: 1,
            });
player.hitCoolDown.paused=true;
            
            
            text = this.add.text(player.x - 50, player.y - 140);
            text1 = this.add.text(player.x - 50, player.y - 200);







            hitBoxL = this.physics.add.image(player.x - 70, 440, 'hitBox').setImmovable(false);
            hitBoxL.body.allowGravity = false;
            hitBoxL.body.moves = false;

            hitBoxL.lifeTime = 10;

            hitBoxR = this.physics.add.image(player.x + 70, 440, 'hitBox').setImmovable(false);
            hitBoxR.body.allowGravity = false;
            hitBoxR.body.moves = false;

            hitBoxR.lifeTime = 10;

            text2 = this.add.text(hitBoxL.x, player.y - 140);
            text3 = this.add.text(hitBoxR.x, player.y - 200);
spawnEnemies() ;

            

{
           

            this.anims.create({
                key: 'flare1',
                // frameRate:1.666,
                duration: 300,
                frames: this.anims.generateFrameNames("attackFlare", {
                    prefix: "attackFxFlare",
                    suffix: ".png",
                    frames: [1, 2, 3, 4, 5, 6, 7]
                }),
                repeat: -1
            })


            this.anims.create({
                key: 'flare2',
                // frameRate:1.666,
                duration: 300,
                frames: this.anims.generateFrameNames("attackFlare", {
                    prefix: "attackFxFlare",
                    suffix: ".png",
                    frames: [8, 9, 10, 11, 12, 13, 14]
                }),
                repeat: -1
            })



            this.anims.create({
                key: 'hitFx1',
                // frameRate:1.666,
                duration: 300,
                frames: this.anims.generateFrameNames("hitFx", {
                    prefix: "hitFx",
                    suffix: ".png",
                    frames: [1, 2, 3, 4, 5]
                }),
                repeat: -1
            })


        }


            cursors = this.input.keyboard.createCursorKeys();
            left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);



            var up = Phaser.Input.Keyboard.KeyCodes.UP;

            this.cameras.main.setZoom(1);

            cam = this.cameras.main;


            
            player.anims.play('mistaIdle', true);



            keyCombo = this.input.keyboard.createCombo(
                [Phaser.Input.Keyboard.KeyCodes.RIGHT, Phaser.Input.Keyboard.KeyCodes.RIGHT], {

                    resetOnWrongKey: true, //6000/1.6666667<=( (1/1000)/600 )=3500
                    maxKeyDelay: attackSpeed, //2400//attackSpeed-3500,//1.7142857142857142857142857142857‬ 2500 250each
                    resetOnMatch: true,
                    deleteOnMatch: true,
                });

            keyComboL = this.input.keyboard.createCombo(
                [Phaser.Input.Keyboard.KeyCodes.LEFT, Phaser.Input.Keyboard.KeyCodes.LEFT], {

                    resetOnWrongKey: true, //6000/1.6666667<=( (1/1000)/600 )=3500
                    maxKeyDelay: attackSpeed, //2400//attackSpeed-3500,//1.7142857142857142857142857142857‬ 2500 250each
                    resetOnMatch: true,
                    deleteOnMatch: true,
                });

            keyComboRL = this.input.keyboard.createCombo(
                [Phaser.Input.Keyboard.KeyCodes.RIGHT, Phaser.Input.Keyboard.KeyCodes.LEFT], {

                    resetOnWrongKey: true, //6000/1.6666667<=( (1/1000)/600 )=3500
                    maxKeyDelay: attackSpeed, //2400//attackSpeed-3500,//1.7142857142857142857142857142857‬ 2500 250each
                    resetOnMatch: true,
                    deleteOnMatch: true,
                });

            keyComboLR = this.input.keyboard.createCombo(
                [Phaser.Input.Keyboard.KeyCodes.LEFT, Phaser.Input.Keyboard.KeyCodes.RIGHT], {

                    resetOnWrongKey: true, //6000/1.6666667<=( (1/1000)/600 )=3500
                    maxKeyDelay: attackSpeed, //2400//attackSpeed-3500,//1.7142857142857142857142857142857‬ 2500 250each
                    resetOnMatch: true,
                    deleteOnMatch: true,
                });


            this.input.keyboard.on('keycombomatch', function(keyCombo) {
                if (seqCount == comboCount || comboCount == 0) comboC = true;

            });


            this.input.keyboard.on('keycombomatch', function(keyComboL) {
                if (seqCount == comboCount || comboCount == 0) comboC = true;

            });


            this.input.keyboard.on('keycombomatch', function(keyComboLR) {
                if (seqCount == comboCount || comboCount == 0) comboC = true;

            });
            this.input.keyboard.on('keycombomatch', function(keyComboRL) {
                if (seqCount == comboCount || comboCount == 0) comboC = true;

            });






            hitFxroup = this.add.group({
                classType: Phaser.GameObjects.Sprite,
                defaultKey: 'hitFx',
                active: true,
                maxSize: 10,

            });


            particles = this.add.particles('spark');

            particles.createEmitter({
                //        x: player.x+100,
                //        y: player.y-159,
                // speed: { min: -800, max: 800 },
                speedX: {
                    min: -300,
                    max: 300,
                    steps: 12
                },
                speedY: {
                    min: -600,
                    max: 100
                },

                //angle: { min: 0, max: 360 },
                scale: {
                    start: 1,
                    end: 0
                },

                quantity: 4,

                blendMode: 'SCREEN',
                active: true,
                lifespan: 500,
                gravityY: 500,
                on: false
            });



 this.cache.bitmapFont.add('myfont', Phaser.GameObjects.RetroFont.Parse(this, configTxt));
              //  scoreLabel = this.add.bitmapText(halfPoint, player.y, 'myfont', '120',200); 
    //   scoreLabel =   new BitmapText(this, halfPoint, player.y,  [, text] [, size] [, align])
            scoreLabel =   this.add.dynamicBitmapText(halfPoint-60, 200, 'myfont', 'Game Title');
             
            enemyCount =   this.add.dynamicBitmapText(halfPoint-260, 200, 'myfont', 'Game Title');
                    
            roundNumStat= this.add.dynamicBitmapText(halfPoint-350, 200, 'myfont', 'Game Title');
            
  //  this.cache.bitmapFont.add('knighthawks', Phaser.GameObjects.RetroFont.Parse(this, config));

 //   dynamic = this.add.bitmapText(0, 200, 'knighthawks', 'PHASER 3');

    scoreLabel.setScale(3);
            
            
        }

        
         boxLftST() {

            hitBoxL.lifeTime -= 1;

            //  hitBoxL.alpha=0;
            // hitBoxL.body.enable=false; 

        }
         boxRhtST() { //console.log(boxRhtT.elasped);


            hitBoxR.lifeTime -= 1;

        }

         getClosestLeft() {


//            var list = [];
//            list.length = eArray.length;
//            var index;
//
//
//
//
//                for (j = 0; j < eArray.length; j++) {
//
//
//                    if (eArray[j].x < halfPoint && eArray[j].x !== null) {
//                        list[j] = eArray[j].id;
//                    } else {
//                        list[j] = -1;
//                    }
//
//
//
////                 if ( eArray[j] === -1) {
////     eArray.splice(j, 1); 
////   }
//
//
//
//
//
//            }
//            
//    
//            
//         //   console.log(list);
//
//            index = Math.max(...list)
//
//            return index;
//
      //   var list = [[],[]];
        leftList =new Array(eArray.length).fill(null).map(()=>new Array(1).fill(null)); // eArray.length;
            var index;

            
      
                

                for (j = 0; j < eArray.length; j++) {


                    if (eArray[j].x < halfPoint && eArray[j].x !== null) {
                        leftList[j][0] = eArray[j].x;
                        leftList[j][1] = eArray[j].id
                    } else {
                        leftList[j][1] = -1;                
                        

                    }



                    
                }

            
          
            for(j = 0; j < leftList.length; j++){
                
                                        if ( leftList[j][1] === -1) {
     leftList.splice(j, 1); 
   }
            }
            
                

            
leftList.sort(function(b,a) {
    return a[0]-b[0]
})
            

if(leftList[0][1] !==-1){
index=leftList[0][1];}else{
    leftList.splice(0, 1);
}



            return index;






        }

         getClosestRight() {


         //   var list = [[],[]];
        rightList =new Array(eArray.length).fill(null).map(()=>new Array(1).fill(null)); // eArray.length;
            var index;

            
      
                

                for (j = 0; j < eArray.length; j++) {


                    if (eArray[j].x > halfPoint && eArray[j].x !== null) {
                        rightList[j][0] = eArray[j].x;
                        rightList[j][1] = eArray[j].id
                    } else {
                        rightList[j][1] = -1;                
                        

                    }



                    
                }

            
          
            for(j = 0; j < rightList.length; j++){
                
                                        if ( rightList[j][1] === -1) {
     rightList.splice(j, 1); 
   }
            }
            
                

            
rightList.sort(function(b,a) {
    return a[0]-b[0]
}).reverse();;
            

if(rightList[0][1] !==-1){
index=rightList[0][1];}else{
    rightList.splice(0, 1);
}



            return index;


        }      

         stopEnemies() {

            // console.log(eArray[0].body.velocity.x)

            for (i = 0; i < eArray.length; i++) {



                eArray[i].body.velocity.x = 0;
                eArray[i].body.setVelocityX(0);
                eArray[i].body.move = false;
                eArray[i].halt = true;



            }



        }

         resumeEnemies() {


        }

         spawnEnemies() {


            roundNum += 1;
            eArray = [];
            scene = game.scene.scenes[0];

var rand= Math.ceil(1+Math.random() * 3);
/*
        for (var i = 0; i < n; ++i) {
            var b = this.game.add.sprite(game.rnd.between(margin, game.world.width-margin), this.game.rnd.between(margin, game.world.height-margin) ,'boxes', this.game.rnd.integer(0,3), this.g)
            this.arr.push(b)
            b.anchor.setTo(0.5, 0.5)
            b.scale.setTo(0.4, 0.4)

            this.game.physics.enable(b, Phaser.Physics.ARCADE);
            b.body.bounce = new Phaser.Point(1,1)
            b.body.collideWorldBounds = true
            var angle = this.game.rnd.angle()
            b.body.velocity.setTo(Math.cos(angle) * v, Math.sin(angle) * v)

            this.arr.push(b)
        }

*/
            function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}
            
                 rangeSpwn = 3000;//4000
            
            
                        for (i = 0, sum = 0; i < eSpawnMgt[roundNum].length; i++) {


                for (j = 0; j < eSpawnMgt[roundNum][i][1]-2; j++) {

                    sum++;
                    despersion = ((100* 1 ) * j) * ((j % 2) + ((j % -2) - 1));//sort one side or other on odd or even j index
                   
                    if((j % 2) ==1){
                    seedEquat = value_limit((halfPoint + (rangeSpwn) + despersion) + ((  ((rangeSpwn * 2 )) * (j % 2 * -1))),-4500,halfPoint-500);}else
                    { seedEquat = value_limit((halfPoint + (rangeSpwn) + despersion) + ((  ((rangeSpwn * 2 )) * (j % 2 * -1))),halfPoint+500,4500);   }
                  
                    
                    
                    ///seedEquat = (halfPoint + (rangeSpwn) + despersion) + (((j % 2 * -1)));
//(halfPoint + rangeSpwn + despersion) + ((((rangeSpwn * 2)) * (j % 2 * -1)))


                    if (eSpawnMgt[roundNum][i][0] == "enemy1") {
                        enemy = scene.physics.add.existing(new Enemy1(scene,  seedEquat , 500));

                    }
                    if (eSpawnMgt[roundNum][i][0] == "enemy2")
                        enemy = scene.physics.add.existing(new Enemy2(scene,  seedEquat , 500));


                    if (eSpawnMgt[roundNum][i][0] == "enemy3")
                        enemy = scene.physics.add.existing(new Enemy3(  scene,  seedEquat , 500 ));

                    
                    if (eSpawnMgt[roundNum][i][0] == "enemy4")
                        enemy = scene.physics.add.existing(new Enemy4(  scene,  seedEquat , 500 ));
                    
                    eArray[sum - 1] = enemy;
                   enemy.id=sum-1;
                    // eArray[sum - 1].id = sum;//j*(i+1);


                    scene.physics.add.overlap(hitBoxL, enemy, enemy.hitEnemyL, null, scene)
                    scene.physics.add.overlap(hitBoxR, enemy, enemy.hitEnemyR, null, scene)
                
                   // game.config.physics.arcade
                    
              //      game.physics.enable(enemy, Phaser.Physics.ARCADE);
                //    game.physics.arcade.collide(enemy,enemy);
                    scene.physics.add.overlap(enemy, eArray[sum - 3], pushE, null, scene)
                    scene.physics.add.overlap(enemy, eArray[sum - 2], pushE, null, scene)
                    scene.physics.add.overlap(enemy, enemy, pushE, null, scene)
                    
                    for(k=0;k<eArray.length;k++){    scene.physics.add.overlap(enemy, eArray[k] , pushE, null, scene) }
                    
                    
//overlap(object1 [, object2] [, collideCallback] [, processCallback] [, callbackContext])

                }
                eCount = eArray.length;

            }
            


        }
        
        
 leftOfBody(b) {
    return b.x - b.halfWidth
}
        
 rightOfBody(b) {
    return b.x + b.halfWidth
}
        
 sortedCollide(game, arr) {
    arr.sort(function(a,b) { 
        return leftOfBody(a.body) - leftOfBody(b.body);
    })
    for (var i = 0; i < arr.length; ++i){
        var elem_i = arr[i]

        for (var j = i + 1; j < arr.length; ++j) {
            var elem_j = arr[j]
            if (rightOfBody(elem_i.body) < leftOfBody(elem_j.body)) { 
                break; 
            }
            game.physics.arcade.collide(elem_i, elem_j)
        }
    }
}
        
 pushE(enemy){

          if (enemy.x < halfPoint && enemy.hit==false) enemy.x-=20;
           if (enemy.x > halfPoint && enemy.hit==false) enemy.x+=20;
            
            
        //   enemy.halt= (enemy.x < halfPoint && enemy.hit==false || enemy.x > halfPoint && enemy.hit==false);
          
            
        }
        
 strikeHit() {
            hitFX = hitFxroup.get(player.x, player.y - 25);

            //flare.play('flare1');

            if (!hitFX) return; // None 

            player.activatehitFx(hitFX);

        } 
        
 update(time, delta) {
               scoreLabel.text=''+comboHit.toString();
               enemyCount.text=''+eCount.toString();
               roundNumStat.text=''+roundNum.toString();
        
         
            //console.log(game)
            
//sortedCollide(game,eArray)
            
         
    
         //   console.log(player.vital)
        //    A = getClosestRight();
        //    B = getClosestLeft();

//leftId=getClosestLeft();
    
       if(rightList[0][1] ==-1){    rightList.splice(0, 1); rightId=getClosestRight();; }else{rightId=getClosestRight();}
       if(leftList[0][1] ==-1){    leftList.splice(0, 1); leftId=getClosestLeft(); }else{leftId=getClosestLeft()}
    
    
            leftE=eArray[leftId];
            rightE=eArray[rightId];
            
            //console.log(" attack:"+rightE.attack+"  block:"+rightE.block+" stun:"+rightE.stunHit)
            
         // console.log(player.vital)
        
   draw();


//2D AND 3D CAMERA ACTION
{
            if(rightId!=-1 && leftId!=-1){
                
                  C = Math.abs(rate / rightE.x);
                
            if( rightE.x<leftE)    
            C = Math.abs(rate / rightE.x);
            }else{
                
            //     C = Math.abs(rate / leftE.x);
            }
            // if(B>A)
            //    C=Math.abs( rate/B )
            //    
    
    
            C = Math.min(Math.max(parseFloat(C), minC), maxC)

            cam.zoomTo(C, 10, true);


            camera.position.z = Math.min(Math.max(parseFloat(
                (Math.abs(sMax + ((C - minC) * rateCZ)) //8.3
                )
            ), minCZ), maxCZ)



            camera.position.y = 0.04 + ((C - minC) / (Vrate)) //-0.
            scene3d.position.y = ((C - minC) / (Vrate / 2));
            scene3d.rotation.z = -0.27 - ((C - minC) / Vrate);
            scene3d.position.z = (C - minC) / Vrate;






            //     if (yUp.isDown)rate+=0.001; 
            //    if (yDown.isDown)rate-=0.001
            //    
            //    if (xUp.isDown)minC+=0.001
            //    if (xDown.isDown)minC-=0.001
            //     
            //    if (zUp.isDown)minCZ+=0.01
            //    if (zDown.isDown)minCZ-=0.01
            //    
            //    
            //    if (y2Up.isDown){rateCZ+=0.01;}
            //    if (y2Down.isDown)rateCZ-=0.01
            //    
            //    if (x2Up.isDown)Vrate+=0.01
            //    if (x2Down.isDown)Vrate-=0.01
            //     
            //   if (z2Up.isDown)maxCZ+=0.01;
            //  if (z2Down.isDown)maxCZ-=0.01;
            //    
            //    


            //  console.log("minC: "+minC+" maxC: "+maxC+" sMax: "+sMax+" minCz: "+minCZ+" maxCz"+maxCZ+" rateCz: "+rateCZ+" Vrate: "+Vrate)

            cam.startFollow(player);
             }

//END
            
        
            
            text1.setText('' + comboHit.toString().substr(0, 4));

             hitFxroup.children.iterate(function(hitFX) {


                if (hitFX.anims.currentAnim.key === "hitFx1" && hitFX.anims.currentFrame.index == 5 || hitFX.flipX != player.flipX) {
                    hitFxroup.killAndHide(hitFX); //flare.destroy();
                }

            });
            
            
            if (eCount == 0){ rightE = -1;
leftE = -1;
                spawnEnemies();
                            }




            hitBoxL.alpha = (1+hitBoxL.lifeTime);
            if (hitBoxL.lifeTime <= 0) {
                hitBoxL.lifeTime = 0;
                hitBoxL.body.enable = false
            }

            hitBoxR.alpha = (1+hitBoxR.lifeTime) ;
            if (hitBoxR.lifeTime <= 0) {
                hitBoxR.lifeTime = 0;
                hitBoxR.body.enable = false
            }

            
      


        }
        
        
         draw(){
            //Draw Events Here            
{
    
    



    
//    var string=comboHit.toString();
//    scoreLabel.setText('a'+string);
     scoreLabel.text='a'+comboHit.toString();
     
       pop =(   Math.abs(-1+Math.abs(-1+(5+(comboTimer.getProgress()*1.5))))+1  );
      scoreLabel.scale=pop;
     
 graphics.clear();


hitLLines.push(Phaser.Geom.Line.Clone(hitLLine));   
hitRLines.push(Phaser.Geom.Line.Clone(hitRLine));   
    

hitLC.getPoint(0 , hitLpoint);
hitRC.getPoint(0 , hitRpoint);
    

hitLLine.y1=hitLpoint.y
hitLLine.x1=hitLpoint.x
hitLLine.y2=hitLC.y
hitLLine.x2=hitLC.x

hitRLine.y1=hitRpoint.y
hitRLine.x1=hitRpoint.x
hitRLine.y2=hitRC.y
hitRLine.x2=hitRC.x            

            
    graphics.lineStyle(3, 0x000000);    
    graphics.strokeLineShape(hitLLine);
    graphics.strokeLineShape(hitRLine);
                
            
            
    graphics.fillStyle(0xFFFFFF, 1.0);    
    graphics.fillCircleShape(hitLC);
    graphics.fillCircleShape(hitRC);
            
    graphics.fillStyle(0x5eff5e, 1.0);    
     
 /*
 M_p1 = orgin point/different entity
 {x= M_p1.x+cos(((M_p1.image_angle/-1500)*pi)*M_p1.x/2)*10
 y= M_p1.y+sin(((M_p1.image_angle/-1500)*pi)*M_p1.x/2)*10 }
 
 {x= obj.x+cos(((20/28800)*pi)*obj.x/2)*100
 y= obj.y+sin(((20/28800)*pi)*obj.x/2)*100}
 
 */
            
 //  vBar.w-=(player.vital)
   graphics.fillRectShape(vBar.shape);
    
//graphics.alpha=(cam.zoom-.65)*4;
    
            var timeAdj,hexAdj;
            var timeAdj2,hexAdj2;
        
            
              if( leftId !==-1 && leftId !==-Infinity &&  typeof leftE!=="undefined" && typeof leftE.anims!=="undefined"  && leftE.attack==true ){
var foo=Math.ceil(leftE.anims.getProgress()*100)
    
switch (foo){
 
case   (0) : {hexAdj='5eff5e'}break;          
case   (12) : {hexAdj='aaffaa'}break;  
case   (23) : {hexAdj='e5ff63'}break;  
case   (34) : {hexAdj='ffff55'}break;  
case   (45) : {hexAdj='ffe047'}break;  
case   (56) : {hexAdj='ffbd39'}break;  
case   (67) : {hexAdj='ff952b'}break;  
case   (78) : {hexAdj='ff0000'}break;  
case   (89) : {hexAdj='ff0000'}break;  
                          
                  }
    graphics.fillStyle('0x'+hexAdj, 1.0);    
    graphics.fillCircleShape(hitLC);    
                        if ( game.loop.actualFps>=50)
    timeAdj=  ( 14)/leftE.anims.msPerFrame ;
                 if ( game.loop.actualFps<50 )   
              timeAdj=  ( 18)/leftE.anims.msPerFrame ;       
                          
                  
              }
            
   
            
     for(var i = 0; i < hitLLines.length; i++) {
      
        if( leftId !==-1 && leftId !==-Infinity &&  typeof leftE!=="undefined" &&  typeof leftE.anims!=='undefined'  && leftE.attack==true ){
        Phaser.Geom.Line.RotateAroundPoint(hitLLines[i],hitLC,timeAdj);
   
// hitLLines.y1=hitLC.y
//hitLLines.x1=hitLC.x
 // {x= obj.x+cos(((20/28800)*pi)*obj.x/2)*100
 //y= obj.y+sin(((20/28800)*pi)*obj.x/2)*100}
        //    D=1;
//            
//     hitLLines[i].x1= (hitLC.x+Math.sin((D* leftE.anims.getProgress())*Math.PI)*hitLC.x/2)*D
//     hitLLines[i].y1= (hitLC.y+Math.cos((D* leftE.anims.getProgress())*Math.PI)*hitLC.y/2)*D
//            
//            
        graphics.strokeLineShape(hitLLines[i]);
        
  if( leftId !==-1 ){
        if( leftE.anims.isPlaying &&
           leftE.anims.getProgress()==1 || 
           leftE.hit==true ||
          leftE.anims.getProgress()==0)  { hitLLines=[];}
 
  }
        }
  
    
    
    }
            

  
  
                     if( rightId !==-1 && rightId !==-Infinity && typeof rightE!=='undefined' && typeof rightE.anims!=='undefined'   && rightE.attack==true){
var foo=Math.ceil(rightE.anims.getProgress()*100)
    
switch (foo){
 
case   (0) : {hexAdj2='5eff5e'}break;          
case   (12) : {hexAdj2='aaffaa'}break;  
case   (23) : {hexAdj2='e5ff63'}break;  
case   (34) : {hexAdj2='ffff55'}break;  
case   (45) : {hexAdj2='ffe047'}break;  
case   (56) : {hexAdj2='ffbd39'}break;  
case   (67) : {hexAdj2='ff952b'}break;  
case   (78) : {hexAdj2='ff0000'}break;  
case   (89) : {hexAdj2='ff0000'}break;  
                          
                  }
    graphics.fillStyle('0x'+hexAdj2, 1.0);    
    graphics.fillCircleShape(hitRC);    
                        
            
                if ( game.loop.actualFps>=50)//rightE.anims.nextTick /rightE.anims.currentAnim.frames.length)
    timeAdj2=  ( 14)/rightE.anims.msPerFrame ;
                   //( 12)/rightE.anims.msPerFrame ;      
                 if ( game.loop.actualFps<50 )   
              timeAdj2=  ( 18)/rightE.anims.msPerFrame ;       
                          
                  
              }
            
   
            
     for(var i = 0; i < hitRLines.length; i++) {
      
        if( typeof rightId !=='undefined' &&  typeof rightE.anims!=='undefined' &&   rightId !==-1 && rightId !==-Infinity && rightE.attack==true ){
          Phaser.Geom.Line.RotateAroundPoint(hitRLines[i],hitRC,timeAdj2);
   
        graphics.strokeLineShape(hitRLines[i]);
        
  if( rightId !==-1 ){
        if( rightE.anims.isPlaying &&
           rightE.anims.getProgress()==1 || 
           rightE.hit==true ||
          rightE.anims.getProgress()==0
          )  { hitRLines=[];}}
        }
  
    
    
    }
                 
            
            }
// END DRAW EVENTS

        }
        
         camera(){
            
            
        }
        
        
}
        
       
        