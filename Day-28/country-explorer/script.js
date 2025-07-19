const input = document.getElementById("country_header--input");
const searchBtn = document.getElementById("country_header--btn");
const errorEl = document.getElementById("error");
const loaderEl = document.getElementById("loading");
const countryInfo = document.getElementById("country_info--container");
let map;

// when the searchBtn click show the country info
searchBtn.addEventListener("click", async () => {
  // get input value
  const country = input.value.trim();

  // check if it's empty or not
  if (!country) return;

  // call fetchCountry function
  await fetchCountry(country);
});

// get all the country info
async function fetchCountry(name) {
  // show the loader
  loaderEl.classList.remove("hidden");

  // hide errorEl
  errorEl.classList.add("hidden");

  countryInfo.innerHTML = "";

  // rquest rest country api and handle the error
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const data = await response.json();
    const country = data[0];

    // throw error when no country found
    if (!country) {
      throw new Error("Invalid Name Country ❗");
    }

    const languages = country.languages
      ? Object.values(country.languages).join(" , ")
      : "N/A";
    const currencies = Object.values(country.currencies);

    countryInfo.innerHTML = `
    <div id='country_info--container'>
      <div id='country_flag'>
        <img src="${country.flags.svg}" alt="${country.flags.alt}"/>
      <div/>
      <div id='country_information'>
        <ul>
          <li><strong>Name : </strong>${country.name.common}</li>
          <li><strong>Official Name :</strong> ${country.name.official}</li>
          <li><strong>Capital :</strong> ${country.capital}</li>
          <li><strong>Population :</strong> ${country.population.toLocaleString()}</li>
          <li><strong>Languages :</strong> ${languages}</li>
          <li><strong>Continent :</strong> ${country.continents[0]}</li>
          <li><strong>Region :</strong> ${
            country.region
          }, <strong>sub-region : </strong>(${country.subregion})</li>
          <li><strong>Currencies :</strong> ${
            currencies[0].name
          }, (<strong>Symbol </strong>: ${currencies[0].symbol})</li>
          <li><strong>Borderlands :</strong> ${country.borders.join(" , ")}</li>
        </ul>
      </div>
    </div>
    `;
    console.log(data);
    drawMap(country.latlng, country.name.common);
  } catch (e) {
    // show the errorEl
    errorEl.classList.remove("hidden");
    errorEl.textContent = "Failed to load country information ℹ";
  } finally {
    // always hide the loader if there is error catching or not
    loaderEl.classList.add("hidden");
  }
}

function drawMap(latlang, name) {
  const [lat, lng] = latlang;

  if (!map) {
    map = L.map("map").setView([lat, lng], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  } else {
    map.setView([lat, lng], 13);
  }
  let marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(name).openPopup();
}
