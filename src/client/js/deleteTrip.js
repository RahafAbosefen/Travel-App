/**
 * @description Deletes a trip from the UI and local storage. 
 *              Removes the specified trip card from the interface 
 *              and updates local storage by filtering out the deleted trip.
 * @param {HTMLElement} tripCard - The trip card element to be removed from the UI.
 * @param {Object} tripData - The trip data object containing details of the trip to delete.
 */
const deleteTrip = (tripCard, tripData) => {

    // Remove the card from the UI
    tripCard.remove();
    // Remove the trip from Local Storage
    let storedTrips = JSON.parse(localStorage.getItem("tripData"));
    // Filter out the trip to delete based on city and trip date

    storedTrips = storedTrips.filter((trip) => trip.city !== tripData.city ||
        trip.tripDateInput !== tripData.tripDateInput);
    // Save the updated trip data back to Local Storage
    localStorage.setItem(
        "tripData",
        JSON.stringify(storedTrips)
    );

};

// Export deleteTrip
export { deleteTrip };