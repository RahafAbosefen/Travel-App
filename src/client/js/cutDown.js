function cutDwon(date){
    const tripDate = new Date(date); 
    const today = new Date(); 

    const timeDifference = tripDate - today; 
    const daysUntilTrip = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    return daysUntilTrip;
}
export {cutDwon};