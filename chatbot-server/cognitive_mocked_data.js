/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	This is a mocked data example used for myChatbot.
	=================================================

	Here you can set myChatbot language and custom your own data.

	You can use Google datasheet service or even MySQL, NoSQL to store custom data.

*/

//Dom 25 Ago 2019 22:20:22 -03

var fs = require('fs');

const { USE_LANG, SERVER_LANG_PT_BR, SERVER_LANG_ENG_US } = require('./api_config.js');

const LOCALE_PT_BR = "pt-BR";
const LOCALE_EN_US = "en"
const US_DOLAR="USD";
const REAL_BRL="BRL";

const LANG_PT_BR = {
	greeting: "Olá %s tudo bem com você. Eu estou ótimo",
	fiat_coin_dolar: "Dólar",
	fiat_coin_euro: "Euro",
	crypto_coin_btc: "Bitcoin",
	crypto_coin_nano: "Nano",
	crypto_coin_ethereum: "Ethereum",
	crypto_coin_litecoin: "Litecoin",
	crypto_coin_iota: "Iota",
	crypto_coin_monero: "Monero",
	coin_price_msg: "Cotação de moeda",
	price: "Preço",
	price_usd: "Preço (USD)",
	price_btc: "Preço (BTC)",
	rank: "Ranque",
	vol_24h: "Vol. 24h",
	vol_24h_usd: "Vol. 24h (USD)",
	mark_cap: "Cap. Merc",
	mark_cap_usd: "Cap. Merc (USD)",
	total_available: "Total disp.",
	max_available: "Max. disp.",
	var_1h: "Var.1h (%)",
	var_24h: "Var.24h (%)",
	var_7d: "Var.7d (%)",
	choose_coins: "Escolha entre Bitcoin, Nano, Dólar, Euro",
	unavailable_coin: "Moeda não disponível. Talvez eu precise ser treinado mais",
	i_dont_understand: "Desculpe. Eu não sei o que você está dizendo :(",
	coinmarketcap_conn_error: "Erro ao acessar o coinmarketcap.com. Tente mais tarde",
	apilayer_conn_error: "Erro ao acessar appilayer.net",
	locale: LOCALE_PT_BR,
	lang_info: SERVER_LANG_PT_BR,
	default_coin: REAL_BRL,
	about_my_dev_hdr: "Sobre meu desenvolvedor :)",
	dev_details: "Desenvolvedor de aplicativos e hardware",
	dev_desc: "Focado em tecnologias disruptivas tais como: Inteligência Artificial, Criptomoedas, soluções Linux, soluções ARM, criptografia (ECDSA, ECDH, AES, RSA), IoT, Automação industrial e residencial, desenvolvimento C e Assembly, aplicativos web (node.js, Python e PHP), NoSQL, SQL, projetos de placas PCB, Azure, Amazon, Google Cloud, IBM Bluemix, circuitos elétricos e magnéticos",
	dev_email_contact: "fabioegel@gmail.com",
	dev_github_button: "Meu github",
	dev_contact_button: "Entre em contato",
	dev_lic_title: "Licença do projeto:",
	dev_lic_val: "Creative Commons 4.0",
	hello_user_name_first_time_title: "Olá anonimo",
	hello_user_name_first_time_msg: "Antes de começar a conversar com você, gostaria de te conhecer. Vamos lá?",
	yourname_msg: "Seu nome",
	yourname_placeholder: "Seu nome aqui",
	go_away_title: "Já vai?",
	go_away_msg: "Você quer realmente sair %s?",
	saying_goodbye: "Tchau %s e volte sempre e tenha um ótimo dia ;)",
	thats_good: "Que bom que você quer ficar para trocar ideias",
	whoami1: "Sou um chatbot que integra tecnologias disruptivas tais como Inteligência Artificial, IoT, Nuvem e API's como: cotação de moedas, criptomoedas, previsão do tempo (em desenvolvimento), serviços em nuvem entre outros",
	whoami2: "Atualmente já sou capaz e treinado para reconhecer textos em dois idiomas (Inglês e Português do Brasil), consultar cotações de criptomoedas e ainda interagir com dispositivos de Internet das Coisas (IoT) via núvem IBM. Você pode configurar seu Arduino ou Raspberry PI para eu interagir com eles usando  serviços IBM ou até outros de sua necessidade",
	whoami3: "Em breve posso te apresentar mais curiosidades sobre mim. Ainda estou sendo treinado e desenvolvido para fazer previsões do tempo e consultar dados de várias cidades :)",
	whoami4:"Atualmente integro nuvens como: Google Drive (consulta de planilhas), MS Azure (serviços cognitivos) e IBM Bluemix (IoT). Posso ser integrado a muito mais :)",
	whoami5: "Já sou capaz de enviar cartões personalizados (AdaptiveCard) e até arquivos multimídia. Tenho muito que evoluir e aprender com os humanos.",
	whoami6: "Você pode digitar 'Qual é a cotação do dólar hj?' ou ainda 'Quanto custa o Bitcoin?'",
	whoami7: "Se você já configurou o IBM Bluemix, então já posso controlar um dispositivo IoT. Basta você então escrever algo 'Você pode ligar a lâmpada do meu quarto?' ou ainda 'Qual a temperatura da sala?'",
	whoami8: "Curioso? Então. Estou preparado para te mostrar meu potencial."
};

