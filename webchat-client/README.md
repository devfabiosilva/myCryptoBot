## myCryptoBot webchat client

This is a client side of myCryptoBot webchat. This webchat is fully configurable with multi language support with (Brazilian Portuguese, English, French Italian and Spanish). You can custom your own language interface. It's developed in [ReactJS](https://reactjs.org) and compatible with most web browsers.

### Before you start:

You need configure language and comunication interface before run it.

Open [index.js](webchat-client/src/index.js) file to set configurations below.

#### Check user LANGUAGE:

Set LOCAL=LANG.load_language(<YOUR_INTERFACE_LANGUAGE>) where:

* **LANG.PT_BR** for Brazilian Portuguese
* **LANG.EN_US** for US English
* **LANG.FR_FR** for French
* **LANG.IT_IT** for Italian
* **LANG.ES_ES** for Spanish

**DEFAULT:**
```markdown
LOCAL=LANG.load_language(LANG.EN_US); _// US English_
```

- Set SHOW_CLIENT_CUSTOM_MSG=true if you want show a custom message. Default value SHOW_CLIENT_CUSTOM_MSG=false
#### Communication to server:

There are three modes:

##### When USE_LOCAL_SERVER=true

* It will use direct offline mode (**DEFAULT** development mode and example). You must run [bridge](/bridge/bridge.js) to link myCryptoBot to client webchat without MS Azure Cloud account.

##### When USE_LOCAL_SERVER=false

If you already have an MS Azure Cloud Accout:

* It will use [MS Azure Botframework](https://azure.microsoft.com/en-us/services/bot-service/) TOKEN or SECRET_KEY (Remember: **SECRET KEY** is not recommended for security reasons. You should keep it save. But this option is available for developement mode)

You must install myCryptoBot in [MS Azure Cloud](https://azure.microsoft.com/en-us/)

##### Communication protocol mode:

* POST when using directline offline (default for development and example. It needs bridge.js appplication to work)

* Websocket when using MS Azure Botframework

