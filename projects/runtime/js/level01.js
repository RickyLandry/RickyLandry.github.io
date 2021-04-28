var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
            function createSawBlade(x, y) {
                var hitZoneSize = 25;
                var damageFromObstacle = 10;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                sawBladeHitZone.x = x;
                sawBladeHitZone.y = groundY;
                game.addGameItem(sawBladeHitZone); 
                var obstacleImage = draw.bitmap('img/Fireball.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
                obstacleImage.scaleX = 0.14;
                obstacleImage.scaleY = 0.14;
            }
         
            function createSpike(x){
                var hitZoneSize = 20;
                var damageFromObstacle = 10;
                var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                spikeHitZone.x = x;
                spikeHitZone.y = groundY;
                game.addGameItem(spikeHitZone); 
                var obstacleImage = draw.bitmap('img/Spike.png')
                spikeHitZone.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
                obstacleImage.scaleX = 0.04;
                obstacleImage.scaleY = 0.04;
            }
            function createEnemy(x) {
                var enemy = game.createGameItem('enemy',25);
                var enemyImage = draw.bitmap('img/Darla2.0.png');
                enemyImage.x = -25;
                enemyImage.y = -25;
                enemy.addChild(enemyImage);
                enemy.x = x;
                enemy.y = groundY-50;
                game.addGameItem(enemy);
                enemy.velocityX = -2;
                enemyImage.scaleX = 0.08;
                enemyImage.scaleY = 0.08;
                enemy.onPlayerCollision = function() {
                    console.log('The enemy has hit Halle');
                    game.changeIntegrity(-20);
                    enemy.fadeOut();
                };
                enemy.onProjectileCollision = function(){
                    console.log('Halle has hit the enemy');
                    game.increaseScore(+500);
                    enemy.fadeOut(); 
                };
            };    
            function createReward(x, y){
                var enemy = game.createGameItem('enemy',25);
                var gold = draw.bitmap('img/gold.png');
                gold.x = -30;
                gold.y = -35;
                enemy.addChild(gold);
                enemy.x = x;
                enemy.y = groundY-y;
                game.addGameItem(enemy);
                enemy.velocityX = -2;
                gold.scaleY = .05;
                gold.scaleX = .05;

                enemy.onPlayerCollision = function() {
                    console.log('The reward has hit Halle');
                    game.increaseScore(+400);
                    enemy.fadeOut();
                };
                
        };
            
    
            
            


        createSawBlade(1000, groundY);
        createSawBlade(250, groundY - 250);
        createSawBlade(1500, groundY);
        createSpike(500);
        createSpike(800);
        createEnemy(400);
        createReward(600, 0);
        createReward(2000, 80);
        createReward(1800, 0);
        createEnemy(900);
        createEnemy(1650);
        createReward(2300, 80);
        createSawBlade(2275, groundY);
        createSpike(2500);
        createSawBlade(2700, groundY);
        createReward(2900, 80);
        createEnemy(2900);
        createEnemy(3200);
        createEnemy(3700);
        createEnemy(4400);
        createReward(3000, 80);
        createReward(4200, 80);
        createSawBlade(4000, groundY);
        createSpike(3000);
        createSpike(3500);
        createSawBlade(3700, groundY);
        createReward(4500, 80);
        createEnemy(4800);
        createSpike(4200);
        createSawBlade(5000, groundY);
        createEnemy(5200);
        createReward(5500, 80);
        createReward(5800, 80);
        createSpike(5600);
        createSawBlade(5300, groundY);
        createEnemy(6000);
        createEnemy(6100);
        createEnemy(6200);

        
        
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
