# Discord Bot with Dashboard


## Requirements
1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. Node.js v14.0.0 or Newer
3. MySQL Database [Free MySQL Database](https://www.freesqldatabase.com/)
4. A LOT OF API Keys

## 💨 Run the projects

[![Run on Repl.it](https://repl.it/badge/github/SudhanPlayz/Discord-MusicBot)](https://repl.it/github/DarkThunder99/Bot-with-Dashboard)
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/DarkThunder99/Bot-with-Dashboard)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/DarkThunder99/Bot-with-Dashboard)

## 🚀 Getting Started

## 💻 Installation

To Install Packages needed for the Bot, Go to Console and Type 
```
npm install
```
or Run the `install.bat` File

## ⚙️ Configuration

⚠️ **Note: Never commit or share your Token or API Keys Publicly** ⚠️

### `.env` config table
| `.env` varriable | Description | Required |
|---|---|---|
| TOKEN | The bot token (Remember! The `TOKEN` is super secret) | :heavy_check_mark: |
| PREFIX | The default bot prefix (eg. `>>`) | :heavy_check_mark: |
| ID | Your Discord Bot ID | :heavy_check_mark: |
| [AMEAPI](https://api.amethyste.moe/) | Your Amethyste api token | :heavy_check_mark: |
| [BRAINID](https://brainshop.ai/) | Your Brainshop AI Brain ID | :heavy_check_mark: |
| MYSQL_DATABASE | Your MYSQL Database Name | :heavy_check_mark: |
| MYSQL_HOST | Your MYSQL Database Host | :heavy_check_mark: |
| MYSQL_USER | Your MYSQL Database Username | :heavy_check_mark: |
| MYSQL_PASSWORD | Your MYSQL Database Password | :heavy_check_mark: |
| [GENIUS](https://genius.com/api-clients) | Your genius API Key | :heavy_check_mark: |
| DOMAIN | Your website domain (eg `https://example.com`)`*` | :x:/:heavy_check_mark: |
| PORT| Your webiste port, (eg. `8008 `)`*`| :x:/:heavy_check_mark: |
| DASHBOARD | The Web-Dashboard config value. (eg. `true/false`, default value: `false`)`*` | :x: |
| SESSION_SECRET | The Bot Client Secret (Remember! The `SECRET` value is Super-Secret)`*` | :x:/:heavy_check_mark: |
| SECRET | The Bot Client Secret (Remember! The `SECRET` value is Super-Secret)`*` | :x:/:heavy_check_mark: |
| ANALYTICS | Google analytics tracking ID, used in Web-Dashboard | :x: |
| [RECAPTCHA_KEY](https://www.google.com/recaptcha/admin/create) | Google recaptcha v2 key`*` | :x:/:heavy_check_mark: |
| COOKIES | Your youtube cookies | :heavy_check_mark: |
| CONTACT_WEBHOOK_ID | Your contact form webhook ID | :heavy_check_mark: |
| CONTACT_WEBHOOK_TOKEN | Your contact form webhook token | :heavy_check_mark: |
| STATUS_WEBHOOK_ID | Your status webhook ID | :heavy_check_mark: |
| STATUS_WEBHOOK_TOKEN | Your status webhook token | :heavy_check_mark: |
> `*` = Required to run the web dashboard!

### Example `.env` file
 
[`.env.example`](https://github.com/DarkThunder99/Bot-with-Dashboard/blob/master/.env.example)

```
# Environment Config

# Required
TOKEN=YOUR_TOKEN_GOES_HERE
PREFIX=>>
ID=YOUR_BOT_ID
AMEAPI=YOUR_AMETHYSTE_API_TOKEN
MYSQL_DATABASE=YOUR_MYSQL_DATABASE_NAME
MYSQL_HOST=YOUR_MYSQL_HOST
MYSQL_PASSWORD=YOUR_MYSQL_USER_PASSWORD
MYSQL_USER=YOUR_MYSQL_DATABASE_USER
BRAINID=YOUR_BRAINSHOP_AI_BRAIN_ID
BRAINKEY=YOUR_BRAINSHOP_AI_BRAIN_KEY
GENIUS=YOUR_GENIUS_API_KEY
CONTACT_WEBHOOK_TOKEN=YOUR_CONTACT_FORM_WEBHOOK_TOKEN
CONTACT_WEBHOOK_ID=YOUR_CONTACT_FORM_WEBHOOK_ID
STATUS_WEBHOOK_TOKEN=YOUR_STATUS_WEBHOOK_TOKEN
STATUS_WEBHOOK_ID=YOUR_STATUS_WEBHOOK_ID
COOKIES=YOUR_YOUTUBE_COOKIES
RECAPTCHA_KEY=YOUR_RECAPTCHA_KEY

# Not required
DASHBOARD=[true/false]
DOMAIN=YOUR_WEBSITE_DOMAIN
PORT=YOUR_WEBSITE_PORT
SESSION_SECRET=YOUR_SESSION_SECRET_(RANDOM_WORDS)
SECRET=YOUR_BOT_CLIENT_SECRET
ANALYTICS=YOUR_GOOGLE_TRACKING_ID
# Note: >> is the default prefix, you can change it later.
```

## ☄️ Starting the Bot


### Dashboard hosting

If you are Using Replit then Run This Command in Shell to Upgrade your Node Version to Node 14
```
npm init -y && npm i --save-dev node@14 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

1. In `.env` file set the `DASHBOARD` config to `true` and assign the `PORT` eg. `8080`. ([See example `.env` file](#example-env-file))
2. Fill dashboard config in (`config.js` and `.env`)
3. Add the redirect uri here: https://discord.com/developers/applications/YOUR-BOT-ID/oauth2
    ```
       https://your-domain.com
       https://your-domain.com/callback
       https://your-domain.com/dashboard
       https://your-domain.com/login
    ```
4. Run `npm run dashboard` in your terminal
5. If everyting is ok go to your dashboard in browser (eg. to `localhost:8000`)
> Note: See the example [`.env` file below](#example-env-file)!

##### Additional info
> If you are hosting the site locally it is best to generate certificates for it. If you have them:
> 1. Change `certs: false` & `localhost: false` values in `config.js` to true
> 2. Place the `server.cert` & `server.key` certs in `/dashboard/certs/` directory


Open Console and Type
```
npm start
```
or You can Run start.bat File to Start the Bot

## 📝 Features & Commands

### Features: 
```
🔮 General Commands
```
```
🤣 Fun Commands
```
```
🌟 Image Processing Commands
```
```
📜 Moderation Commands
```
```
🎉 Owner Commands
```
```
⚙️ Utility Commands
```

1. [Fork the repository](https://github.com/DarkThunder99/Bot-with-Dashboard/fork)
2. Clone your fork: `git clone https://github.com/DarkThunder99/Bot-with-Dashboard.git`

## 📝 Credits
This Bot is Edited Version on [Majo Bot](https://github.com/IgorKowalczyk/majobot)
