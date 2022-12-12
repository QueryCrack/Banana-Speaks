var btnTranslate = document.querySelector("#btn-translate")
var txtinput =  document.querySelector("#txt-area")
var outputtxt = document.querySelector("#output")

var serverURl = "http://api.weatherapi.com/v1/current.json?key=21f2acfd5cb34f509b2103710221212&q=chandrapur&aqi=no"

function getTranslationURl (input){
    return serverURl +"?" + "text=" + input
}

function errorhandler(error){
    console.log("error occured" , error)
    alert("something goes wrong!!")
}

console.log(txtinput)

function clickHandler(){
    console.log("clicked")
    var inputText = txtinput.value

    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated
        outputtxt.innerHTML = translatedText
    })
    .catch(errorhandler)
    
}

btnTranslate.addEventListener("click", clickHandler)

