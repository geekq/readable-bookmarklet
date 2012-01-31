How to extend Aardvark

First, save the file bookmarklet.js to your own machine (if you are
running a web server) or your web host, and make sure it is in a
directory where it can be seen as a web ("http://") file. You may name
it anything you please. Then create a bookmark and cut and paste the
following as the "address":

javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://localhost/aardvark/bookmarklet.js')

