Based on on the [Aardvark browser extension](http://karmatics.com/aardvark/)

## UPDATE 2015

The great Aardvark browser extension has been revived as HackTheWeb
https://addons.mozilla.org/en-US/firefox/addon/hack-the-web/ Works with
the current Firefox version as of August 2015.

## Usage

Clone locally, e.g. in the `/var/www/readable` folder and make available over http.

Then create a bookmark and cut and paste the following as the "address":

javascript:document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src','http://localhost/readable/bookmarklet.js')

Note: this does not work, if the site explicitely sets
`Content-Security-Policy` http header like github.com does.

To work around this we can concatenate aardvark*.js into a single file
and make it available via dotjs.
