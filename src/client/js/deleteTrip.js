function deleteTrip(tripCard, tripData) {
    // Remove the card from the UI
    tripCard.remove();
    // Remove the trip from Local Storage
    let storedTrips = JSON.parse(localStorage.getItem('tripData'));
    // Filter out the trip to delete based on city and trip date
    storedTrips = storedTrips.filter(trip => (
        trip.city !== tripData.city || trip.tripDateInput !== tripData.tripDateInput
    ));
    // Save the updated trip data back to Local Storage
    localStorage.setItem('tripData', JSON.stringify(storedTrips));
}
export { deleteTrip };