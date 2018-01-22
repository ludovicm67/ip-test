var ipv4 = document.getElementById('ipv4');
var ipv6 = document.getElementById('ipv6');

fetch('https://ipv4-test.ludovic-muller.fr/')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    ipv4.textContent = text;
  })
  .catch(function(error) {
    console.error('IPv4 request failed.');
  });

fetch('https://ipv6-test.ludovic-muller.fr/')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    ipv6.textContent = text;
  })
  .catch(function(error) {
    console.error('IPv6 request failed.');
  });
