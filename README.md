## Welcome to myCryptoBot

myChatbot is a cute chatbot with full client and server structure example with rich details explaining disruptive technologies. Using [Microsoft LUIS (Language Understandig Intelligence System)](https://www.luis.ai/home), IoT integration with [IBM Bluemix](https://www.ibm.com/cloud/info/fast-cloud-servers) and using API's to access [cryptocurrencies](https://coinmarketcap.com) and [fiat prices](https://apilayer.com). Also myChatbot is fully compatible with [Google Drive](https://about.google/intl/drive/) datasheets. You can include Google API to custom myChatbot messages and text. With [adaptive cards](https://adaptivecards.io) you can include amazing and cute dynamic forms and multimidia (audio/video)


### Features

- Lightweight
- Integration with MS Azure and Botframework
- Offline direct line for development (you don't need run it in Azure Cloud for run this examples and tests)
- Integration wit IBM Bluemix IoT to connect devices with myChatBot via IBM
- Multi language interface (Brazilian Portuguese, English, French, Italian and Spanish)
- Customizable JSON language support for new languages interface. If you want to contribute with a new language support [contact me](mailto:fabioegel@gmail.com)
- Custom Adaptive Cards to add multimedia and forms
- Customizable API to integrate new API's with myChatBot
- Criptocurrency API support example
- Weather forecast API example (in development)
- Compatible integration with Google drive

### Installing

myChatBot can run outside Azure Cloud via [Bridge](https://github.com/devfabiosilva/myCryptoBot/tree/master/bridge). This is an easy way to test and develop improvement without you have an MS Azure account. Easy to build before use Azure Cloud.

To run myChatBot in your computer you need:

- Install [nodejs](https://nodejs.org/en/) (ver v10.16 recommended)
- Configure client side (language interface, custom welcome message, ports) in [_index.js_]() file
- Configure server side (language culture, use IoT platform, set LUIS API) in [_api__config.js_]() file.
- Install dependencies modules
- Run myChatBot

#### Running bridge

```markdown
npm install
node bridge.js
```

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

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/devfabiosilva/myChatbot/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
