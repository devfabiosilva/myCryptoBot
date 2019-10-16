## Culture language training

You must train your cognitive service before running myChatbot.
There are two examples (Brazilian Portuguese and US English). Choose one to install in your local server or in MS Azure Cloud.

### Creating LUIS (Language Understanding Intelligence System) account

1. Go to [LUIS.AI](https://www.luis.ai/home)

2. Click in [login/signup](https://www.luis.ai/home)

3. If LUIS platform show this message and you are NOT using MS Azure service click in **MIGRATE LATER**

4. In **My Apps** click in _Import new app_

5. Click in **Choose app file (JSON format) ...** to upload a trained culture

6. Select your culture (<YOUR PATH>/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingBrazilianPortuguese.json) for Brazilian Portuguese culture or (<YOUR PATH>/myCryptoBot/luis.ai_training_cultures/myChatBotTrainingEnglish.json) for US English culture

7. Select a name to your culture app and click **Done**

8. Click in **Train**

9. Goto **Manage->Azure Resources** and click in _Change query parameters_

10. Select _Staging_ in **Publish slot** and select your local time zone in **Time zone** and click **Done**

11. Click in **Publish**

12. Get your primakey API key, subscription key and Timezone offset. Example:

```markdown
In _https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ad1080a3-3cfc-4951-e132-48a3fcccc912?staging=true&verbose=true&timezoneOffset=-360&subscription-key=31b0efcb7cdf4c03a65c33800d684582&q=_ link:

your **applicationId** is: _ad1080a3-3cfc-4951-e132-48a3fcccc912_
your **endpointKey** is: _31b0efcb7cdf4c03a65c33800d684582_
your **azureRegion** is _-360_

```

13. Open [<YOUR PATH>/myCryptoBot/chatbot-server/api_config.js](/myCryptoBot/chatbot-server/api_config.js) and set:

```javascript
const USE_LANG=SERVER_LANG_ENG_US; // for US ENGLISH or
const USE_LANG=SERVER_LANG_PT_BR; //for BRAZILIAN PORTUGUESE.
```

and set same LUIS API endpoints (**applicationId**, **endpointKey** and **azureRegion**)

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

### Support or Contact

Having trouble with Luis.ai? Please contact me at [fabioegel@gmail.com](mailto:fabioegel@gmail.com).

