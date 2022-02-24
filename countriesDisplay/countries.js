const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    console.log(countries)
    // for (country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country-div')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadDetails('${country.name}')">Details</button>`
        countriesDiv.appendChild(div)
    });
}

const loadDetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    console.log(url)
    fetch('url')
        .then(res => res.json())
    // .then(data => console.log(data))

}
