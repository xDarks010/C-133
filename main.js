img=""
statusl = "";
objects = [];


function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}



function draw(){
    image(video, 0, 0, 380, 380);

    if(statusl != "")
        {   

            r = random(255);
            b = random(255);
            g = random(255);

            objectDetector.detect(video, getResult);
            for (i = 0; i < objects.length; i++)
                {
                    document.getElementById("status").innerHTML = "Status : Object Detected";
                    document.getElementById("number_of_objects").innerHTML = 'Number Of Objects Detected Are:' + objects.length;

                    fill(r,g,b);
                    percent = floor(objects[i].confidence * 100);
                    text(objects[i].label + " " + percent + "%" , objects[i].x, objects[i].y);
                    noFill();
                    stroke(r,g,b);
                    rect(objects[i].x, objects[i].y, objects[i].width , objects[i].height);


                }
        }
    
}

function modelLoaded(){
    console.log("Model Loaded!");
    statusl = true;
}

function getResult(error, results){
    if (error) {
        console.log(error);

    }

    console.log(results);
    objects = results;
}
