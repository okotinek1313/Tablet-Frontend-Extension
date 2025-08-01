// List of supported streaming sites (from your JSON)
const supportedSites = [
  {
    id: 'netflix',
    url: 'https://www.netflix.com'
  },
  {
    id: 'youtube',
    url: 'https://www.youtube.com'
  },
  {
    id: 'disney',
    url: 'https://www.disneyplus.com'
  },
  {
    id: 'prime',
    url: 'https://www.primevideo.com'
  },
  {
    id: 'plex',
    url: 'https://app.plex.tv/desktop/#!/'
  }
];

// Check if current site is in our supported list
const currentUrl = window.location.href;
const isSupportedSite = supportedSites.some(site => currentUrl.includes(site.url.replace(/https?:\/\//, '')));

if (isSupportedSite) {
  // Create the button element
  const backButton = document.createElement('button');
  backButton.id = 'tablet-back-button';
  backButton.innerHTML = '← Back to Tablet';

  // Add click event to redirect
  backButton.addEventListener('click', () => {
    window.location.href = 'https://tablet-frontend.vercel.app/';
  });

  // Add the button to the page
  document.body.appendChild(backButton);

  // Optional: Add site-specific styling
  const site = supportedSites.find(s => currentUrl.includes(s.url.replace(/https?:\/\//, '')));
  if (site) {
    backButton.classList.add(`site-${site.id}`);
  }
}