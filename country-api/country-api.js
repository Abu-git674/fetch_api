function loadData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
}

loadData();

function displayCountry(countries) {
  const countriesContainer = document.getElementById("countries");

  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h2>${country.name.common}</h2>
    <h3>Capital: ${country.capital}</h3>
    <button onClick="loadCountryDetails('${country.name.common}')">
    Show Details</button>
    `;
    countriesContainer.appendChild(div);
  });
}

const loadCountryDetails = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data));
};

const displayCountryDetails = (details) => {
  const countryDetails = document.getElementById("country-details");

  countryDetails.innerHTML = `
  <img width="200px" src="${details[0].flags.png}">
  <h3>${details[0].name.common}</h3>
  <h3>${details[0].name.population}</h3>
  `;
};
