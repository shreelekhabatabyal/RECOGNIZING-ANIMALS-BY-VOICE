function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/O2O7Ei3CO/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
    console.log("modelloaded");
}

function gotResults(error, results) {
    console.log(results);
    document.getElementById("result_label").innerHTML = "I can hear this:     " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy: " + results[0].confidence.toFixed(2) + "%";


    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";




    img1 = document.getElementById("cat");
    img2 = document.getElementById("dog");
    img3 = document.getElementById("lion");


    if (results[0].label == "cat") {
        img1.src = "cat gif.gif";
        img2.src = "dog img";
        img3.src = "lion img";

    } else if (results[0].label == "dog") {
        img1.src = "cat img.png";
        img2.src = "dog gif";
        img3.src = "lion img";

    } else if (results[0].label == "lion") {
        img1.src = "cat img.png";
        img2.src = "dog img";
        img3.src = "lion gif";

    }



}