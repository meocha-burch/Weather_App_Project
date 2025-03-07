Weather App

A simple weather application built using React that fetches real-time weather data from the OpenWeatherMap API.

Features
-Search for weather conditions by city name
-Displays temperature, humidity, and wind speed
-Weather icons based on current conditions
-Supports Fahrenheit temperature display
-Allows search using both click and 'Enter' key

Technologies Used
-React.js
-OpenWeatherMap API
-CSS for styling

Installation & Setup
Prerequisites
-Make sure you have Node.js and npm installed on your machine.

Steps
1. Clone this repository:

git clone https://github.com/yourusername/weather-app.git
cd weather-app

2. Install dependencies:

npm install

3. Create a .env file in the root directory and add your OpenWeatherMap API key:

VITE_APP_ID=your_api_key_here

4. Start the development server:

npm run dev

Usage
-Enter a city name in the search bar and click the search icon or press 'Enter' to fetch weather data.

-The app will display the temperature (in Fahrenheit), humidity, wind speed, and a relevant weather icon.

Environment Variables
-You need to set up the following environment variable:

VITE_APP_ID=your_openweathermap_api_key

License
-This project is licensed under the MIT License.

Contributing
-If you'd like to contribute, feel free to fork the repository and submit a pull request!
