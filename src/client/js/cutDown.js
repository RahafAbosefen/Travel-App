/**
 * @description Calculates the number of days until a specified trip date.
 * @param {string|Date} date - The trip date, either as a string or a Date object.
 * @returns {number} The number of days remaining until the trip.
 */
const cutDown = (date) => {

    const tripDate = new Date(date);
    const today = new Date();
    const timeDifference = tripDate - today;
    // Convert to days
    const daysUntilTrip = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysUntilTrip;

};
// Export cutDown
export { cutDown };