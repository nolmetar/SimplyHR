# Simply Hire & Recruit

## Table of content
- [Main technologies used](#main-technologies-used)
- [Prerequisites](#prerequisites)
- [Deployment steps](#deployment-steps)
    * [Common to both parts](#common-to-both-parts)
    * [Front-end setup](#front-end-setup)
    * [Back-end setup](#back-end-setup)
- [Features](#features)
- [Known bugs](#known-bugs)

## Main technologies used

- [Nodejs](https://nodejs.org/)
- [Vue.js](https://vuejs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Bootstrap](https://getbootstrap.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) 

## Prerequisites

This project has 2 distinct parts: *shr_frontend* and *shr_backend*

**The two parts must run at the same time to work**

As this project runs on Nodejs, libraries and versioning can be found in the *package.json*

### [shr_frontend's package.json](shr_frontend/package.json)

### [shr_backend's package.json](shr_backend/package.json)

## Deployment steps

### Common to both parts

1. **Make sure you have NodeJS installed on your machine (link above)** 

2. Clone the repository
```bash
git clone https://git.cg.helmo.be/e200819/SimplyHR.git
```

3. Get in the project folder
```bash
cd SimplyHR
```

### Front-end setup

1. Get in the front-end folder
```bash
cd shr_frontend
```

2. Install the required libraries
```bash
npm install
```

3. Install yarn (used as package manager)
```bash
npm install yarn
```

4. Initialize yarn
```bash
yarn install
```

5. To run the app in development, use:
```bash
yarn serve
```

6. To deploy a "ready-to-use" production on a server, use:
```bash
yarn build
```

### Back-end setup

> To return to the root project folder, use *cd ..*

1. Get in the back-end folder
```bash
cd shr_backend
```

2. Install the required libraries
```bash
npm install
```

3. To run the server, use:
```bash
npm start
```

## Features

**Front-end**

Pages, routes, forms, connection to back-end, local data storage

**Back-end**

API access, routes, ~~cloud storage~~

## Known bugs

**Front-end**
- Main "bug": front-end not finished
- Infos aren't verified in forms
- Infos aren't stored on cloud (cloud error)
- Plannings don't store infos

**Back-end** : 
- Main "bug": back-end not finished
- Cloud always returns status code 200 = data doesn't store
- Doesn't return status code 418 ["I'm a teapot"](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)

Made with :heart: by Antoine, Jonathan and Meriana