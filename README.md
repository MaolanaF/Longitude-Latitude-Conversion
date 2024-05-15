# Longitude-Latitude-Conversion

# Description
 Longitude and latitude are geographic coordinates used to determine the location of a point on the Earth's surface. The combination of longitude and latitude allows for the precise determination of a location on the Earth's surface and is commonly used in geographic coordinate systems for navigation, mapping, and other applications.

# Installation 
1. Clone the repository to your local machine
   - git clone https://github.com/MaolanaF/Longitude-Latitude-Conversion.
2. Navigate into the project directory
   - cd frontend
3. Install all depedencies
   - npm install

# Running the project
1. To run the project, use the following command
   - npm run dev

 # Project Structure
```
Frontend
└───public
    │   Vite.svg
└───src
│   │
│   └───assets
│   │   |
│   └───components
│   │   │
│   │   └───button
│   │   │   │   FloatingButton.jsx
│   │   │   │
│   │   └───form
│   │   │   │   FormInput.jsx
│   │   │   │   DMStoDDConverter.jsx
│   │   │   │   DDtoDMSConverter.jsx
│   │   │   │
│   │   └───map
│   │   |   │   MapComponents.jsx
│   │   │   │
│   │   app.css
│   │   app.jsx
│   │   index.css
│   │   main.jsx
│   README.md
│   .gitignore
│   eslintrc.cjs
│   index.html
│   package-lock.json
│   package.json
│   postcss.config.js
│   tailwind.config.js
│   vite.config.js
``` 
 # Things that have been done from this project
 1. Functionality
    - Creating an OSM Map Display using the OpenLayers Library and creating a floating button that will later display a popup form for latitude and longitude conversion.
    - The main achievement is the implementation of basic functionality that allows the project to perform conversions between longitude and latitude coordinates with high accuracy. This includes the ability to accept coordinate inputs in various formats and produce corresponding outputs.

 # Things haven't been done yet
 1. Integration of OpenLayers Map with Conversion Form.
    - Not yet implemented as it requires more time to explore the OpenLayers library.
 2. Creating unit tests.
    - Cannot be done yet, as all features have not been implemented.
 
