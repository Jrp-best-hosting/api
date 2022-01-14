// Rrp.best Fileserver API setup script, copyright 2022-2023 (c) by oxmc and Givinghawk
// Distributed under an MIT license: https://jrpbest-files.givinghawk.repl.co/LICENSE
//
// This script sets up the required files to use the JrpBest Fileserver API.

/* Functions */
function include(file) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  script.async = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
};
function removefile(filename, filetype){
  var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
  var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
  var allsuspects=document.getElementsByTagName(targetelement)
  for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
    allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    console.log(`Removed: ${filename}`);
  };
};
function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  };
};

/* Include required files */
/* Include Favicon.js by oxmc */
include('https://fjs.oxmc.xyz/favicon.min.js');
/* Include axios for get/post requests */
include('https://unpkg.com/axios/dist/axios.min.js');
/* Include jrpbest api */
include('https://jrpbest-files.givinghawk.repl.co/api/v1/api.js');

/* Cleanup */
removefile('include-apis.js', 'js');

/* Inform user api is ready */
console.log('JrpBest API Ready to be used!');
