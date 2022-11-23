var btnTranslate = document.querySelector("#btn-translate")
var txtinput =  document.querySelector("#txt-area")
var outputtxt = document.querySelector("#output")

console.log(txtinput)
function clickHandler(){
    console.log("clicked")
    outputtxt.innerHTML = txtinput.value

    
}

btnTranslate.addEventListener("click", clickHandler)

