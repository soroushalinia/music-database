# Foobar

Simple MEVN Stack Music 

## Installation

Go to both 'music-database-api' and 'musicdb-app' directories and install packages
```bash
npm install
```

## Database

You Must run MongoDB at port 27017 and create Database with name 'music-database';
For authentication you need to set your username to DBUSERNAME and password to DBPASSWORD as enviroment variable.

## Running in development server

Music Database API (music-database-api)

```bash
cd music-database-api
npm run dev
```

Music Database Vue App (musicdb-app)

```bash
cd musicdb-app
npm run serve
```


## License
[MIT](https://choosealicense.com/licenses/mit/)