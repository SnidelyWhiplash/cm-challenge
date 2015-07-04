# CM Code Challenge

This is a code-challenge app utilizing Backbone, Handlebars, RequireJS, and LESS
compilation via Grunt.

## Installation
The compiled version is committed, so you can simply [visit the Github Page for this repo](http://snidelywhiplash.github.io/cm-challenge).

Alternatively, you can clone this repo via:
```
$ git clone git@github.com:SnidelyWhiplash/cm-challenge.git
```
Next, `cd` into the directory and run:
```
$ npm install
```
Once node packages are installed, simply run:
```
$ grunt
```
Grunt will compile LESS and optimize CSS.

The app makes XHR requests, so it won't work via the `file:///` protocol. You'll
need to run it through a server to view it locally. The quickest route would be:
```
$ npm install -g http-server
$ http-server
```
The app should now be accessible via [http://localhost:8080](http://localhost:8080).

## Compatibility
Tested in latest versions of Chrome, Firefox, and Safari. I can get a VB set up
to test on IE as needed.