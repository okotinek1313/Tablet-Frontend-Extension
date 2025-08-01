# Tablet Frontend Back Button Extension

A Chrome extension that adds a back button to streaming sites (Netflix, YouTube, Disney+, etc.) that redirects to [tablet-frontend.vercel.app](https://tablet-frontend.vercel.app/).


## Features
- One-click back button on supported streaming sites
- Positioned in the bottom-right corner for easy access
- Site-specific button colors (matches brand colors)
- Lightweight and non-intrusive

## Supported Sites
- Netflix
- YouTube
- Disney+
- Prime Video
- Plex

## Installation (Manual Load)

### Load Unpacked Extension
1. Download this repository as a ZIP file
2. Unzip the files to a folder
3. Open Chrome and go to chrome://extensions in your browser
4. Enable **Developer mode** (toggle in top-right)
5. Click **Load unpacked** and select the unzipped folder

## How to Use
1. Visit any supported streaming site or site that tablet-frontend.vercel.app may redirect you to. (**I Have the repo for that on my page.**)
2. Look for the blue back button in the bottom-right corner
3. Click to instantly return to tablet-frontend.vercel.app

## Customization
To add more sites, edit `content.js`:
```javascript
const supportedSites = [
// Add new entries like this:
{
 id: 'hulu',
 url: 'https://www.hulu.com'
}
];
