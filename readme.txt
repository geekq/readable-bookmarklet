Based on on the [Aardvark browser extension](http://karmatics.com/aardvark/)

## Usage

Clone locally, e.g. in the `/var/www/readable` folder and make available over http.

Then create a bookmark and cut and paste the following as the "address":

javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://localhost/readable/bookmarklet.js')

