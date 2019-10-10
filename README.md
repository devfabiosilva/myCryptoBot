## Welcome to myCryptoBot

myCryptoBot is a cute chatbot with full client and server structure example with rich details explaining disruptive technologies. Using [Microsoft LUIS (Language Understandig Intelligence System)](https://www.luis.ai/home), IoT integration with [IBM Bluemix](https://www.ibm.com/cloud/info/fast-cloud-servers) and using API's to access [cryptocurrencies](https://coinmarketcap.com) and [fiat prices](https://apilayer.com). Also myCryptoBot is fully compatible with [Google Drive](https://about.google/intl/drive/) datasheets. You can include Google API to custom myCryptoBot messages and text. With [Adaptive Cards](https://adaptivecards.io) you can include amazing and cute dynamic forms and multimidia (audio/video)


### Features

- Lightweight
- Integration with MS Azure and Botframework
- Offline direct line for development (you don't need run it in Azure Cloud for run this examples and tests)
- Integration wit IBM Bluemix IoT to connect devices (Arduino, Raspberry Pi, etc) with myCryptoBot via IBM Cloud
- Multi language interface (Brazilian Portuguese, English, French, Italian and Spanish)
- Customizable JSON language support for new languages interface. If you want to contribute with a new language support [contact me](mailto:fabioegel@gmail.com)
- Custom Adaptive Cards to add multimedia and cute forms
- Customizable API to integrate new API's with myCryptoBot
- Criptocurrency API support example
- Weather forecast API example (in development)
- Compatible integration with Google drive

### Installing

myCryptoBot can run outside Azure Cloud via [Bridge](https://github.com/devfabiosilva/myCryptoBot/tree/master/bridge). This is an easy way to test and develop improvement without you have an MS Azure account. That is an easy way to deploy before upload to final production to Azure Cloud.

To run myCryptoBot in your computer you need:

- Create a path <YOUR_PATH> and clone this repository
```markdown
cd <YOUR_PATH>
git clone https://github.com/devfabiosilva/myCryptoBot.git
```
- Install [nodejs](https://nodejs.org/en/) (v10.16 recommended)
- Configure client side (language interface, custom welcome message, ports) in [index.js]() file
- Configure server side (language culture, IoT platform, set LUIS API) in [api_config.js]() file.
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

myCryptoBot server has two Artificial Intelligence services (US English culture) and (Brazilian Portuguese culture). You need to select one of them or even add a new culure language if you want. You must train your chatbot to learn your language culture before you run server app. In [luis.ai_training_cultures](https://github.com/devfabiosilva/myCryptoBot/tree/master/luis.ai_training_cultures) directory there are two training examples [myChatBotTrainingBrazilianPortuguese.json](https://github.com/devfabiosilva/myCryptoBot/blob/master/luis.ai_training_cultures/myChatBotTrainingBrazilianPortuguese.json) and [myChatBotTrainingEnglish.json](https://github.com/devfabiosilva/myCryptoBot/blob/master/luis.ai_training_cultures/myChatBotTrainingEnglish.json) to upload to [LUIS](https://www.luis.ai/home). After trained chatbot just add you LUIS API to [MODIFY api_config.js]()

```markdown
cd <YOUR_PATH>/myCryptoBot/chatbot-server/
npm install
node app.js
```

#### Running client app

myCryptoBot webchat is a cute and lightweight app built in [ReactJS](https://reactjs.org) a robust JavaScript library for building user interfaces. You can simply modify CSS page styles in styles directory or Adaptive Cards and webchat styles in [index.css]().

To additional change inteface (language support, welcome message and conection to local server or Azure Cloud) open [README](webchat-client/README.md) for details.

To run myCryptoBot webchat:

```markdown
cd <YOUR_PATH>/myCryptoBot/webchat-client/
npm install
npm start
```

### myCryptoBot full framework

Below is an framework example to implement into your project

<p align="center">
  <img src="/docs/images/screenshot16.png">
</p>
<!--![Image](/docs/images/screenshot16.png) -->
Fiat price, cryptocurrencies, Adaptive Cards and IoT integration are already implemented in this sample example. Just run it to test.

### Screenshots

<p align="center">
  <img src="/docs/images/screenshot17.png">
</p>

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/devfabiosilva/myCryptoBot/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

