const date = document.querySelector('#button')

date.addEventListener ('click', ()=>{
    console.log("clicou")
    sendApiRequest()
})

async function sendApiRequest() {
    let api_key= "Qzyo5rVNXtaUWgNgcG0Jfg7aMHDn4OipqMM592e7"
    const date = document.querySelector('#date').value
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
    const title = document.querySelector('#title')
    title.innerHTML = data.title
    const explanation = document.querySelector('#explanation')
    explanation.innerHTML = data.explanation

    if (data.media_type === "image"){
        const media = document.querySelector('#media');
        media.innerHTML = `<img src="${data.url}">`;
    }else if (data.media_type === "video"){
        const media = document.querySelector('#media');
        media.innerHTML = `<iframe width="853" height="480" src="${data.url}"></iframe>`;
    }else {
        const undefined = document.querySelector('#undefined');
        undefined.innerHTML = "<div class = message><p>Infelizmente você ainda não pode visitar o futuro, nem ir tão longe no passado.</p><p>Conteúdo indisponível.</div><br>";
        document.getElementsByName("body")[0].style = 'background-image: url(https://i.pinimg.com/originals/2e/35/95/2e359568d36c711612bdde426a28a51f.gif);';
    }

/* Tentativa de fazer o undefined que ocupa o lugar do titulo e do explanation sumir para que fique apenas a mensagem,
 ainda não achei a função certa.

    if(data.media_type === "undefined"){
        document.getElementById('#undefined').style.visibility = 'hidden';
    }else if (data.title === "undefined") {
        document.getElementById('#undefined').style.visibility = 'hidden';
    } else {
        document.getElementById('#undefined').style.visibility = 'visible';
    }
}
*/
}

function useApiData(data){

}
//content.innerHTML = data.explanation
//content.innerHTML = data.title
//fetch('https://api.nasa.gov/planetary/apod?api_key=Qzyo5rVNXtaUWgNgcG0Jfg7aMHDn4OipqMM592e7').then(response=>{
//   return response.json()
//}).then(body=>{
//    console.log(body)
//})
//document.getElementById("copyright").innerHTML = "Por " + data.copyright;
//document.getElementById("title").innerHTML =data.title;
//document.getElementById("explanation").innerHTML =data.explanation;

