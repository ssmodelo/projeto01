// var hhtm = document.querySelector('html');
// hhtm.onclick = function() {alert('zé ruelllllla')};
var myBtn = document.getElementById('btncab');
var myTxt = document.getElementById('txtcab');
var myImg = document.getElementById('logoPrincipal');

myBtn.onclick = function() {
    setUserName();
}


myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');
    if (mySrc === "imagens/opcao.jpg") {
        myImg.setAttribute('src',"imagens/logo.jpg");
    } else {
        myImg.setAttribute('src',"imagens/opcao.jpg");
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myTxt.textContent = 'Opção Tecnologia e Turismo, ' + storedName; 
}

function setUserName() {
    var myName = prompt('Please, enter your name.');
    localStorage.setItem('name',myName);
    myTxt.textContent = 'Opção Tecnologia e Turismo, ' + myName;
}
