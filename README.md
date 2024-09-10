# Travel App

## Project Description

The Travel App helps users plan trips by providing real-time or predicted weather forecasts and images for their destination. Users simply enter their location and departure date, and the app integrates data from multiple APIs to deliver relevant travel information.

## Installation

1. Clone the repository:
- `git clone https://github.com/RahafAbosefen/Travel-App.git`
- `cd Travel-App`

2. Install dependencies:
Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.
- `npm install`
3. Build the project:
- Set up webpack config files for development and production environments. Download files from this repo and navigate to the project folder. Afterwards, to start the server run these commands in command line:
```
//For development:
npm run build-dev
//For production:
npm run build-prod
//Start the server:
npm run start
```
4. Open your browser and navigate to `http://localhost:8080` .


## Usage

To use the Travel App:
1. Enter your destination and departure date in the input fields.
2. Press the Generate button.
3. The app will display the weather forecast and an image of your destination below.
4. If the input is invalid, an error message will be shown. The app is fully responsive across devices.

## Project Structure

- Travel App 
  - __test__/
  - node_modules/
  - src/
    - client/
    - server/
  - dist/
  - .babelrc
  - webpack.dev.js
  - webpack.prod.js
  - .env
  - .gitignore
  - package-lock.json
  - package.json
  - README.md

## Author

Code is created by  Rahaf Abo Sefen, using starter code by Udacity.