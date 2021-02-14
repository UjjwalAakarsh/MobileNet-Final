Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
Webcam.attach("#camera")

function capture(){
    Webcam.snap(
        function (pic) {
        document.getElementById("snapshot").innerHTML=`<img src=${pic} id="picture">`
        }
    )
}
//Check Ml5 Version
console.log(ml5.version)

//Import The Model In a Variable
classifier=ml5.imageClassifier("MobileNet",ModelLoaded)

//Check If Model Is Loaded Or Not 
function ModelLoaded(){
    console.log("Model Has Been Loaded")
}

//Code For Identifying The Image
 function identify(){

    //Store The Image To Be Identify In The Variable
     img=document.getElementById("picture")
     //Identify Image
     classifier.classify(img,getresults)
 }

 //Getting The Results
 function getresults(error,results) {
     if (error) {
         console.log(error)
     }
     else{
         console.log(results)
         document.getElementById("output").innerHTML=results[0].label
     }
 }
 