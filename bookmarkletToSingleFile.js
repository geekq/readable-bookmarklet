var aardvark = {

isBookmarklet: true,

//------------------------------------------------
// onload function for script elements
loadObject: function  (obj) {
  var c = 0;

  for (var x in obj) {
    if (aardvark[x] == undefined)
      aardvark[x] = obj[x];
     c++;
    }

  if (this.objectsLeftToLoad == undefined) {
    this.objectsLeftToLoad = this.srcFiles.length;
    }
  this.objectsLeftToLoad--;

  if (this.objectsLeftToLoad < 1) {
    // add anything here you want to happen when it is loaded
    // copy our own functions etc over aardvark's

    // start aardvark and show its help tip
    console.log('Start aardvark by typing into console: aardvark.start()');
    // this.start ();
    // this.showHelpTip(0);

    // add our custom commands
    // aardvark.addCommand ("examine", MyFunctions.browseElement);
    // aardvark.addCommand ("global", MyFunctions.makeGlobal);
    }
  }
};

// load the aardvark code from karmatics.com
(function () {

})();
