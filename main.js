function Comenzar() {
    navigator.mediaDevices.getUserMedia({ audio: true }); classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json', modelListo);

}
function modelListo() {
    classifier.classify(gotresultados);

}

function gotresultados(error, resultados) {
    if (error) {
        console.log(error);
    } else {
        console.log(resultados);
        document.getElementById("resultado_objeto").innerHTML = 'Escucho - ' + resultados[0].label;
        document.getElementById("presicion_objeto").innerHTML = 'Precisión - ' + (resultados[0].confidence * 100).toFixed(2) + " %";


        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');
        if (resultados[0].label == "Aplausos") {
            img.src = 'aliens-01.gif'; img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png'; img3.src = 'aliens-04.png';
        } else if (resultados[0].label == "Campana") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (resultados[0].label == "Chasquido") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png'; img2.src = 'aliens-03.gif'; img3.src = 'aliens-04.png';
        } else {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png'; img3.src = 'aliens-04.gif';
        }

    }
}