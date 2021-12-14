/* Include Favicon.js by oxmc */
var script=document.createElement("script");
script.src="https://fjs.oxmc.xyz/favicon.min.js";
document.head.appendChild(script);

/* Main */
function GetFav(hash) {
  fetch(`http://memefileserver.ml/jrp/favicon.php?hash=${hash}`).then(function(response) {
    return response.json();
  }).then(function(data) {
    favicon(data.url);
  }).catch(function(err) {
    console.log("error: "+err)
  });
};
