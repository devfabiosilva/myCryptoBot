## myCryptoBot webchat client

This is a client side of myCryptoBot webchat. This webchat is fully configurable with multi language support with (Brazilian Portuguese, English, French Italian and Spanish). You can custom your own language interface. It's developed in [ReactJS](https://reactjs.org) and compatible with most web browsers.

### Before you start:

You need configure language and comunication interface before run it.

Open [index.js](webchat-client/src/index.js) file to set configurations below.

## Check user LANGUAGE:

Set LOCAL=LANG.load_language(<YOUR_INTERFACE_LANGUAGE>) where:

* LANG.PT_BR for Brazilian Portuguese
* LANG.EN_US for US English
* LANG.FR_FR for French
* LANG.IT_IT for Italian
* LANG.ES_ES for Spanish

**DEFAULT:**
```markdown
LOCAL=LANG.load_language(LANG.EN_US); // US English
```
### Custom message

- Set SHOW_CLIENT_CUSTOM_MSG=true if you want show a custom message. **Default** value SHOW_CLIENT_CUSTOM_MSG=false

### Communication to server:

There are three modes:

#### 1- When USE_LOCAL_SERVER=true

* It will use direct offline mode (**DEFAULT** development mode and example). You must run [bridge](/bridge) to link myCryptoBot to client webchat without MS Azure Cloud account.

#### 2- When USE_LOCAL_SERVER=false

If you already have an MS Azure Cloud Accout:

* It will use [MS Azure Botframework](https://azure.microsoft.com/en-us/services/bot-service/) TOKEN or SECRET_KEY (Remember: **SECRET KEY** is not recommended for security reasons. You should keep it save. But this option is available for developement mode)

You must install myCryptoBot in [MS Azure Cloud](https://azure.microsoft.com/en-us/)

#### 3- Communication protocol mode:

* POST when using directline offline (default for development and example. It needs bridge.js appplication to work)

* Websocket when using MS Azure Botframework

### Running webchat app client for myCryptoBot

```markdown
cd <YOUR_PATH>/myCryptoBot/webchat-client/
npm install
npm start
```

### License

This project is under MIT license see [LICENSE](/LICENSE)

### Contact

You can contact me at [fabioegel@gmail.com](mailto:fabioegel@gmail.com) or [fabioegel@protonmail.com](mailto:fabioegel@protonmail.com)

