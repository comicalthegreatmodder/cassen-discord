
# cassen-discord

It's a library for people who are dumb like me, but want to create a discord bot.

I'll teach you how in this 6-lines-of-code tutorial.

FIRST create a folder somehwere like desktop, or an external drive not being used.
## Authors

- [@comical](https://github.com/comicalthegreatmodder)


## Installation

Install the library with npm. And only npm, cause' I can't figure out yarn.

```bash
  // go into the folder which you created for the bot first
  cd your-project-folder
  // then install using npm
  npm i cassen-discord
```
    
## tutorial (kinda)

First, require the module in a variable. For all of you small brains, here's how.
```javascript
//1
const cassen = require('cassen-discord');
```

Second, set the prefix. The prefix is the thing you use to call the bot. (eg: in !play, ! is the prefix)
```javascript
//1
const cassen = require('cassen-discord');
//2
cassen.setPrefix('in the quotations, write your prefix')
```

Third, set the token. I show you how to get a token in the 'prerequisites' section.
```javascript
//1
const cassen = require('cassen-discord');
//2
cassen.setPrefix('in the quotations, write your prefix')
//3
cassen.setToken('your-token-here')
```

Fourth (this is unnecessary, but recommended), when the bot is ready, you can make a little message to log in the console to let you you that the bot is working.
```javascript
//1
const cassen = require('cassen-discord');
//2
cassen.setPrefix('in the quotations, write your prefix')
//3
cassen.setToken('your-token-here')
//4
cassen.check('your-message-here!')
```

Fifth, the part we've been waiting for. THE COMMANDS!!!!!! use the commandCreateBasic() function to do this.
```javascript
//1
const cassen = require('cassen-discord');
//2
cassen.setPrefix('in the quotations, write your prefix')
//3
cassen.setToken('your-token-here')
//4
cassen.check('your-message-here!')
//5
cassen.commandCreateBasic('what you need to say for the bot to activate','what the bot should say!')
```

Last, but DEFINITELY not least (no seriously, this is the most important part. you have to do this.) logging in to the bot. use the cassen.login() function to do this!
```javascript
//1
const cassen = require('cassen-discord');
//2
cassen.setPrefix('in the quotations, write your prefix')
//3
cassen.setToken('your-token-here')
//4
cassen.check('your-message-here!')
//5
cassen.commandCreateBasic('what you need to say for the bot to activate','what the bot should say!')
//6
cassen.login()
```
Run the bot by doing
```bash
node .
```
AND YOUR SET!
## Prerequisites

- [Node.js](https://nodejs.org/en) obviously.
- Discord app with a bot token(2).
- Discord bot invited to the server(3).
- a good idea (which I don't have)
That's it!

2 - To get a bot token, to [Discord Developers Portal](https://discord.dev) and click on applications. Create one and set the name. Then head over to the bot section on the side. Add a bot, and click the 'reveal token' thing. Copy it into the cassen.setToken() in the parenthesis wrapped in quotes when the time comes.

3 - Head back to 'general information' and copy the application id. Then go to [Discord Permissions Calculator](https://discordapi.com/permissions.html#8) and paste the application id where it says 'client id'. Then click on the link at the bottom and invite it to whatever server you want!"# cassen-discord" 
