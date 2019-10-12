/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	COGNITIVE ENTITIES AND INTENTS QUERY
	====================================

	This myChatbot uses these queries to communicate with LUIS.AI cognitive services.
*/

//Seg 26 Ago 2019 23:43:37 -03


const INTENTS = {
	coin_price: "coin_price",
	say_goodbye: "say_goodbye",
	greeting: "greeting",
	iot_command: "iot_command",
	whatido: "whatido"
}

const ENTITIES = {
	coin_btc: "coin_btc",
	coin_nano: "coin_nano",
	coin_dolar: "coin_dolar",
	coin_euro: "coin_euro",
	coin_ethereum: "coin_ethereum",
	coin_monero: "coin_monero",
	coin_iota: "coin_iota",
	coin_litecoin: "coin_litecoin",
	bedroom_lamp_on: "bedroom_lamp_on",
	bedroom_lamp_off: "bedroom_lamp_off"
}

module.exports = {
	INTENTS, ENTITIES
}
