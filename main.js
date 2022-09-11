var sound = "https://teachablemachine.withgoogle.com/models/BfP0nxV2z/model.json"


function Findthesound() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier(sound, modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}


function gotResults(error, results) {
console.log(results);
} 