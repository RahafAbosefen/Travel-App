import { deleteTrip } from "./deleteTrip";

/**
 * @description Updates the user interface by creating a trip card 
 *              with details of the specified trip and appending it 
 *              to the trip results section. Adds a delete button to 
 *              remove the trip from the UI.
 * @param {Object} tripData - The trip data object containing details 
 *                            such as city, country, weather, and dates.
 */
const updateUI = (tripData) => {
    const tripResults = document.getElementById('trip-results');
    const tripCard = document.createElement('div');
    tripCard.classList.add('trip-card');
    tripCard.innerHTML = `
        <div class="trip-image">
        <img src="${tripData.imageURL}" alt="Image of ${tripData.city}">
        </div>
        <div class="trip-details">
        <div class="bold-text">
        <h1>My Trip To: ${tripData.city}, ${tripData.country}</h1>
        <h1>Departing: ${new Date(tripData.tripDateInput).toLocaleDateString('en-GB')}</h1>
        </div>
        <p>${tripData.city}, ${tripData.country} is ${tripData.daysUntilTrip} days away.</p>
        <p>${tripData.weatherDescription} Throughout the day.</p>
        <p>High - ${tripData.highTemp} °C , Low - ${tripData.lowTemp} °C</p>
        <button class="delete-btn">Delete Trip</button>
        </div>
    `;
    tripResults.appendChild(tripCard);
    // Add event listener to the delete button
    const deleteButton = tripCard.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => deleteTrip(tripCard, tripData));
};

// Export updateUI
export { updateUI };
