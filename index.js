
window.onload=function(){

const canvas = document.getElementById('canvas');

const engine = new BABYLON.Engine(canvas,true);

const createScene = () =>{
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera('camera',
                                                -Math.PI/2,
                                                Math.PI/2.5,10,
                                                new BABYLON.Vector3(0,0,0)
                                                );
    
    camera.attachControl(canvas,true)
    
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    // const box = BABYLON.MeshBuilder.CreateBox("box", {width:1,height:1});
    // box.position.y=0.5

    const box = BABYLON.MeshBuilder.CreateBox("box", {width:1,height:1,depth:5});
    box.position.y=0.5
    const box1 = BABYLON.MeshBuilder.CreateBox("box", {});
    box1.position.x=-2;
    box1.position.y=1;
    box1.scaling.x = 2;
    box1.scaling.y = 2;
    box1.scaling.z = 5
    
    const box2 = BABYLON.MeshBuilder.CreateBox("box", {});
    box2.position.x=2;
    box2.position.y=0.75;
    box2.scaling = new BABYLON.Vector3(2,1.5,4)

    BABYLON.MeshBuilder.CreateGround('ground',{width:10,height:10})

    // new BABYLON.Sound('pikachu','pikachu.mp3',scene,null,{loop:true,autoplay:true})
//    const sound = new BABYLON.Sound('pikachu','pikachu.mp3',scene);
//    console.log(sound)

    // setInterval(()=>{
    //     sound.play();
        
    // },2000);

    return scene;

}

const scene = createScene();

engine.runRenderLoop(function(){
    scene.render();
});

    
    window.onresize=function(){

        engine.resize();
    }
}