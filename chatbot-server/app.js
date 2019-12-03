/*
	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	myChatbot main application
	==========================

	Server implementing cognitive service, mocked data, IoT cloud, cryptocurrency services examples.

	Please before you run this main app open "api_config.js" to configure myChatbot server application and set:

		- LANGUAGE CULTURE (Brazilian Portuguese/US English)
		- SET LUIS.AI API ENDPOINT (MS Cognitive Service)
		- SET CRYPTOCURRENCY API ENDPOINT (Default: https://coinmarketcap.com api)
		- SET FIAT CURRENCY API ENDPOINT (Defaut: http://apilayer.net)
		- SET IBM BLUEMIX IOT ENDPOINT (If you want to communicate with your IoT device (Optional). Default: disabled)

*/


const restify = require('restify');
const botbuilder = require('botbuilder');
const { LuisRecognizer } = require('botbuilder-ai');
const COIN_PRICE = require('./coinprice');
const https = require('https');
const F_UTIL = require('./util.js');
const COGNITIVE_MOCKED_DATA = require('./cognitive_mocked_data.js');
const { botFrameworkAdapter, luisPredictionOptions, luisApplication, LUIS_PORT } = require('./api_config.js');
const COGNITIVE_SERVICE = require('./cognitives_intents_entities.js');
const { dialogYesNo, dialogStartConversation, welcomeDialogMenuHelper } = require('./dialogs.js');


const IBM_IOT = require('./fibmiotapp.js');
//const FIOT = require('./fmqtt.js');

var adapter = new botbuilder.BotFrameworkAdapter(botFrameworkAdapter);

// Create HTTP server.
let server = restify.createServer();
server.listen(LUIS_PORT, function () {
    console.log(`\n${server.name} listening to ${server.url}`);
});


// Catch-all for errors.
adapter.onTurnError = async (context, error) => {
    const errorMsg = error.message ? error.message : `Oops. Something went wrong!`;
    // This check writes out errors to console log .vs. app insights.
    console.error(`\n [onTurnError]: ${error}`);
    // Clear out state
    await conversationState.delete(context);
    // Send a message to the user
    await context.sendActivity(errorMsg);
};

const luisRecognizer = new LuisRecognizer(luisApplication(), luisPredictionOptions, true);

const TYPING={type: "typing"};

var userFirstTime=true;
var userName="";

