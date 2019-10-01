/*
	Directline offline bridge.
	=========================

	Before you run chatbot-server (server) and webchat (client) examples you need first run this app.
	This is a gateway to replace Azure Server while you are in development mode or even running this example.

	Many thanks to Ryan:
		npm -> https://www.npmjs.com/package/offline-directline
		github -> https://github.com/ryanvolum/offline-directline
		
*/


const directline = require("./offline-directline/dist/bridge");
const express = require("express");
const port="3000";
const app = express();
directline.initializeRoutes(app, "http://localhost:"+port, "http://localhost:3978/api/messages");

