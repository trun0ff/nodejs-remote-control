## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:4000` with nodemon (port can be changed in `.env` file)

**Production**

`npm run start`

* App served @ `http://localhost:4000` without nodemon (port can be changed in `.env` file)

---

**All commands**

Command | Description
--- | ---
`npm run dev` | App served @ `http://localhost:4000` with nodemon
`npm run start` | App served @ `http://localhost:4000` without nodemon

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.

**Note2**: for checking websocket don't forget to specify correct port (could be found in `.env` located in project root)

**Hint**: to test drawing you can use paint or any similar drawing soft located on the same screen where the browser is, 
put the cursor on drawer window but don't focus on it, press corresponding keyboard button, 
and program will perform a click and draw a figure.