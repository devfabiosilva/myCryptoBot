/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	Directline offline bridge.
	=========================

	If you want run myChatBot app outside MS Azure platform you must run bridge.js app to webchat client access myChatBot services.

	This is a gateway to replace Azure Server while you are in development mode or even running this example without MS Azure account access.

	If you are running myChatBot (server) in MS Azure Cloud you don't need run this app. In you client side (webchat-client) just set:
		USE_LOCAL_SERVER=false;

	Many thanks to Ryan:
		npm -> https://www.npmjs.com/package/offline-directline
		github -> https://github.com/ryanvolum/offline-directline
		
*/


const directline = require("./offline-directline/dist/bridge");
const express = require("express");
const port="3000";
const app = express();
directline.initializeRoutes(app, "http://localhost:"+port, "http://localhost:3978/api/messages");

