// jrp.best fileserver api, copyright 2022-2023 (c) by oxmc and Givinghawk
// Distributed under an MIT license: https://jrpbest-files.givinghawk.repl.co/LICENSE

/* Check if axiox is included */
if (!window.axios) {
  // axios is not loaded
  throw new Error("Axios is not loaded, please include it above this api script.");
};

/* Check if favicon.js is included */
if (!window.favicon) {
  // favicon.js is not loaded
  throw new Error("Favicon.js is not loaded, please include it above this api script.");
};

/* Check if async/await is availible */
let isAsync = true;
try {
  eval('async () => {}');
} catch (e) {
  if (e instanceof SyntaxError)
    isAsync = false;
  else
    throw new Error("Unable to use async/await, unable to use api.");
    /* throw e; // throws CSP error */
}

/* Events */
var JrpRespEvent = new CustomEvent("JrpResponse", { "detail": "Response recived from JrpBest Servers" });

/* Main Functions */
async function GetB64File(accesskey, file) {
  const res = await axios.get(`https://jrpbest-files.givinghawk.repl.co/api/v1/api.php?accesskey=${accesskey}&file=${file}&mode=get`);
  document.dispatchEvent(JrpRespEvent);
  var resp = res.data;
  return resp;
};

async function UploadFile(accesskey, file, fname) {
  var filename = fname || 'unknown';
  const res = await axios.post(`https://jrpbest-files.givinghawk.repl.co/uploader.php`, {
    fileToUpload: file
  });
  document.dispatchEvent(JrpRespEvent);
  var resp = res.data;
  return resp;
};
