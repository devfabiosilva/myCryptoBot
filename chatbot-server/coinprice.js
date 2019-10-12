/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com


	COIN PRICE ADAPTIVE CARDS SCHEMA
	================================

	Coinmarketcap cryptocurrencies and fiat currencies are fully customized with AdaptiveCard in myChatbot server.

	You can custom your AdaptiveCard usig JSON !

	Check https://adaptivecards.io/ for details and examples with AdaptiveCard

	Check https://coinmarketcap.com/ to get information about cryptocurrencies

	Check https://apilayer.com/ to get information about fiat currencies

*/
var fs = require('fs');

const COGNITIVE_MOCKED_DATA = require('./cognitive_mocked_data.js');
const F_UTIL = require('./util.js');
const BITCOIN_PRICE = 0;
const EURO_PRICE = 1;
const DOLAR_PRICE = 2;
const NANO_PRICE = 3;
const ETHEREUM_PRICE=4;
const LITECOIN_PRICE=5;
const IOTA_PRICE=6;
const MONERO_PRICE=7;
const btc_img_path = "./images/btc.png";
const usd_img_path = "./images/usd.png";
const euro_img_path = "./images/eur.png";
const nano_img_path = "./images/nano.png";
const ethereum_img_path = "./images/eth.png";
const litecoin_img_path = "./images/ltc.png";
const iota_img_path = "./images/iota.png";
const monero_img_path = "./images/monero.png";

module.exports = {
    BITCOIN_PRICE,
    DOLAR_PRICE,
    EURO_PRICE,
    NANO_PRICE,
    ETHEREUM_PRICE,
    LITECOIN_PRICE,
    IOTA_PRICE,
    MONERO_PRICE,
    showCoinPrice: function (coin_name, coin_value, coin_type, coinmarketcap) {

        var img_file=null;
        var coinCard;

        switch (coin_type) {
            case BITCOIN_PRICE:
                try {
                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(btc_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${btc_img_path} not found`);
                }
                break;
            case NANO_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(nano_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${nano_img_path} not found`);
                }
                break;                              
            case DOLAR_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(usd_img_path)).toString('base64');

                } catch (err)
                {
                    console.log(`File ${usd_img_path} not found`);
                }
                break;
            case EURO_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(euro_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${euro_img_path} not found`);
                }
                break;
            case ETHEREUM_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(ethereum_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${ethereum_img_path} not found`);
                }
                break;
            case LITECOIN_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(litecoin_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${litecoin_img_path} not found`);
                }
                break;
            case IOTA_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(iota_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${iota_img_path} not found`);
                }
                break;
            case MONERO_PRICE:
                try {

                    img_file = "data:image/png;base64," + Buffer.from(fs.readFileSync(monero_img_path)).toString('base64');

                } catch (err) {

                    console.log(`File ${monero_img_path} not found`);
                }
        }

		if (coinmarketcap) {

	        coinCard = {
     	       'contentType': 'application/vnd.microsoft.card.adaptive',
     	       'content': {
     	           "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
     	           "type": "AdaptiveCard",
     	           "version": "1.0",
     	           "body": [
     	               {
     	                   "type": "ColumnSet",
     	                   "columns": [
     	                       {
     	                           "type": "Column",
     	                           "width": "auto",
     	                           "items": [
     	                               {
     	                                   "type": "Image",
     	                                   "size": "small",
     	                                   "url": img_file
     	                               }
     	                           ]
     	                       },
     	                       {
     	                           "type": "Column",
     	                           "width": "stretch",
     	                           "items": [
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().coin_price_msg,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coin_name,
     	                                   "horizontalAlignment": "right",
     	                                   "spacing": "none",
     	                                   "size": "large",
     	                                   "color": "attention"
     	                               }
     	                           ]
     	                       }
     	                   ]
     	               },
     	               {
     	                   "type": "ColumnSet",
     	                   "separator": true,
     	                   "spacing": "medium",
     	                   "columns": [
     	                       {
     	                           "type": "Column",
     	                           "width": "stretch",
     	                           "items": [
     	                               (coinmarketcap.price_brl)?
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().price,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               }:null,
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().price_usd,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().price_btc,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().rank,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               (coinmarketcap['24h_volume_brl'])?
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().vol_24h,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               }:null,
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().vol_24h_usd,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               (coinmarketcap.market_cap_brl)?
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().mark_cap,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               }:null,
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().mark_cap_usd,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().total_available,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().max_available,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().var_1h,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().var_24h,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().var_7d,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               }
     	                           ]
     	                       },
     	                       {
     	                           "type": "Column",
     	                           "width": "auto",
     	                           "items": [
								(coinmarketcap.price_brl)?
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": F_UTIL.formatCoinValue(coinmarketcap.price_brl, 'pt-BR', 'BRL'),
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               }:null,
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": F_UTIL.formatCoinValue(coinmarketcap.price_usd, 'pt-BR', 'USD'),
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.price_btc,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.rank,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               (coinmarketcap['24h_volume_brl'])?
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": F_UTIL.formatCoinValue(coinmarketcap['24h_volume_brl'], 'pt-BR', 'BRL'),
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               }:null,
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": F_UTIL.formatCoinValue(coinmarketcap['24h_volume_usd'], 'pt-BR', 'USD'),
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               (coinmarketcap.market_cap_brl)?
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": F_UTIL.formatCoinValue(coinmarketcap.market_cap_brl, 'pt-BR', 'BRL'),
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               }:null,
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": F_UTIL.formatCoinValue(coinmarketcap.market_cap_usd, 'pt-BR', 'USD'),
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.available_supply,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.max_supply,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.percent_change_1h,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                  	"weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.percent_change_24h,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coinmarketcap.percent_change_7d,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "number"
     	                               }
     	                           ]
     	                       }
     	                   ]
     	               }]
     	       }
     	   };

		} else {
	        coinCard = {
     	       'contentType': 'application/vnd.microsoft.card.adaptive',
     	       'content': {
     	           "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
     	           "type": "AdaptiveCard",
     	           "version": "1.0",
     	           "body": [
     	               {
     	                   "type": "ColumnSet",
     	                   "columns": [
     	                       {
     	                           "type": "Column",
     	                           "width": "auto",
     	                           "items": [
     	                               {
     	                                   "type": "Image",
     	                                   "size": "small",
     	                                   "url": img_file
     	                               }
     	                           ]
     	                       },
     	                       {
     	                           "type": "Column",
     	                           "width": "stretch",
     	                           "items": [
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().coin_price_msg,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true
     	                               },
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coin_name,
     	                                   "horizontalAlignment": "right",
     	                                   "spacing": "none",
     	                                   "size": "large",
     	                                   "color": "attention"
     	                               }
     	                           ]
     	                       }
     	                   ]
     	               },
     	               {
     	                   "type": "ColumnSet",
     	                   "separator": true,
     	                   "spacing": "medium",
     	                   "columns": [
     	                       {
     	                           "type": "Column",
     	                           "width": "stretch",
     	                           "items": [
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": COGNITIVE_MOCKED_DATA.loadMockData().price,
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               }
     	                           ]
     	                       },
     	                       {
     	                           "type": "Column",
     	                           "width": "auto",
     	                           "items": [
     	                               {
     	                                   "type": "TextBlock",
     	                                   "text": coin_value,
     	                                   "horizontalAlignment": "right",
     	                                   "isSubtle": true,
     	                                   "weight": "bolder"
     	                               }
     	                           ]
     	                       }
     	                   ]
     	               }]
     	       }
     	   };

	}

        return coinCard;
    }
}
