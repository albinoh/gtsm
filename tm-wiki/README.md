#TM wiki for Centaur

So there are two ticketmaster projects, 

- TMOL (TM-OLD :P) this is the old stuff that needs to be ported to the new CCP platform
- CCP (Consolidated consumer platform) this is new stuff that it is not to parity with the old stuff, by mid 2016 needs
to be there. Looks like the code is Java Spring (Backend) + React (Frontend)

##TMOL

We don't know anything about this yet

##CCP

We know that the repo (or part of it) is [here](https://git.tm.tmcs/tm/tmol-web-spring), ok so now go ahead and clone the
repo.


###Install dependencies

- Chrome extension plugin for CCP EDP (event display) flags [here](https://chrome.google.com/webstore/detail/tmol-feature-flags/nfjjegmekionnikpkammnkldkdmmonob)
    - more info [here](http://wiki.tmol.co/mediawiki/Feature_flags_Chrome_extension)

- Homebrew
```sh
$ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- Maven, make sure you follow the steps [here](http://wiki.tmol.co/mediawiki/New_hire_setup#Maven_configuration)

- Node.js v0.10.x, I used [this one](https://nodejs.org/download/release/v0.10.41/node-v0.10.41.pkg))

- NPM newest version, after installing node update NPM version with 
```sh
$sudo npm -g install npm@latest
```

- Grunt global
```sh
$sudo npm install grunt-cli -g
```

- Ruby, do not use MacOSX installed ruby, use this snippet to download and use your own
```sh
#lets use rbenv to allow easy ruby versioning swaps, lets use brew to do so
$brew install rbenv ruby-build
#Now lets add rbenv to bash so that it loads every time you open a terminal
$echo -e '\nif which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
$source ~/.bash_profile
#install the newest ruby version
$rbenv install 2.3.0
#set this version to be the global one
$rbenv global 2.3.0
#verify the version
$ruby -v
```

- scss-lint, once ruby is installed succesfully, install the scss-lint ruby gem, do
```sh
gem update --system && gem install scss-lint
```

###Build

if that succeeded go to the parent folder and run maven package with this:
```sh
tmol-web-spring$ mvn clean install
```

###Run the app

if there were no errors now lets run the app:
```sh
tmol-web-spring$ cd webapp
webapp$ mvn jetty:run -Plocal-int
```
The server should now be accessible at `http://localhost:9000/`. From here the most frequent page (and looks like the
only one being developed as of today) is the /event page, for [example](http://localhost:9000/event/3F004EAECFB7BA10) to get more event ids go to 
[this](https://contegixapp1.livenation.com/confluence/pages/viewpage.action?title=CCP+Events&spaceKey=JLP) page. Also if
the chrome plugin was installed you should see it on the right top corner  


### Specifying a port

To run the the web app from a specified port, use the following command:
```bash
$ mvn jetty:run -Dtmol.jetty.port=8686 -Plocal-dev
```

The server should now be accessible on port `8686`

## Automatic asset watchers

To have your jsx, js, and Sass assets automatically recompile, run this watcher on a separate terminal:
```bash
$ npm run watch
```
## See also

* [Wiki documentation](http://wiki.tmol.co/mediawiki/tmol)
