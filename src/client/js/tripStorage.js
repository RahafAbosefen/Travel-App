import { updateUI } from "./updateUI";

// Function to save the trip data in local storage
function saveTripData(tripData) {
    let storedTrips = JSON.parse(localStorage.getItem('tripData')) || [];
    // Push the new trip data into the stored trips array
    storedTrips.push(tripData);
    // Save the updated array back to Local Storage
    localStorage.setItem('tripData', JSON.stringify(storedTrips));
}

/* Load saved trip data from local storage */
function loadSavedTrip() {
    try {
        let storedTripData = JSON.parse(localStorage.getItem('tripData')) || [];
        // Sort the trips by daysUntilTrip (ascending order)
        storedTripData = storedTripData.sort((a, b) => a.daysUntilTrip - b.daysUntilTrip);
        // Update UI for each trip
        storedTripData.forEach(tripData => {
            updateUI(tripData);
        });
    } catch (error) {
        console.error("Error loading saved trips from local storage:", error);
    }
}

export { saveTripData, loadSavedTrip };