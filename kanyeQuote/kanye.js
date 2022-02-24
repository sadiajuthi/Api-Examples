function loadquotes() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => quatation(data))
}

function quatation(quote) {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote

}
// another way 
// const quatation = quote => {
//     const quoteElement = document.getElementById('quote');
//     quoteElement.innerText = quote.quote

// }