const LANG_EN_US = {
	greeting: "Hello %s I am ok",
	fiat_coin_dolar: "Dolar",
	fiat_coin_euro: "Euro",
	crypto_coin_btc: "Bitcoin",
	crypto_coin_nano: "Nano",
	crypto_coin_ethereum: "Ethereum",
	crypto_coin_litecoin: "Litecoin",
	crypto_coin_iota: "Iota",
	crypto_coin_monero: "Monero",
	coin_price_msg: "Coin price",
	price: "Price",
	price_usd: "Price (USD)",
	price_btc: "Price (BTC)",
	rank: "Rank",
	vol_24h: "Vol. 24h",
	vol_24h_usd: "Vol. 24h (USD)",
	mark_cap: "Marketcap",
	mark_cap_usd: "Marketcap (USD)",
	total_available: "Total avail.",
	max_available: "Max. avail.",
	var_1h: "Var.1h (%)",
	var_24h: "Var.24h (%)",
	var_7d: "Var.7d (%)",
	choose_coins: "Please: Select Bitcoin, Nano, Dolar or Euro",
	unavailable_coin: "Unavailable coin. Maybe I must be trained more.",
	i_dont_understand: "Sorry. I did not understand what you're saying :(",
	coinmarketcap_conn_error: "Error when access coinmarketcap.com. Try it later",
	apilayer_conn_error: "Error when access appilayer.net",
	locale: LOCALE_EN_US,
	lang_info: SERVER_LANG_ENG_US,
	default_coin: null,
	about_my_dev_hdr: "About my developer :)",
	dev_details: "Application and Hardware Developer",
	dev_desc: "Interested to disruptive technologies: Artificial Intelligence, cryptocurrencies, Linux and ARM solutions, (ECDSA, ECDH, AES, RSA) cryptograpy, IoT, Industrial and home automation, C and Assembly languages, Webapplication (Node.JS, Python and PHP), NoSQL, SQL, PCB hardware design, Azure, Amazon, Google Cloud, electric and magnetics circuits",
	dev_email_contact: "fabioegel@gmail.com",
	dev_github_button: "My github",
	dev_contact_button: "Contact me at",
	dev_lic_title: "Project licence:",
	dev_lic_val: "Creative Commons 4.0",
	hello_user_name_first_time_title: "Hello anonymous",
	hello_user_name_first_time_msg: "Before we start chat I would like to know more about you. Let's start?",
	yourname_msg: "Your name",
	yourname_placeholder: "Your name here",
	go_away_title: "Saying goodbye",
	go_away_msg: "%s are you sure?",
	saying_goodbye: "So long %s. Come back soon and have a nice day ;)",
	thats_good: "That's good to know you want to stay here to chat more",
	whoami1: "I am a chatbot on which integrates disruptive technologies such as Artificial Intelligence, IoT, Cloud Services and API's like coin price, cryptocurrencies prices, wheather forecast (in development) et. al.",
	whoami2: "By now I am ready and trained to recognize bilingual text (English and Brazilian Portuguese), check some coins and cryptocurrencies prices and receive and send command to IoT devices through IBM. You can also configure your Arduino or Raspberry PI to integrate IBM IoT services. You can also integrate another cloud as well.",
	whoami3:  "Soon I will be able to show more evolution about me. I am being trained and developed to check wheater forecast in many cities :)",
	whoami4:"Also I am already integrated to clouds: Google Drive (Google Sheets), MS Azure (cognitive services) and IBM Bluemix (IoT). I am able be integrated to many more.",
	whoami5: "I am ready to send customized cards (AdaptiveCard) and even multimídia files. I have a lot o things to learn and evaluate myself with humans.",
	whoami6: "You can type: 'Can you tell me Bitcoin price for today?' or even 'How much is Euro?'",
	whoami7: "If you already have configured IBM Bluemix so I can control your IoT device and you can type something like: 'Can you turn my bedroom light on?' or even 'Tell me the room temperature'",
	whoami8: "Ready? I am ready to show you what I can do."

};

