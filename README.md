# Custom Character Sheets

This repository is the home for both the backend and frontend of the website [Custom Character Sheets](https://customcharactersheetbuilder.herokuapp.com/). Built with the purpose of creating an easy to follow guide for building your own Dungeons & Dragons characters for use in the tabletop RPG, and allow for tracking of character progress throughout multiple campaigns. I was inspired to create this website because I am a new player to the game and found the current character building websites to be a little too complex and hard to understand.

## Usage
Click on the link in the above section to go to the website (On the unfortunate offchance that the link becomes broken see instructions below on how to run locally). When first using the application you will need to create a login for a new user and then use that information to login. The only functionality currently is saving characters to your account. These characters are very limited in that you can only give them names, races, and classes.

## Technologies
Backend built using Node and Express.
Database built using PostgresSQL and sequelize.
Frontend built using React

## Potential Bugs
- Broken image link often occurs on the edit character page.
- When testing on my phone the frontend could not connect to the backend. Tested on other networks via laptops and phones and everything ran normally.

## Future Functionality
The website is very minimal in terms of functionality currently. I intend to add all the basic features of character building in D&D such as abilities, equipment, spells, hit points and so on. In addition to full character building, I will add a leveling up function users can use to edit their characters and a dice rolling simulator for use in campaigns. There are plans to create different roles for new users such as a DM (Dungeon Master) role. If creating a DM account they would be able to invite other characters into a campaign and have limited control over editing those characters (could change their hit points, steal equipment, etc).

## How to run locally

If for whatever reason the link above is down and you wish to run this program locally, fork this repo and clone it into your own folder and follow these steps.

- First you will need to create a database in postgres named "dnd_character_sheet"

- You will then need to change the username and password in backend/config/config.json to match your postgres account.

- You will also need to create a .env file and add the following information.

```bash
touch .env
```
```
PORT=3001
PG_URI=postgresql://localhost:5432/dnd_character_sheet
SESSION_SECRET=oinwoiinoiw
```

- You will need to cd into the backend and run npm install. Then populate the new database with tables using sequelize.

```bash
cd backend
npm i
sequelize db:migrate
```

- Then install the packages for the frontend.

```bash
cd frontend
npm i
```

- After all this is done you will need to replace all instances of "https://customcharactersheetbuilder.herokuapp.com" with "http://localhost:3001". You can do this via a search and replace (note: do not change the instances in the README.md or package.json).

- Then you must open the backend in one terminal and run using nodemon.

```bash
nodemon index.js
```

- Finally, in a seperate terminal run the front end.

```bash
npm start
```
