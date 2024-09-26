//js files
import { performAction } from './js/app';
import { getCoordinates } from './js/geonames';
import { getFutureWeather } from './js/weatherbit';
import { cutDwon } from './js/cutDown';
import { postData } from './js/app';
import { updateUI } from './js/updateUI';
import { saveTripData } from './js/tripStorage';
import { loadSavedTrip } from './js/tripStorage';
import { deleteTrip } from './js/deleteTrip';

import logo from './media/logo.png';

document.getElementById('logo').src = logo;

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