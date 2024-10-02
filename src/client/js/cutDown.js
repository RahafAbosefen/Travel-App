const cutDown = (date) => {

    const tripDate = new Date(date);
    const today = new Date();
    const timeDifference = tripDate - today;
    // Convert to days
    const daysUntilTrip = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysUntilTrip;

};

export { cutDown };