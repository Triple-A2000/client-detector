'use strict';

const { log } = console;

const operatingSystem = document.querySelector('.os');
const language = document.querySelector('.language');
const browser = document.querySelector('.browser');
const width = document.querySelector('.width');
const height = document.querySelector('.height');
const windowOrientation = document.querySelector('.orientation');
const batteryLevel = document.querySelector('.level');
const batteryStatus = document.querySelector('.status');
const networkStatus = document.querySelector('.network-status')


function systemName () {
    let userDevice = navigator.userAgent.toLocaleLowerCase();
    
    if(userDevice.includes('win')) {
     return 'Windows';
    } else if(userDevice.includes('mac')) {
     return 'Mac';
    } else if (userDevice.includes('linux')) {
     return 'Linux';
    } else if (userDevice.includes('android')) {
     return 'Android';
    } else if (userDevice.includes('iphone') || userDevice.includes('ipad')) {
     return 'IOS';
    } else {
     return 'Unknown OS';
    }
 }

 function systemLanguage () {
    return navigator.language;
}

function systemBrowser () {
    let userAgent = navigator.userAgent;

    if (userAgent.includes('Chrome') || userAgent.includes('Safari') && !userAgent.includes('Opera') && userAgent.includes('Edg')) {
        return 'Chrome';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome') && !userAgent.includes('Edg') && !userAgent.includes('OPR')) {
        return 'Safari';
    }  else if (userAgent.includes('Chrome') && userAgent.includes('Edg')) {
        return 'Edge';
    } else if (userAgent.includes('OPR') || userAgent.includes('Opera')) {
        return 'Opera';
    } else if (userAgent.includes('Firefox')) {
        return 'Firefox';
    } else if(userAgent.includes('MSIE')) {
        return 'Internet Explorer';
    } else {
        return `Unknown Browser: ${userAgent}`;
    } 
}

function windowWidth() {
    return `${window.innerWidth}px`;
}

function windowHeight() {
    return `${window.innerHeight}px`;
}

function updateWindowInfo() {
    width.textContent = windowWidth(); 
    height.textContent = windowHeight(); 
    windowOrientation.textContent = getWindowOrientation();
}

function getWindowOrientation() {
    return window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait';
}

function getBatteryLevel () {
    if(systemBrowser() === 'Firefox') {
        return Promise.resolve('Not available');
    } else {
        return navigator.getBattery().then(battery => {
            const level = battery.level !== undefined ? `${battery.level * 100}%` : "Unavailable";
            return `${level}`;
        });
    }     
}

function getBatteryStatus () {
    if(systemBrowser() === 'Firefox') {
        return Promise.resolve ('Not available');
    } else {
        return navigator.getBattery().then(battery => {
            return `${battery.charging ? "Charging" : "Not charging"}`;
        });
    }
}

function getNetworkStatus () {
    const status = navigator.onLine ? 'Online' : 'Offline';
    networkStatus.textContent = status;

    networkStatus.classList.remove('online', 'offline');
    networkStatus.classList.add(navigator.onLine ? 'online' : 'offline');
}

function initialize() {
    operatingSystem.textContent = systemName();
    language.textContent = systemLanguage();
    browser.textContent = systemBrowser();

    width.textContent = windowWidth();
    height.textContent = windowHeight();
    windowOrientation.textContent = getWindowOrientation();

    getBatteryLevel().then(function (level) {
        batteryLevel.textContent = level;
    });

    getBatteryStatus().then(function (status) {
        batteryStatus.textContent = status;
    });

    getNetworkStatus();
    window.addEventListener('resize', updateWindowInfo);
    window.addEventListener('online', getNetworkStatus);
    window.addEventListener('offline', getNetworkStatus);
}


window.addEventListener('load', initialize);