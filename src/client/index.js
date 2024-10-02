// JS files
import { loadSavedTrip, saveTripData } from './js/tripStorage';
import { performAction, postData } from './js/app';
import { cutDown } from './js/cutDown';
import { deleteTrip } from './js/deleteTrip';
import { getCoordinates } from './js/geonames';
import { getFutureWeather } from './js/weatherbit';
import { updateUI } from './js/updateUI';


import logo from './media/logo.png';

document.getElementById('logo').src = logo;

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Load saved trip data on page load
document.addEventListener('DOMContentLoaded', loadSavedTrip);
// Sacc styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// Export js files 
export {
    performAction,
    getCoordinates,
    getFutureWeather,
    cutDown,
    postData,
    updateUI,
    saveTripData,
    loadSavedTrip,
    deleteTrip
}