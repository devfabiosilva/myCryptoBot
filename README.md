# Welcome to myCryptoBot

<p align="center">
  <img src="/docs/images/screenshot22.png">
</p>

myCryptoBot is a cute chatbot with full client and server structure example with rich details explaining disruptive technologies. Using [Microsoft LUIS (Language Understandig)](https://www.luis.ai/home), IoT integration with [IBM Bluemix](https://www.ibm.com/cloud/info/fast-cloud-servers) and using API's to access [cryptocurrencies](https://coinmarketcap.com) and [fiat prices](https://apilayer.com). Also myCryptoBot is fully compatible with [Google Drive](https://about.google/intl/drive/) datasheets. You can include Google API to custom myCryptoBot messages and text. With [Adaptive Cards](https://adaptivecards.io) you can include amazing and cute dynamic forms and multimidia (audio/video)

### Features

- Lightweight
- Integration with MS Azure and Botframework
- Offline direct line for development (you don't need run it in Azure Cloud for run this examples and tests)
- Integration wit IBM Bluemix IoT to connect devices (Arduino, Raspberry Pi, etc) with myCryptoBot via IBM Cloud
- Multi language interface webchat (Brazilian Portuguese, English, French, Italian and Spanish)
- Customizable JSON language support for new languages interface. If you want to contribute with a new language support [contact me](mailto:fabioegel@gmail.com)
- Custom Adaptive Cards to add multimedia and cute forms
- Customizable API to integrate new API's with myCryptoBot
- Criptocurrency API support example
- Weather forecast API example (in development)
- Compatible integration with Google drive

### Who is myCryptoBot?

myCryptoBot is a cute Bot that uses machine learning-based service to aggregate disruptive technologies (cryptocurrencies, Industry 4.0, IoT, cloud services) in one application.

### What myCryptoBot is able to do?

Now myCryptoBot is able to interact with humans in two languages (Brazilian Portuguese) and (US English) and make some interactions like greetings, find fiat quotation (Dollar and Euro prices), find cryptocurrencies (Bitcoin, Ethereum, Litecoin, Monero, IOTA and Nano) prices, integrate cloud services (Azure Cloud, IBM Cloud, cryptocurrencies API and fiat API). Also it's can do many more like: integration with weather forecast API (in development), Google Cloud and AWS services. Also myCryptoBot is interested in IoT technologies. He is able to interact with your devices (Arduino, Raspberry PI and other) through IBM Bluemix cloud and turn on or turn off your bedroom lamp. Adaptive Cards is used in myCryptoBot to create forms and interact with humans with audio/video stream with interactive text/image buttons.

### Installing

myCryptoBot can run outside Azure Cloud via [Bridge](/bridge/). This is an easy way to test and develop improvement without you have an MS Azure account. That is an easy way to deploy before upload to final production to Azure Cloud.

To run myCryptoBot in your computer you need:

- Create a path <YOUR_PATH> and clone this repository
```markdown
cd <YOUR_PATH>
git clone https://github.com/devfabiosilva/myCryptoBot.git
```
- Install [nodejs](https://nodejs.org/en/) (v10.16.3 recommended)
- Configure client side (language interface, custom welcome message, ports) in [index.js](webchat-client/src/index.js) file
- Configure server side (language culture, IoT platform, set LUIS API) in [api_config.js](chatbot-server/api_config.js) file.
- Install dependencies modules in client, bridge and server side
- Run myCryptoBot bridge app
- Run myCryptoBot server app
- Run myCryptoBot client app

#### Running bridge

```markdown
cd <YOUR_PATH>/myCryptoBot/bridge/
npm install
node bridge.js
```
Default port to listen: localhost:3000

#### Running server app

myCryptoBot server has two machine learning-based services (US English culture) and (Brazilian Portuguese culture). You need to select one of them or even add a new culure language if you want. You must train your chatbot to learn your language culture before you run server app. In [luis.ai_training_cultures](/luis.ai_training_cultures) directory there are two training examples [myChatBotTrainingBrazilianPortuguese.json](/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingBrazilianPortuguese.json) (for Brazilian Portuguese) and [myChatBotTrainingEnglish.json](/luis.ai_training_cultures/myChatBotTrainingEnglish.json) for (US English) to upload to [LUIS](https://www.luis.ai/home) cognitive service platform. After trained chatbot just add you LUIS API to [api_config.js](/chatbot-server/api_config.js)

```markdown
cd <YOUR_PATH>/myCryptoBot/chatbot-server/
npm install
node app.js
```

#### Running client app

myCryptoBot webchat is a cute and lightweight app built in [ReactJS](https://reactjs.org) a robust JavaScript library for building user interfaces. You can simply modify CSS page styles in [webchat.css](/webchat-client/public/styles/webchat.css) directory or Adaptive Cards and webchat styles in [index.css](/webchat-client/src/index.css).

To additional change inteface (language support, welcome message and conection to local server or Azure Cloud) open [README](/webchat-client/README.md) for details.

To run myCryptoBot webchat:

```markdown
cd <YOUR_PATH>/myCryptoBot/webchat-client/
npm install
npm start
```

### myCryptoBot full framework

Image below is a simple framework example to implement into your project.

<p align="center">
  <img src="/docs/images/screenshot16.png">
</p>

Fiat price, cryptocurrencies, Adaptive Cards and IBM IoT integration are already implemented in this example sample. Just download and run myCryptoBot.

### Screenshots

<p align="center">
  <img src="/docs/images/screenshot17.png">
</p>

<p align="center">
  <img src="/docs/images/screenshot18.png">
</p>

### IoT security issues using IBM Cloud App Management

A vulnerability in Node.js affects IBM Cloud App Management. Detais [here](https://nodejs.org/en/blog/vulnerability/november-2018-security-releases/) and [here](https://www.ibm.com/support/pages/security-bulletin-vulnerability-nodejs-affects-ibm-cloud-app-management-v2018)

There is a vulnerability in axios (dependecy of ibmiotf)

#### Brief description of the problem
Node.js and all implementation of HTTP/2 have been found a vulnerable (DoS) Denial of Service attack.

That means stablishing an HTTP or HTTPS connection in keep-alive mode, a remote attacker could exploit this vulnerability to consume all available resources. But **an attacker can NOT modify or leak information**. Rather this vulnerability allows a small number of malicious sessions to prevent connection participants from doing additional work exhausting resource causing crash.

Netflix discovered resource exhaustion vectors affecting HTTP/2 third-party implementations. Additional information can be found [here](https://github.com/Netflix/security-bulletins/blob/master/advisories/third-party/2019-002.md)

#### Mitigation

##### Enable/Disable IBM IoT service

IBM IoT service is disable by default to prevent DoS attack in myCryptoBot. If you want to enable it, modify [api_config.js](/chatbot-server/api_config.js) setting F_USE_IBM_IOT=true

If you disable IBM IoT service (F_USE_IBM_IOT=false) you will not able to control your devices via LUIS.AI API.

##### Install the latest version of Node.js

In 2019-08-15 Node.js made a notable changes security releases. Update your [Node.js](https://nodejs.org/en/) to latest version.

##### Developing an independent library to myCryptoBot

I am in a effort to develop a library that are independent of axios and ibmiotf framework avoiding implementation of HTTP/2 allowing normal connection to IBM Cloud platform to allow access IoT devices using machine learning-based service.

### Contribution

Any help is welcome. And you can:

- Notify bug and security issues
- Improve code performance
- Add more languages to myCryptoBot interface
- Make revisions of language translations
- Make a small donation to this project

### Donations

You can donate with any amount of money:

Coin | Wallet
---- | ------
Bitcoin:   | 1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5
Nano:      | nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb
Litecoin:  | LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f
Dogecoin:  | DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau

### License

This project is under MIT license see [LICENSE](/LICENSE)

### Contact

You can contact me at [fabioegel@gmail.com](mailto:fabioegel@gmail.com) or [fabioegel@protonmail.com](mailto:fabioegel@protonmail.com)

