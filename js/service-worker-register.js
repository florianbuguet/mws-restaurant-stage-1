navigator.serviceWorker.register("/service-worker.js").then(registration => {
    console.log(registration.scope,"Service worker succesfully installed");
    if (registration.installing) {
      registration.installing.postMessage("Installing");
    }
  }, err => {
    console.error("Installing the worker failed!", err);
  });
