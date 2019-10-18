# myCryptoBot server

This is a main part of myCryptoBot system framework. It integrates LUIS, API's, cloud services, IoT services and client. And this client must be run locally or inside [Azure Cloud](https://azure.microsoft.com/en-us/).

This server can also run without MS Azure Acount using [Bridge](/bridge/). It's an excelent alternative for testing and development option if you do not have an MS Azure account.

## 1. Before you run _app.js_

You need to configure and set some API's before you run _app.js_

## 2. Open _api_config.js_

Open [<YOUR PATH>/myCryptoBot/chatbot-server/api_config.js](/chatbot-server/api_config.js) and set:

### Setting language culture

```javascript
const USE_LANG=SERVER_LANG_ENG_US; // for US ENGLISH or
const USE_LANG=SERVER_LANG_PT_BR; //for BRAZILIAN PORTUGUESE.
```

### Setting LUIS IA endpoint and training custom culture

Select your culture (<YOUR_PATH>/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingBrazilianPortuguese.json) for Brazilian Portuguese culture or (<YOUR_PATH>/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingEnglish.json) for US English culture to upload to [luis.ai](https://www.luis.ai)

<p align="center">
  <img src="/docs/images/image004.png">
</p>

```javascript
//********** BEGIN ARTIFICIAL INTELLIGENCE API (LUIS.AI) **********//

// Configuration for BRAZILIAN PORTUGUESE culture endpoint
const luisApplication_pt_br = {
    applicationId: '<YOUR PORTUGUESE BR APP ID>',// Your Brazilian Portuguese culture AppId. Example: 'f220162c-a4f2-475c-804d-4d39b0e1c3ae'
    endpointKey: '<YOUR PORTUGUESE BR SUBSCRIPTION KEY>',//Your Brazilian Portuguese culture subscriptionKey. Example: '21a2efcb7cdfec03f65c33811b682581'
    azureRegion: '-360'//Your Brazilian Portuguese culture region. Example: '-360'
}

// Configuration for ENGLISH CULTURE culture endpoint
const luisApplication_en_us = {
    applicationId: '<YOUR US ENGLISH APP ID>',//Your US English culture appId. Example: 'ad1080a3-3cfc-4951-e132-48a3fcccc912'
    endpointKey: '<YOUR US ENGLISH SUBSCRIPTION KEY>',//Your US English culture subscriptionKey. Example: '31b0efcb7cdf4c03a65c33800d684582'
    azureRegion: '-360'//Your US English culture region. Example: '-360'
}

...

```

More details how to create account and setting endpoint [here](/luis.ai_training_cultures/README.md)

### Cryptocurrency service API

This example uses [Coinmarketcap](https://coinmarketcap.com) service API as endpoint to access [Bitcoin](https://bitcoin.org/en/), [Ethereum](https://www.ethereum.org), [Litecoin](https://litecoin.org), [Monero](https://web.getmonero.org), [IOTA](https://www.iota.org) and [Nano](https://nano.org/en) prices. You don't need to change **defaut** configuration

**DEFAULT:**

```javascript
//********** BEGIN CRIPTOCURRENCY API CONFIG **********//

const COINMARKETCAP_API="https://api.coinmarketcap.com/v1/ticker/"; // You don't need change this

//********** END CRIPTOCURRENCY API CONFIG **********//
```

### Fiat service API

This example uses [apilayer](http://www.apilayer.net/) services API to get Dollar and Euro fiat prices. You don't need to change **default** configuration

**DEFAULT:**

```javascript
//********** BEGIN FIAT CURRENCY API CONFIG **********//

const APILAYER_NET_API="http://www.apilayer.net/api/live?access_key=9d58753a7da5cc911f6d8f61410ca0cb&format=1"; // You don't need to change this

//********** END FIAT CURRENCY API CONFIG **********//
```

### Set IBM Bluemix IoT (Optional)

This example is compatible with IBM Bluemix cloud to integrate IoT service in myCryptoBot. You can access IoT devices through IBM Bluemix.

This options is **DISABLED** by default

```javascript
const F_USE_IBM_IOT=false; // Default. IoT service disabled
```

If you want to integrate this service, configure your IoT device and create an account in [IBM Bluemix IoT platform](https://www.ibm.com/cloud/internet-of-things) and get your API and set:

```javascript
const F_USE_IBM_IOT=true;
```
and set IBM Bluemix IoT API:

```javascript
//********** BEGIN IBM IoT PLATFORM **********//

// By default IBM Bluemix is disabled. If you want to enable it, set F_USE_IBM_IOT=true and configure your IoT device to interact with myCryptoBot  Artificial Intelligence service.

var ibmAppClientConfig = {
  org: '<YOUR IOT_ORG>', // Your IBM IoT appOrg. Example: org: 'spo6lv'
  id: '<YOUR IOT APP ID>', // Your IBM IoT appId. Example: id: 'myChatbotIoTApp'
  "domain": "internetofthings.ibmcloud.com", // IBM IoT domain. Example: "domain": "internetofthings.ibmcloud.com"
  "auth-key": 'YOUR AUTH_KEY', // IBM IOT APP AUTH-KEY: Example: "auth-key": 'a-spo6lv-mjsl7q0huh'
  "auth-token": '<YOUR AUTH_TOKEN>' // IBM IOT APP AUTH-TOKEN: Example: "auth-token": 's_-fcasM2E4hMWh2UO'
};

const F_DEVICE_TYPE = "MyDeviceType";
const F_DEVICE_ID = "MyDeviceId";
const F_DATA = "data";
const F_DATA_TYPE = "json";
const F_DEBUG = true; // Debug mode default: true
const F_TIMEOUT = 10; //Default in seconds
const F_USE_IBM_IOT=true;

//********** END IBM IoT PLATFORM **********//
```

## Run myCryptoBot service

```markdown
cd <YOUR_PATH>/myCryptoBot/chatbot-server/
npm install
node app.js
```

## License

This project is under MIT license see [LICENSE](/LICENSE)

## Contact

You can contact me at [fabioegel@gmail.com](mailto:fabioegel@gmail.com) or [fabioegel@protonmail.com](mailto:fabioegel@protonmail.com)

