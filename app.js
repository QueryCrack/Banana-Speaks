var btnTranslate = document.querySelector("#btn-translate")
var txtinput =  document.querySelector("#txt-area")
var outputtxt = document.querySelector("#output")

var serverURl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURl (text){
    return serverURl +"?" + "text=" + text
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

