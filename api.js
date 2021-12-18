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

/* Variables */
var fav;

/* Main */
function GetFav(hash) {
  fetch(`http://memefileserver.ml/jrp/favicon.php?hash=${hash}`)
    .then(res => res.json())
    .then(data => fav = data.image);
};

async function SetFav(hash) {
  fetch(`http://memefileserver.ml/jrp/favicon.php?hash=${hash}`)
    .then(res => res.json())
    .then(data => fav = data.image)
    .then(() => favicon(data.image, "base64"));
};
