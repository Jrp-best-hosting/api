// jrp.best fileserver api, copyright 2022-2023 (c) by oxmc and Givinghawk
// Distributed under an MIT license: https://jrpbest-files.givinghawk.repl.co/LICENSE

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

/* Include axios for get requests */
if (!favicon()) {
  // axios is not loaded
  throw new Error("favicon.js is not loaded, please include it above this api script.");
};

/* Check if async/await is availible */
let isAsync = true;
try {
  eval('async () => {}');
} catch (e) {
  if (e instanceof SyntaxError)
    isAsync = false;
  else
    throw new Error("Unable to use async/await, unable to use api");
    /* throw e; // throws CSP error */
}

/* Events */
var JrpRespEvent = new CustomEvent("JrpResponse", { "detail": "Response recived from JrpBest Servers" });

/* Main Functions */
async function GetB64File(accesskey, file) {
  const res = await axios.get(`https://jrpbest-files.givinghawk.repl.co/api/v1/api.php?accesskey=${accesskey}&file=${file}`);
  //console.log(res.data.file);
  document.dispatchEvent(JrpRespEvent);
  var resp = res.data;
  return resp;
};

async function GetFav(hash) {
  const res = await axios.get(`http://memefileserver.ml/jrp/favicon.php?hash=${hash}`);
  document.dispatchEvent(JrpRespEvent);
  var resp = res.data.image;
  return resp;
};

async function setFav(hash) {
  const res = await axios.get(`http://memefileserver.ml/jrp/favicon.php?hash=${hash}`);
  document.dispatchEvent(JrpRespEvent);
  favicon(res.data.image, "base64")
};
