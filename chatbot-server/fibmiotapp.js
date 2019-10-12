/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	IBM Bluemix IoT Configuration (OPTIONAL)
	========================================

	You can use myChatbot to receive or send command to IoT devices through IBM Bluemix

	More details and how to configure it in: https://www.ibm.com/cloud/internet-of-things

	You need:
		- Create an IBM Bluemix account
		- Connect your IoT device in IBM Bluemix Cloud
		- Create an IBM API endpoit access
		- Open "api_config.js"
		- Modify "api_config.js" in section BEGIN IBM IoT PLATFORM and set:
			org: "<YOUR_ORG_ID>'
			id: "<YOUR_AP_ID>'
			"domain":"internetofthings.ibmcloud.com"
			"auth-key": "<YOUR_AUTH_KEY>"
			"auth-token": "<YOUR_AUTH_KEY">

		- And finally set:
			F_USE_IBM_IOT = true;
*/

//Qui 11 Abr 2019 01:46:33 -03

const { ibmAppClientConfig, F_DEVICE_TYPE, F_DEVICE_ID,
       F_DATA, F_DATA_TYPE, F_DEBUG, F_TIMEOUT, 
       F_USE_IBM_IOT } = require('./api_config.js');

var iotf = require("ibmiotf");

const FCONNECTION_OK=0;
const FCONNECTION_IS_NOT_CONNECTED=1;
const FCONNECTION_IS_RECONNECTING=2;
const FCONNECTION_ERROR=3;
const FCONNECTION_ERROR_TIMEOUT=4;
const FCONNECTION_INTERNAL_ERROR=5;
const FIBM_IOT_NOT_USED=6;

var ibm_internal_error=false;

if (F_USE_IBM_IOT) {
	var appClient = new iotf.IotfApplication(ibmAppClientConfig);

	appClient.log.setLevel('info');

	appClient.connect();

	appClient.on("connect", function () {
		ibm_internal_error=false;
		appClient.subscribeToDeviceEvents();
	});

	appClient.on('reconnect', function() {
		ibm_internal_error=false;
		if (F_DEBUG)
			console.log("Reconnected!!!");
	});

	appClient.on('error', function() {
		ibm_internal_error=true;
		console.log("Erro");
	});
}

function fSendCommand(cmd) {
	return new Promise(function (resolve, reject) {
		if (F_USE_IBM_IOT) {
			setTimeout(function () {
				reject(FCONNECTION_ERROR_TIMEOUT);
				if (F_DEBUG)
					console.log('timeout completed'); 
			}, 1000*F_TIMEOUT);

			(ibm_internal_error)?reject(FCONNECTION_INTERNAL_ERROR):appClient.publishDeviceCommand(F_DEVICE_TYPE, F_DEVICE_ID,
										F_DATA, F_DATA_TYPE, cmd);

			appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
				resolve(FCONNECTION_OK);
				if (F_DEBUG)
					console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);
			});

			appClient.on('disconnect', function() {
				reject(FCONNECTION_IS_NOT_CONNECTED);
				if (F_DEBUG)
					console.log('Disconnected from IoTF');
			});

			appClient.on('error', function (argument) {
				reject(FCONNECTION_ERROR);
				if (F_DEBUG)
					console.log(argument);
			});
		} else
			reject(FIBM_IOT_NOT_USED);
	});
}

module.exports = {
	fSendCommand, FCONNECTION_OK, FCONNECTION_IS_NOT_CONNECTED, FCONNECTION_IS_RECONNECTING,
	FCONNECTION_ERROR, FCONNECTION_ERROR_TIMEOUT
}

