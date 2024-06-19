// contribution or change to this file are allowed.

document.addEventListener("DOMContentLoaded", function () {
    const countrySelect = document.getElementById("country");
    const totalCases = document.getElementById("total-cases");
    const totalDeaths = document.getElementById("total-deaths");
    const totalRecovered = document.getElementById("total-recovered");

    countrySelect.addEventListener("change", function () {
        const selectedCountry = this.value;
        fetch(`https://api.covid19api.com/total/country/${selectedCountry}`)
            .then(response => response.json())
            .then(data => {
                const latestData = data[data.length - 1];
                totalCases.textContent = latestData.Confirmed.toLocaleString();
                totalDeaths.textContent = latestData.Deaths.toLocaleString();
                totalRecovered.textContent = latestData.Recovered.toLocaleString();
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    // Fetch data for default country on page load
    countrySelect.dispatchEvent(new Event("change"));
});
