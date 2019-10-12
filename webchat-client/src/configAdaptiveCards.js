/*
	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	This is an adaptive-card host configuration for myCryptoBot

	All fonts, button and styles of adaptive-cards are customized here
*/

var hostConfig=
{
	"choiceSetInputValueSeparator": ",",
	"supportsInteractivity": true,
	"fontFamily": "Roboto",
	"spacing": {
		"small": 3,
		"default": 8,
		"medium": 14,
		"large": 20,
		"extraLarge": 40,
		"padding": 10
	},
	"separator": {
		"lineThickness": 1,
		"lineColor": "#EEEEEE"
	},
	"fontSizes": {
		"small": 10,
		"default": 12,
		"medium": 14,
		"large": 16,
		"extraLarge": 18
	},
	"fontWeights": {
		"lighter": 200,
		"default": 400,
		"bolder": 600
	},
	"imageSizes": {
		"small": 30,
		"medium": 60,
		"large": 120
	},
	"containerStyles": {
		"default": {
			"foregroundColors": {
				"default": {
					"default": "#383838",
					"subtle": "#383838"
				},
				"dark": {
					"default": "#383838",
					"subtle": "#383838"
				},
				"light": {
					"default": "#FFFFFF",
					"subtle": "#33000000"
				},
				"accent": {
					"default": "#2E89FC",
					"subtle": "#882E89FC"
				},
				"good": {
					"default": "#54a254",
					"subtle": "#DD54a254"
				},
				"warning": {
					"default": "#c3ab23",
					"subtle": "#DDc3ab23"
				},
				"attention": {
					"default": "#e83030",
					"subtle": "#e83030"
				}
			},
			"backgroundColor": "#88b6d4"
		},
		"emphasis": {
			"foregroundColors": {
				"default": {
					"default": "#333333",
					"subtle": "#EE333333"
				},
				"dark": {
					"default": "#000000",
					"subtle": "#66000000"
				},
				"light": {
					"default": "#FFFFFF",
					"subtle": "#33000000"
				},
				"accent": {
					"default": "#2E89FC",
					"subtle": "#882E89FC"
				},
				"good": {
					"default": "#54a254",
					"subtle": "#DD54a254"
				},
				"warning": {
					"default": "#c3ab23",
					"subtle": "#DDc3ab23"
				},
				"attention": {
					"default": "#e83030",
					"subtle": "#e83030"
				}
			},
			"backgroundColor": "#08000000"
		}
	},
	"actions": {
		"maxActions": 5,
		"spacing": "Default",
		"buttonSpacing": 5,
		"showCard": {
			"actionMode": "Inline",
			"inlineTopMargin": 16,
			"style": "emphasis"
		},
		"preExpandSingleShowCardAction": true, //False
		"actionsOrientation": "Vertical",
		"actionAlignment": "Stretch"
	},
	"adaptiveCard": {
		"allowCustomStyle": false
	},
	"imageSet": {
		"imageSize": "Medium",
		"maxImageHeight": 100
	},
	"factSet": {
		"title": {
			"size": "Default",
			"color": "Default",
			"isSubtle": false,
			"weight": "Bolder",
			"warp": true
		},
		"value": {
			"size": "Default",
			"color": "Default",
			"isSubtle": false,
			"weight": "Default",
			"warp": true
		},
		"spacing": 10
	}
}

module.exports = {
	hostConfig
}
