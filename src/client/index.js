// Importing necessary functions from various modules
import { loadSavedTrip } from './js/tripStorage';
import { performAction } from './js/app';


// Importing logo for use in the HTML
import logo from './media/logo.png';

// Setting the logo image source
document.getElementById('logo').src = logo;

// Adding event listener to the generate button
document.getElementById('save-trip').addEventListener('click', performAction);

// Loading saved trip data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadSavedTrip);

// Importing SCSS styles for the application
import './styles/main.scss';

// Exporting functions for use in other modules
export {
    performAction,
    loadSavedTrip
};