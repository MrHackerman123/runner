var idleBobAnimation, runningBobAnimation;
var idleBob, runningBob;
var bg;
var ground;
var groundImg;


function preload(){

    runningBobAnimation = loadAnimation("0_Reaper_Man_Running_000.png","0_Reaper_Man_Running_001.png","0_Reaper_Man_Running_002.png","0_Reaper_Man_Running_003.png",
    "0_Reaper_Man_Running_004.png","0_Reaper_Man_Running_005.png","0_Reaper_Man_Running_006.png","0_Reaper_Man_Running_011.png")

    groundImg = loadImage("ground.png")

    bg = loadImage("DPr68A6VwAAZ_ti.jpg")

    //goodFireImg = loadImage("vecteezy_fire_1188566.png")
    //badFireImg = loadImage("vecteezy_blue-fire_1188585.png")


}

function setup() {
    createCanvas(1000,600)


    runningBob = createSprite(100,490,150,650)
    runningBob.addAnimation("running",runningBobAnimation)
    runningBob.scale = 0.1

    ground = createSprite(100,700,600,100)
    ground.addImage("ground",groundImg)


     

    //goodFire = createSprite(runningBob.x,runningBob.y,100,100)
    //goodFire.addImage("flaming",goodFireImg)

 
}

function draw() {
    background(bg)


 




    drawSprites()
}