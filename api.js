/* Include Favicon.js by oxmc */
var faviconjs = document.querySelector("script[src~='https://fjs.oxmc.xyz/favicon.min.js']");
if (!faviconjs) {
  var faviconjs = document.querySelector("script[src~='http://fjs.oxmc.xyz/favicon.min.js']");
  if (!faviconjs) {
    faviconjs = document.createElement('script');
    faviconjs.src="https://fjs.oxmc.xyz/favicon.min.js";
    document.getElementsByTagName('head')[0].appendChild(faviconjs);
  };
};

/* Main */
function GetFav(hash) {
  fetch(`http://memefileserver.ml/jrp/favicon.php?hash=${hash}`).then(function(response) {
    return response.json();
  }).then(function(data) {
    favicon(data.database64);
  }).catch(function(err) {
    console.log("error: "+err)
  });
};
