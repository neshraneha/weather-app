async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "b1fb3735a2944ccaa4a45451251006";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();

    document.getElementById("cityName").innerText = `📍 ${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").innerText = `🌡️ Temperature: ${data.current.temp_c}°C`;
    document.getElementById("condition").innerText = `📋 Condition: ${data.current.condition.text}`;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById("weatherResult").classList.add("hidden");
  }
}
