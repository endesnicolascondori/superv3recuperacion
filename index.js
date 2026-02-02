if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
      console.log("SW Registered!");
    }).catch(error=>{
      console.log("SW Registration Failed");
      //workbox generateSW workbox-config.js
      //npx workbox generateSW workbox-config.js
    });
}else{
  console.log("Not supported");
}