function loadMockData()
{
	if (SERVER_LANG_ENG_US===USE_LANG)
		return LANG_EN_US;
	else
		return LANG_PT_BR;
}

module.exports = {

	LOCALE_PT_BR, LOCALE_EN_US, US_DOLAR, REAL_BRL, SERVER_LANG_PT_BR, SERVER_LANG_ENG_US, USE_LANG,
	loadMockData,
	fShowMyCurriculum: function() {
		const fabio_img="./images/fabio_img.png";
		var img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(fabio_img)).toString('base64');
		var myCurriculum = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
				{
				"type": "TextBlock",
				"text": loadMockData().about_my_dev_hdr,
				"weight": "bolder",
				"size": "medium"
				},
				{
					"type": "ColumnSet",
					"columns": [
						{
							"type": "Column",
							"width": "auto",
							"items": [
								{
									"type": "Image",
									"url": img_file,
									"size": "small",
									"style": "person"
								}
							]
						},
						{
							"type": "Column",
							"width": "stretch",
							"items": [
								{
									"type": "TextBlock",
									"text": "Fábio Pereira da Silva",
									"weight": "bolder",
									"wrap": true
								},
								{
									"type": "TextBlock",
									"spacing": "none",
									"text": loadMockData().dev_details,
									"isSubtle": true,
									"wrap": true
								}
							]
						}
					]
				},
				{
					"type": "TextBlock",
					"text": loadMockData().dev_desc,
					"wrap": true
				},
				{
					"type": "FactSet",
					"facts": [
						{
							"title": "E-mail:",
							"value": loadMockData().dev_email_contact
						},
						{
							"title": loadMockData().dev_lic_title,
							"value": loadMockData().dev_lic_val
						}
					]
				}
			],
			"actions": [
				{
					"type": "Action.OpenUrl",
					"title": loadMockData().dev_github_button,
					"url": "https://github.com/devfabiosilva"
				},
				{
					"type": "Action.OpenUrl",
					"title": loadMockData().dev_contact_button,
					"url": "mailto:fabioegel@gmail.com"
				}
			]
		};

		return {content:myCurriculum};
	},
	fShowDonationCards: function(coin_name) {
		var defaultLang=(USE_LANG===SERVER_LANG_ENG_US);
		var donation_img_btc="./images/donation_btc.png";
		var donation_img_nano="./images/donation_nano.png";
		var donation_img_ltc="./images/donation_ltc.png";
		var donation_img_doge="./images/donation_doge.png";
		var img;
		var myCoinName;
		var myCoinAddress;

		switch (coin_name) {
			case "nano":
				myCoinName="NANO";
				myCoinAddress="nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb";
				img = "data:image/png;base64," + Buffer.from(fs.readFileSync(donation_img_nano)).toString('base64');
				break;
			case "ltc":
				myCoinName="LITECOIN";
				myCoinAddress="LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f";
				img = "data:image/png;base64," + Buffer.from(fs.readFileSync(donation_img_ltc)).toString('base64');
				break;
			case "doge":
				myCoinName="DOGECOIN";
				myCoinAddress="DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau";
				img = "data:image/png;base64," + Buffer.from(fs.readFileSync(donation_img_doge)).toString('base64');
				break;
			default:
				myCoinName="BITCOIN";
				myCoinAddress="1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5";
				img = "data:image/png;base64," + Buffer.from(fs.readFileSync(donation_img_btc)).toString('base64');
		}
		var donationCard = {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
				{
					"type": "TextBlock",
					"text": defaultLang?"Thank YOU :)":"Muito obrigado :)",
					"size": "ExtraLarge",
					"horizontalAlignment": "Center",
					"weight": "Bolder"
				},
				{
					"type": "TextBlock",
					"text": myCoinName,
					"weight": "Bolder",
					"horizontalAlignment": "Center",
					"spacing": "Large",
					"separator": true
				},
				{
					"type": "TextBlock",
					"text": myCoinAddress,
					"horizontalAlignment": "Center",
					"size": "Small",
					"wrap": true
				},
				{
					"type": "Image",
					"url": img,
					"horizontalAlignment": "Center"
				}
			]
		};
		return {content: donationCard};
	},
	fShowDonationOption: function()
	{
		var defaultLang=(USE_LANG===SERVER_LANG_ENG_US);
		var myDonationOption = {
		    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.0",
			"body": [
				{
					"type": "TextBlock",
					"text": defaultLang?"Choose donation coin":"Escolha o tipo de doação",
					"size": "Large",
					"weight": "Bolder"
				},
				{
					"type": "TextBlock",
					"text": defaultLang?"Thank you":"Muito obrigado ;)",
					"isSubtle": true,
					"spacing": "None"
				},
				{
					"type": "Input.ChoiceSet",
					"id": "donateCoin",
					"value": "1",
					"choices": [
						{
							"title": "Bitcoin",
							"value": "1"
						},
						{
							"title": "Nano",
							"value": "2"
						},
						{
							"title": "Litecoin",
							"value": "3"
						},
						{
							"title": "Dogecoin",
							"value": "4"
						}
					]
				}
			],
			"actions": [
				{
					"type": "Action.Submit",
					"title": defaultLang?"Donate":"Doar",
					"id": "donateButton",
					"style": "positive"
				}
			]
		};
		return {content: myDonationOption};
	},
	fShowAdaptiveCard() {

		var vd_example= {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.1",
			"body": [
				{
					"type": "TextBlock",
					"text": "Lear more Adaptive Cards"
			     },
				{
					"type": "Media",
//					"poster": "https://adaptivecards.io/content/poster-video.png",
					"sources": [
						{
							"mimeType": "video/mp4",
							"url": "https://adaptivecardsblob.blob.core.windows.net/assets/AdaptiveCardsOverviewVideo.mp4"
						}
					]
				}
    			],
			"actions": [
				{
					"type": "Action.OpenUrl",
					"title": "Learn more",
					"url": "https://adaptivecards.io"
				}
			]
		}
		return {content: vd_example};
	},
	fShowVideoEinsteinCard() {
		var vd_example= {
			"$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
			"type": "AdaptiveCard",
			"version": "1.1",
			"body": [
				{
					"type": "TextBlock",
					"text": "Einstein cracks a joke haha"
			     },
				{
					"type": "Media",
					"sources": [
						{
							"mimeType": "video/mp4",
							"url":"https://github.com/devfabiosilva/myChatbot/blob/master/chatbot-server/images/einstein_cracks_joke.mp4?raw=true"
						}
					]
				}
    			],
			"actions": [
				{
					"type": "Action.OpenUrl",
					"title": "Albert Einstein site",
					"url": "http://www.alberteinsteinsite.com/index.html"
				}
			]
		};

		return {content: vd_example};
	}

}

