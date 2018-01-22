// configuration
var ipv4 = 'https://ipv4-test.ludovic-muller.fr/';
var ipv6 = 'https://ipv6-test.ludovic-muller.fr/';

// function to fetch user IP
function fetchIP(elemId, url) {
  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      var elem = document.getElementById(elemId);
      if (elem) elem.textContent = text;
    })
}

// fetch both IP versions
fetchIP('ipv4', ipv4);
fetchIP('ipv6', ipv6);
