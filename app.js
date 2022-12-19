var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var OutputDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/irish.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server! try again after sometimes")
}


function clickHandler() {
   

    var inputText = txtInput.value; //taking input


    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            OutputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)