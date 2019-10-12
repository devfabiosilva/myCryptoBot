/*
	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	CUTE DIALOGS EXAMPLES ARE CREATED HERE
	======================================

	myChatbot uses AdaptiveCard to create cute dialogs.

	Check it out in https://adaptivecards.io/ to see more examples and documentation
*/

const {USE_LANG, SERVER_LANG_ENG_US} = require('./cognitive_mocked_data.js');

module.exports = {
	dialogYesNo: function(title, message, id){
		var defaultLang=(USE_LANG===SERVER_LANG_ENG_US);
				var adaptiveCard =
				{
					contentType: "application/vnd.microsoft.card.adaptive",
					content: {
						"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
						"type": "AdaptiveCard",
						"version": "1.0",
						"body": [
							{
								"type": "Container",
								"items": [
									{
										"type": "TextBlock",
										"text": title,
										"weight": "bolder",
										"size": "medium"
									},
									{
										"type": "TextBlock",
										"text": message,
										"size": "big",
										"isSubtle": true,
										"wrap": true
									}
            							]
        						}
    							],
    					"actions": [
				        			{
            							"type": "Action.Submit",
            							"data": {
               								"id": id+"YES"
            								},
          							"title": defaultLang?"Yes":"Sim"
        							},
				        			{
            							"type": "Action.Submit",
            							"data": {
               								"id": id+"NO"
            								},
          							"title": defaultLang?"No":"Não"
        							}
    							]
						}
				}
				return adaptiveCard;
			},
	dialogStartConversation: function(title, subtitle, yourname, placeholder)
	{
		var defaultLang=(USE_LANG===SERVER_LANG_ENG_US);
		var startConv = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
				{
					"type": "ColumnSet",
					"columns": [
						{
							"type": "Column",
							"width": 2,
							"items": [
								{
									"type": "TextBlock",
									"text": title,
									"weight": "Bolder",
									"size": "Medium"
								},
								{
									"type": "TextBlock",
									"text": subtitle,
									"isSubtle": true,
									"wrap": true
								},
								{
									"type": "TextBlock",
									"text": yourname,
									"wrap": true
								},
								{
									"type": "Input.Text",
									"id": "userNameStartDialog",
									"placeholder": placeholder
								}
							]
						}
					]
				}
			],
			"actions": [
				{
					"type": "Action.Submit",
					"title": defaultLang?"Start":"Começar",
					"id": "startConversation"
				}
			]
		};
		return {content: startConv}
	},
	welcomeDialogMenuHelper: function(userName)
	{
		var defaultLang=(USE_LANG===SERVER_LANG_ENG_US);
		var menuHelper = {
			contentType: "application/vnd.microsoft.card.adaptive",
			content: {
				"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
				"type": "AdaptiveCard",
				"version": "1.0",
				"body": [
					{
						"type": "Container",
						"items": [
							{
								"type": "TextBlock",
								"text": (defaultLang)?"Welcome!":"Bem vindo!",
								"weight": "bolder",
								"size": "medium"
							},
							{
								"type": "TextBlock",
								"text": (defaultLang)?"Welcome "+userName+". Click in options below to know more about me.":
								"Bem vindo "+userName+". Clique nas opções abaixo para saber mais sobre mim.",
								"size": "big",
								"isSubtle": true,
								"wrap": true
							}
            				]
        				}
    					],
    				"actions": [
			       	{
        					"type": "Action.Submit",
         					"data": {
         						"id": "whoami"
    						},
	        				"title": (defaultLang)?"Who am I?":"Quem sou eu?"
        				},
				     {
         					"type": "Action.Submit",
         					"data": {
         						"id": "whaticando"
    						},
          				"title": (defaultLang)?"What I can do":"O que sei fazer"
        				},
				     {
         					"type": "Action.Submit",
         					"data": {
         						"id": "aboutmydev"
    						},
          				"title": (defaultLang)?"About my developer":"Sobre meu desenvolvedor"
        				},
				     {
         					"type": "Action.Submit",
         					"data": {
         						"id": "menudonation"
    						},
          				"title": (defaultLang)?"Donation":"Doação"
        				}
    				]
			}
		};
		return menuHelper;
	}
}
