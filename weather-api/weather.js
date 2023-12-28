const loadWeatherInfo = () => {
  const countryText = document.getElementById("search-field");
  const countryValue = countryText.value.trim();
  const loader = document.getElementById("loadingDiv");

  if (countryValue !== "") {
    loader.style.display = "block";
  }

  const API_KEY = "80c007415c83926ae8bc1699c4be3894";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryValue}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (data) => {
  console.log(data);
  const loader = document.getElementById("loadingDiv");
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);

  setTimeout(() => {
    const weatherDiv = document.getElementById("weatherDiv");
    weatherDiv.innerHTML = "";

    const div = document.createElement("div");

    const tempValue = parseFloat(data.main.temp - 273.15).toFixed(2);
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    console.log(data);
    const timestamp = data.dt; // Assuming data.dt contains the timestamp
    const timezoneOffset = data.timezone; // Assuming data.timezone contains the offset in seconds

    const date = new Date((timestamp + timezoneOffset) * 1000);
    console.log("date", date);
    const option = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    };
    const formattedDate = date.toLocaleString("en-US", option);

    div.innerHTML = `
       <img src=${iconUrl}/>
       <h1>${data.name}</h1>
       <h3><span>${tempValue}</span>&deg;C</h3>
       <h1>${data.weather[0].main}</h1>
       <h4 class="text-warning">Time:${formattedDate}</h4>
       `;
    weatherDiv.appendChild(div);
  }, 600);
};
