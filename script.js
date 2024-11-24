document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const apiKey = 'f47d8d2f346309b78a1220f99401f4b6'; // Replace with your valid key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Fix: Enclosed URL in backticks for string interpolation

    fetch(url)
        .then(response => {
            if (!response.ok) { // Fix: Check if response is OK (e.g., status 200)
                throw new Error('City not found!');
            }
            return response.json();
        })
        .then(data => {
            // Display weather data in the result element
            document.getElementById('result').innerHTML = `
                <p><strong>${data.name}</strong></p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            // Handle errors and display a user-friendly message
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
        });
});
