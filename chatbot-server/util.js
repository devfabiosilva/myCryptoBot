/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	API UTILITY FUNCTION
	====================

	Some useful function to access API events, promises and format data

*/

//Sáb 24 Ago 2019 23:16:40 -03 
const https = require('https');
const http = require('http');
require('intl');
const { COINMARKETCAP_API, APILAYER_NET_API } = require('./api_config.js');


function formatCoinValue(val, locale, currency) {
	return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(val);
}
// Bitcoin, Ethereum, Litecoin, Monero, Iota, Dogecoin, Nano
function getCoinMarketPrice(coin_name, convert)
{
	return new Promise(function (resolve, reject) {
		const coin_market_cap_url=COINMARKETCAP_API+coin_name+"/";
		https.get((convert)?(coin_market_cap_url+"?convert="+convert):(coin_market_cap_url), res => {
			res.setEncoding("utf8");
			let body = "";
			res.on("data", data => {
				body += data;
			});
			res.on("end", () => {
				if (body) {
					try {
						body = JSON.parse(body);
						resolve(body);
					} catch {
						reject(null);
					}
				} else
					reject(null);
			});
		}).on("error", (err) => {
			reject(null);
		});
	});
}

function getFiatPriceUSD()
{
	return new Promise(function (resolve, reject) {
		http.get(APILAYER_NET_API, res => {
			res.setEncoding("utf8");
			let body = "";
			res.on("data", data => {
				body += data;
			});
			res.on("end", () => {
				if (body) {
					try {
						body = JSON.parse(body);
						resolve(body);
					} catch {
						reject(null);
					}
				} else
					reject(null);
			});
		}).on("error", (err) => {
			reject(null)
		});
	});
}

module.exports = {
	getCoinMarketPrice, formatCoinValue, getFiatPriceUSD
}