// Listen for incoming requests.
server.post('/api/messages', (req, res) => {
	adapter.processActivity(req, res, async (turnContext) => {
	let val=res.req.body.value;
//	console.log(res.req);
	console.log(val);
	if (userFirstTime) {
		await turnContext.sendActivity(TYPING);
		if (val) {
			if (val.ftrigger) {
				if (val.ftrigger==="welcome") {
					userFirstTime=true;
					await turnContext.sendActivity(
 					{
						attachments: [dialogStartConversation(COGNITIVE_MOCKED_DATA.loadMockData().hello_user_name_first_time_title,
							COGNITIVE_MOCKED_DATA.loadMockData().hello_user_name_first_time_msg,
							COGNITIVE_MOCKED_DATA.loadMockData().yourname_msg, COGNITIVE_MOCKED_DATA.loadMockData().yourname_placeholder)]
					});

				} else {
					await turnContext.sendActivity((COGNITIVE_MOCKED_DATA.USE_LANG===SERVER_LANG_ENG_US)?"Unknown command in trigger"
					:"Comando desconhecido no gatilho");
				}
			} else if (val.userNameStartDialog!=null) {
					if (val.userNameStartDialog) {
						userName=val.userNameStartDialog;
						userFirstTime=false;
						await turnContext.sendActivity(`Olá ${userName} !!!`);
						await turnContext.sendActivity(TYPING);
						console.log(welcomeDialogMenuHelper(userName));
						await turnContext.sendActivity(
							{
								attachments:[welcomeDialogMenuHelper(userName)]
								
							});
					} else {
						var userForgotten = (COGNITIVE_MOCKED_DATA.USE_LANG===COGNITIVE_MOCKED_DATA.SERVER_LANG_ENG_US);
						await turnContext.sendActivity(
 						{
							attachments: [dialogStartConversation((userForgotten)?"Ops anonymous":
							"Ops anonimo", (userForgotten)?"You've got forgotten to type your name":"Você esqueceu de escrever seu nome",
							COGNITIVE_MOCKED_DATA.loadMockData().yourname_msg, COGNITIVE_MOCKED_DATA.loadMockData().yourname_placeholder)]
						});
					}
			} else {
				await turnContext.sendActivity((COGNITIVE_MOCKED_DATA.USE_LANG===COGNITIVE_MOCKED_DATA.SERVER_LANG_ENG_US)?"Unknown command field"
				:"Comando de campo desconhecido");
			}
		} else {
			if (res.req.body.text!=="") {
				if (res.req.body.text) {
					if (res.req.body.text!=="") {
						var userForgottenTypedText = (COGNITIVE_MOCKED_DATA.USE_LANG==COGNITIVE_MOCKED_DATA.SERVER_LANG_ENG_US);
						await turnContext.sendActivity(
		 				{
							attachments: [dialogStartConversation((userForgottenTypedText)?"Ops anonymous":
								"Ops anonimo",
								(userForgottenTypedText)?
								"Please type your name before we start":"Antes de digitar algo, por favor digite seu nome",
								COGNITIVE_MOCKED_DATA.loadMockData().yourname_msg, COGNITIVE_MOCKED_DATA.loadMockData().yourname_placeholder)]
						});
					}
				}
			}
		}
	} else if (val) {

		if (val.ftrigger) {
			userFirstTime=true;
			var forgottenLang=(COGNITIVE_MOCKED_DATA.USE_LANG===COGNITIVE_MOCKED_DATA.SERVER_LANG_ENG_US);
			await turnContext.sendActivity(TYPING);
			await turnContext.sendActivity(
 				{
					attachments: [dialogStartConversation((forgottenLang)?"Hello anonymous":"Olá anonimo",
						(forgottenLang)?"Before we start chat I would like to know more about you":
						"Antes de começar a conversar com você, gostaria de te conhecer. Vamos lá?",
						(forgottenLang)?"Your name":"Seu nome",(forgottenLang)?"Your name here":"Seu nome aqui")]
				});
		} else if (val.id) {
			if (val.id=="whoami") {
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami1);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami6);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami7);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami8);
			} else if (val.id=="whaticando") {
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami2);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami3);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami4);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami5);
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity({
						attachments: [COGNITIVE_MOCKED_DATA.fShowVideoEinsteinCard()]
					});
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity({
						attachments: [COGNITIVE_MOCKED_DATA.fShowAdaptiveCard()]
					});
			} else if (val.id=="menudonation") {
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(
					{
						attachments: [COGNITIVE_MOCKED_DATA.fShowDonationOption()]
					}
				);
			} else if (val.id=="aboutmydev") {
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(
					{
						attachments: [COGNITIVE_MOCKED_DATA.fShowMyCurriculum()]
					}
				);
			} else if (val.id=="goAwayYES") {
				userFirstTime=true;
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().saying_goodbye.replace(/%s/, userName));
				userName="";
			} else if (val.id=="goAwayNO") {
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().thats_good);
			}
		} else if (val.donateCoin) {
			var donateCoinTxt="";
			switch (val.donateCoin) {
				case '1':
					donateCoinTxt="btc";
					break;
				case '2':
					donateCoinTxt="nano";
					break;
				case '3':
					donateCoinTxt="ltc";
					break;
				case '4':
					donateCoinTxt="doge";
					break;
				default:
			}
			if (donateCoinTxt) {
				await turnContext.sendActivity(TYPING);
				await turnContext.sendActivity(
					{
						attachments: [COGNITIVE_MOCKED_DATA.fShowDonationCards(donateCoinTxt)]
					});
			}
		}
	} else {
		const results = await luisRecognizer.recognize(turnContext);

		if (results) {
			if (results.luisResult) {
     	   		if (results.luisResult.topScoringIntent) {
     	   		//console.log(results.luisResult.topScoringIntent); //{ intent: 'cotacao_de_moeda', score: 0.8910353 }
     	   		//console.log(results.entities.$instance);
     	   			if (results.luisResult.topScoringIntent.intent) {
        			
						await turnContext.sendActivity(TYPING);
						var ac;
						//console.log(results.luisResult.topScoringIntent);
		        			switch (results.luisResult.topScoringIntent.intent) {
		        				case COGNITIVE_SERVICE.INTENTS.greeting:
		        					await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().greeting.replace(/%s/, userName));
		        					break;
		        				case COGNITIVE_SERVICE.INTENTS.whatido:
								await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami1);
								await turnContext.sendActivity(TYPING);
								await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami6);
								await turnContext.sendActivity(TYPING);
								await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami7);
								await turnContext.sendActivity(TYPING);
								await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().whoami5);
								await turnContext.sendActivity(TYPING);
								await turnContext.sendActivity({
									attachments: [COGNITIVE_MOCKED_DATA.fShowVideoEinsteinCard()]
								});
								await turnContext.sendActivity(TYPING);
								await turnContext.sendActivity({
									attachments: [COGNITIVE_MOCKED_DATA.fShowAdaptiveCard()]
								});
		        					break;
     	   					case COGNITIVE_SERVICE.INTENTS.coin_price:
		        					if (results.entities.$instance) {
		        						let coin_res;
		        						let n_coins=0
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_btc]) {
										coin_res= await F_UTIL.getCoinMarketPrice("bitcoin", 
										                                        COGNITIVE_MOCKED_DATA.loadMockData().default_coin);
										if (coin_res[0]) {
											ac = COIN_PRICE.showCoinPrice(
												COGNITIVE_MOCKED_DATA.loadMockData().crypto_coin_btc, 0, COIN_PRICE.BITCOIN_PRICE,
												                  coin_res[0]);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().coinmarketcap_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_nano]) {
										coin_res= await F_UTIL.getCoinMarketPrice("nano", COGNITIVE_MOCKED_DATA.loadMockData().default_coin);
										if (coin_res[0]) {
											ac = COIN_PRICE.showCoinPrice(
												COGNITIVE_MOCKED_DATA.loadMockData().crypto_coin_nano, 0, COIN_PRICE.NANO_PRICE,
												                          coin_res[0]);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().coinmarketcap_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_ethereum]) {
										coin_res= await F_UTIL.getCoinMarketPrice("ethereum", 
										                                         COGNITIVE_MOCKED_DATA.loadMockData().default_coin);
										if (coin_res[0]) {
											ac = COIN_PRICE.showCoinPrice(
												COGNITIVE_MOCKED_DATA.loadMockData().crypto_coin_ethereum, 0,
												                    COIN_PRICE.ETHEREUM_PRICE, coin_res[0]);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().coinmarketcap_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_litecoin]) {
										coin_res= await F_UTIL.getCoinMarketPrice("litecoin", 
										                                         COGNITIVE_MOCKED_DATA.loadMockData().default_coin);
										if (coin_res[0]) {
											ac = COIN_PRICE.showCoinPrice(
												COGNITIVE_MOCKED_DATA.loadMockData().crypto_coin_litecoin, 0,
												                    COIN_PRICE.LITECOIN_PRICE, coin_res[0]);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().coinmarketcap_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_iota]) {
										coin_res= await F_UTIL.getCoinMarketPrice("iota", 
										                                         COGNITIVE_MOCKED_DATA.loadMockData().default_coin);
										if (coin_res[0]) {
											ac = COIN_PRICE.showCoinPrice(
												COGNITIVE_MOCKED_DATA.loadMockData().crypto_coin_iota, 0,
												                    COIN_PRICE.IOTA_PRICE, coin_res[0]);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().coinmarketcap_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_monero]) {
										coin_res= await F_UTIL.getCoinMarketPrice("monero", 
										                                         COGNITIVE_MOCKED_DATA.loadMockData().default_coin);
										if (coin_res[0]) {
											ac = COIN_PRICE.showCoinPrice(
												COGNITIVE_MOCKED_DATA.loadMockData().crypto_coin_monero, 0,
												                    COIN_PRICE.MONERO_PRICE, coin_res[0]);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().coinmarketcap_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_dolar]) {
										coin_res= await F_UTIL.getFiatPriceUSD();
										if (coin_res) {
											ac = COIN_PRICE.showCoinPrice(COGNITIVE_MOCKED_DATA.loadMockData().fiat_coin_dolar,
												(coin_res.quotes.USDBRL)?F_UTIL.formatCoinValue(coin_res.quotes.USDBRL,
													COGNITIVE_MOCKED_DATA.loadMockData().locale, 'BRL'):0,
												COIN_PRICE.DOLAR_PRICE, null);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().apilayer_conn_error);
									}
		        						if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.coin_euro]) {
										coin_res= await F_UTIL.getFiatPriceUSD();
										if (coin_res) {
											ac = COIN_PRICE.showCoinPrice(COGNITIVE_MOCKED_DATA.loadMockData().fiat_coin_euro,
												((coin_res.quotes.USDBRL>0)&&(coin_res.quotes.USDEUR>0))?
												F_UTIL.formatCoinValue(coin_res.quotes.USDBRL/coin_res.quotes.USDEUR,
													COGNITIVE_MOCKED_DATA.loadMockData().locale, 'BRL'):0,
												COIN_PRICE.EURO_PRICE, null);
											try {
												await turnContext.sendActivity(
 													{
														attachments:[ac]
													});
												n_coins++;
											} catch (e) {
												console.log(e);
											}
										} else
											await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().apilayer_conn_error);
									}
									if (n_coins==0)
										await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().unavailable_coin);
								} else
									await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().choose_coins);
     	   						break;
     	   						case COGNITIVE_SERVICE.INTENTS.iot_command:
     	   							var defineLang=(COGNITIVE_MOCKED_DATA.USE_LANG===COGNITIVE_MOCKED_DATA.SERVER_LANG_ENG_US);
     	   							var msg=null;
									await turnContext.sendActivity(defineLang?"Waiting command device through IBM Watson IoT ...":
																"Esperando resposta do dispositivo via IBM Watson IoT ...");
									await turnContext.sendActivity(TYPING);
     	   							if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.bedroom_lamp_on]) {
										await turnContext.sendActivity(await IBM_IOT.fSendCommand({"node":"1","value":"true"}).then(
										//await turnContext.sendActivity(await FIOT.fMqttSendCommand('{"node":"3","value":"true"}').then(
											function(res) {
												msg=(defineLang?"Bedroom lamp turned ON":
															"Lâmpada do quarto LIGADA");
												return msg;
											},
											function(err) {
												msg=(defineLang?
													"Sorry %s. Internal error in IBM Watson IoT number %d".replace(/%s/, userName):
													"Desculpe %s. Erro interno no IBM Watson IoT de número %d".replace(/%s/, userName));
												return msg.replace(/%d/, err);
											})
										);
     	   							} else if (results.entities.$instance[COGNITIVE_SERVICE.ENTITIES.bedroom_lamp_off]) {
										await turnContext.sendActivity(await IBM_IOT.fSendCommand({"node":"1","value":"false"}).then(
										//await turnContext.sendActivity(await FIOT.fMqttSendCommand('{"node":"3","value":"false"}').then(
											function(res) {
												msg=(defineLang?"Bedroom lamp turned OFF":
															"Lâmpada do quarto DESLIGADA");
												return msg;
											},
											function(err) {
												msg=(defineLang?
													"Sorry %s. Internal error in IBM Watson IoT number %d".replace(/%s/, userName):
													"Desculpe %s. Erro interno no IBM Watson IoT de número %d".replace(/%s/, userName));
												return msg.replace(/%d/, err);
											})
										);
     	   							} else {
     	   								msg=(defineLang?"Unknown IoT command. I still not trained and/or IoT device does not exist %s.":
     	   									"Comando IoT desconhecido. Eu ainda não fui treinado e/ou dispositivo não existe %s.");
     	   								await turnContext.sendActivity(msg.replace(/%s/, userName));
     	   							}
     	   						break;
     	   						case COGNITIVE_SERVICE.INTENTS.say_goodbye:
									await turnContext.sendActivity(
										{
											attachments:[dialogYesNo(
													COGNITIVE_MOCKED_DATA.loadMockData().go_away_title,
													COGNITIVE_MOCKED_DATA.loadMockData().go_away_msg.replace(/%s/,userName),
													"goAway"
												)]
										});
     	   						break;
     	   						default:
     	   							await turnContext.sendActivity(COGNITIVE_MOCKED_DATA.loadMockData().i_dont_understand);
     	   					}
     	   				}
     	   			}
     	   		}
     	   	}
     	   }
    });
});

