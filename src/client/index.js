//js files
import { performAction } from './js/app';
import { getCoordinates } from './js/geonames';
import { getFutureWeather } from './js/weatherbit';
import { cutDwon } from './js/cutDown';
import { postData } from './js/app';
import { updateUI } from './js/updateUI';
import { saveTripData, loadSavedTrip } from './js/tripStorage';
import { deleteTrip } from './js/deleteTrip';

import logo from './media/logo.png';

document.getElementById('logo').src = logo;

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Load saved trip data on page load
document.addEventListener('DOMContentLoaded', loadSavedTrip);
//sacc styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// export js files 
export {
    performAction,
    getCoordinates,
    getFutureWeather,
    cutDwon,
    postData,
    updateUI,
    saveTripData,
    loadSavedTrip,
    deleteTrip
}