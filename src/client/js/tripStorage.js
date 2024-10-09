import { updateUI } from "./updateUI";

/**
 * @description Saves trip data in local storage. If there are already stored trips,
 *              it adds the new trip to the existing array.
 * @param {Object} tripData - The trip data object to be saved.
 */
const saveTripData = (tripData) => {
    const storedTrips = JSON.parse(localStorage.getItem('tripData')) || [];
    storedTrips.push(tripData);
    localStorage.setItem(
        'tripData',
        JSON.stringify(storedTrips)
    );
};


/**
 * @description Loads saved trip data from local storage, sorts the trips by days until the trip,
 *              and updates the UI for each saved trip.
 * @throws {Error} If there is an issue retrieving or parsing the stored trip data.
 */
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

// Export saveTripData and loadSavedTrip
export { saveTripData, loadSavedTrip };
