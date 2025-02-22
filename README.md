# Client Detector

This is a simple web application that detects and displays various system information, including OS, browser, screen dimensions, network status, and battery level.

## Features
- Detects operating system (Windows, Mac, Linux, Android, iOS)
- Identifies browser type (Chrome, Safari, Edge, Opera, Firefox, Internet Explorer)
- Displays screen width and height
- Detects device orientation (Landscape or Portrait)
- Checks battery level and charging status (not available on Firefox)
- Monitors network connectivity status (Online/Offline)

## Technologies Used
- HTML
- CSS
- JavaScript

## Setup & Usage
1. Open the `index.html` file in a browser.
2. The system information will be displayed automatically.

## Code Overview
- `systemName()`: Detects and returns the user's OS.
- `systemLanguage()`: Retrieves the user's language settings.
- `systemBrowser()`: Determines the browser being used.
- `windowWidth() & windowHeight()`: Get the current screen dimensions.
- `getBatteryLevel() & getBatteryStatus()`: Fetch battery details using the Battery API.
- `getNetworkStatus()`: Monitors online/offline status.
- `initialize()`: Runs all functions on page load and sets up event listeners.

## Event Listeners
- `resize`: Updates screen dimensions and orientation when the window is resized.
- `online` & `offline`: Updates network status dynamically.

## Limitations
- Battery API is not supported in Firefox.
- Some browsers may not fully support the `navigator.getBattery()` API.

## License
This project is licensed under the MIT License.

