        
import {game} from "./scenes/game";


                var config = {
            type: Phaser.WEBGL,
            width: 800,
            height: 600,
            
       
            physics: {    
                default: 'arcade',
                arcade: {  debug:true,
                    gravity: {
                        y: 300
                    }
                   
                }
            },scene:[game],
               // ,
//            scene: {
//                init:init,
//                preload: preload,
//                create: create,
//                update: update,
//                boxLftST:boxLftST
//            },
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },


        };
        /*
        let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#392542',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC ]
};

let game = new Phaser.Game(config);
        */
        