# Culture language training

You must train your cognitive service before running myCryptoBot
There are two examples (Brazilian Portuguese and US English). Choose one to install in your local server or in MS Azure Cloud.

## Creating LUIS (Language Understanding Intelligence System) account

1. Go to [LUIS.AI](https://www.luis.ai/home)

2. Click in [login/signup](https://www.luis.ai/home)

3. If LUIS platform show this message and you are NOT using MS Azure service click in **MIGRATE LATER**

<p align="center">
  <img src="/docs/images/image001.png">
</p>



4. In **My Apps** click in _Import new app_

<p align="center">
  <img src="/docs/images/image002.png">
</p>



5. Click in **Choose app file (JSON format) ...** to upload a trained culture

<p align="center">
  <img src="/docs/images/image003.png">
</p>



6. Select your culture (<YOUR_PATH>/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingBrazilianPortuguese.json) for Brazilian Portuguese culture or (<YOUR_PATH>/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingEnglish.json) for US English culture to upload to luis.ai

<p align="center">
  <img src="/docs/images/image004.png">
</p>



7. Select a name to your culture app and click **Done**

8. Click in **Train**

<p align="center">
  <img src="/docs/images/image006.png">
</p>



9. Goto **Manage->Azure Resources** and click in _Change query parameters_

10. Select _Staging_ in **Publish slot** and select your local time zone in **Time zone** and click **Done**

<p align="center">
  <img src="/docs/images/image008.png">
</p>



11. Click in **Publish**

12. Get your primakey API key, subscription key and Timezone offset. Example:

<p align="center">
  <img src="/docs/images/image007.png">
</p>


EXAMPLE:

In _https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ad1080a3-3cfc-4951-e132-48a3fcccc912?staging=true&verbose=true&timezoneOffset=-360&subscription-key=31b0efcb7cdf4c03a65c33800d684582&q=_


- Your **applicationId** is: _ad1080a3-3cfc-4951-e132-48a3fcccc912_

- Your **endpointKey** is: _31b0efcb7cdf4c03a65c33800d684582_

- Your **azureRegion** is _-360_



13. Open [<YOUR PATH>/myCryptoBot/chatbot-server/api_config.js](/chatbot-server/api_config.js) and set:

```javascript
const USE_LANG=SERVER_LANG_ENG_US; // for US ENGLISH or
const USE_LANG=SERVER_LANG_PT_BR; //for BRAZILIAN PORTUGUESE.
```


and set same LUIS API endpoints (**applicationId**, **endpointKey** and **azureRegion**) to myCryptoBot application.

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



14. Run your myCryptoBot App in your localhost or MS Azure Cloud

```markdown
cd <YOUR_PATH>/myCryptoBot/chatbot-server/
npm install
node app.js
```



## Creating new IA examples

You can help me to improvement and training of languages cultures or even add a new one.
If you want to help me contact me at [fabioegel@gmail.com](mailto:fabioegel@gmail.com) or [fabioegel@protonmail.com](mailto:fabioegel@protonmail.com)


