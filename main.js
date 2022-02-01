var Bed ;
function setup() {
    classfier= ml5.imageClassifier('MobileNet', modelLoaded)
  }
  function draw(){
    }
    function modelLoaded(){
    console.log("ModelLoaded");
    classfier.classify(Bed, gotResult)  
    }
   function preload(){
  Bed = loadImage("Door knob.jpg")
   }
    function gotResult(error, result){
        if(error){
        console.error(error);  
        } 
        else{
         console.log(result);
        }
       }

