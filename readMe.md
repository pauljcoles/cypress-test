


## Installation

It is assumed that both nvm, nodejs and a suitable browser are installed. These instructions are for Windows using the default WSL Ubuntu installation, I miss my mac 🤷

Full installation and configuration options can be found on the cypress site: https://docs.cypress.io/app/get-started/install-cypress

* Install cypress:
  ```
  npm install cypress --save-dev
  ```

* Setting up:

```
npx cypress open
```

* If there is an error around dependencies enter

```
apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
```

With

```
sudo
```
if required

Then try
```
npx cypress open
```
and the Launchpad should appear. From here chose the tesing type e2e. Then accept the default configuration. Select the browser to be used. If only Electron is available make sure to install the browser you need before opening Cypress.







