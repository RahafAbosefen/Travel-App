import { updateUI } from "./updateUI";

// Function to save the trip data in local storage
const saveTripData = (tripData) => {
    const storedTrips = JSON.parse(localStorage.getItem('tripData')) || [];
    storedTrips.push(tripData);
    localStorage.setItem(
        'tripData',
        JSON.stringify(storedTrips)
    );
};

// Load saved trip data from local storage 
const loadSavedTrip = () => {
    try {
        const storedTripData = JSON.parse(localStorage.getItem('tripData')) || [];
        storedTripData.sort((daya, dayb) => daya.daysUntilTrip - dayb.daysUntilTrip);
        storedTripData.forEach(updateUI);
    } catch (error) {
        console.error(
            "Error loading saved trips from local storage:",
            error
        );
    }
};

export { saveTripData, loadSavedTrip };
