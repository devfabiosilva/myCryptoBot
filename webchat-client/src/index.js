/*

	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

 	This is a main file of Webchat Client Application
 	=================================================

	Before you start:

		- Check user LANGUAGE:
			Set LOCAL=LANG.load_language(<YOUR_INTERFACE_LANGUAGE>) where:
				* LANG.PT_BR for Brazilian Portuguese
				* LANG.EN_US for US English
				* LANG.FR_FR for French
				* LANG.IT_IT for Italian
				* LANG.ES_ES for Spanish

		- Set SHOW_CLIENT_CUSTOM_MSG=true if you want show a custom message. Default value SHOW_CLIENT_CUSTOM_MSG=false

		- Communication to server:

			There are three modes:

				When (USE_LOCAL_SERVER=true)
					* It will use direct offline mode (default development mode and example)
				When (USE_LOCAL_SERVER=false)
					* It will use MS Azure Botframework TOKEN or SECRET_KEY (Remember: Secred Key is not recommended for security reasons)

			Communication protocol mode:
				* POST when using directline offline (default for development and example. It needs bridge.js appplication to work)
				* Websocket when using MS Azure Botframework
 
*/


import { DirectLine, ConnectionStatus } from 'botframework-directlinejs';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import date from 'date-and-time';
import * as userData from './userdata.js';
import * as AdaptiveCards from 'adaptivecards';
import PropTypes from 'prop-types';
import compare from './compare';
import * as ADAPTIVECARD_CONF from './configAdaptiveCards.js';
import * as LANG from './language.js';

//****** BEGIN SHOW CUSTOM CLIENT MESSAGE ******//
//Set SHOW_CLIENT_CUSTOM_MSG=true if you want show a custom message. Default value SHOW_CLIENT_CUSTOM_MSG=false

const SHOW_CLIENT_CUSTOM_MSG=false;

//****** END SHOW CUSTOM CLIENT MESSAGE ******//


//****** BEGIN USE LOCAL SERVER ******//
// Set USE_LOCAL_SERVER=false if you use MS Azure Botframework
// Set USE_LOCAL_SERVER=true for direct line offline, developement mode and example. (default: USE_LOCAL_SERVER=true)

const USE_LOCAL_SERVER=true;
const USE_SOCKET=false; // Default: false for directline bridge application for POST events. It must be false to work with bridge application.
const LOCAL_SERV_PORT="3000";
const LOCAL_SERVER_LOCATION="http://localhost:"+LOCAL_SERV_PORT+"/directline"; // Default value to work with myChatBot example. Port is 3000.

//****** BEGIN USE LOCAL SERVER ******//


//--------------------------------------------------------//


//****** BEGIN MS AZURE BOTFRAMEWORK CONFIG ******//
// This have no effect when you are using directline offline with bridge application (USE_LOCAL_SERVER=true)
// Use it if you already have an account in MS Azure Cloud. See details at https://azure.microsoft.com/en-us/account/

const USAR_TOKEN=true; // Default: true. It is recommended use TOKEN instead Secret Key app.

const SECRET_KEY = "<YOUR SECRET KEY HERE>"; // Your MS Azure Botframework secret key here (Not recommended)
const TOKEN = "<YOUR AZURE TOKEN HERE>"; // Your MS Azure Botframework TOKEN here (Recommended)


//****** END MS AZURE BOTFRAMEWORK CONFIG ******//


//--------------------------------------------------------//


//****** BEGIN WEBCHAT INTERFACE ******//

// Set language support:
// Available languages are:
//	- LANG.PT_BR (BRAZILIAN PORTUGUESE)
//	- LANG.EN_US (US ENGLISH)
//	- LANG.FR_FR (FRENCH)
//	- LANG.IT_IT (ITALIAN)
//	- LANG.ES_ES (ESPANISH)
//
// You can also add/modify languages. This webchat language support is based in JSON schema.
// See "language.js" to add/modify these structures/languages.

const LOCAL=LANG.load_language(LANG.EN_US);


//****** END WEBCHAT INTERFACE ******//


//-----------------------------------//


//****** BEGIN DEVELOMENT MODE ******//
// Default: true for developement and example mode.

const DEBUG=true;

//****** END DEVELOMENT MODE ******//

var directLine = new DirectLine({
    secret: (USAR_TOKEN)?undefined:SECRET_KEY,
    token: (USAR_TOKEN)?TOKEN:undefined,
    domain: (USE_LOCAL_SERVER)?LOCAL_SERVER_LOCATION:undefined,
    webSocket: (USE_LOCAL_SERVER)?(USE_SOCKET):true,
    pollingInterval:null // optional: set polling interval in milliseconds. Default to 1000 (used in POST method)
});


document.getElementById('msg_welcome_title-id').innerHTML=LOCAL.msg_welcome_title;
document.getElementById('chat-bot-name-id').innerHTML=LOCAL.msg_header_name;


directLine.connectionStatus$
	.subscribe(connectionStatus => {

		switch(connectionStatus) {
			case ConnectionStatus.Uninitialized:    // the status when the DirectLine object is first created/constructed
				break;
			case ConnectionStatus.Connecting:       // currently trying to connect to the conversation
				userData.getStatusChat('yellow',LOCAL.msg_connecting);
				break;
			case ConnectionStatus.Online:           // successfully connected to the converstaion. Connection is healthy so far as we know.
				userData.getStatusChat('green',LOCAL.msg_connected);
				directLine.postActivity({
					from: { id: userData.USER_ID, name: userData.USER_NAME },
					type: 'message',
					text: "",
					value: {ftrigger:"welcome"}
				}).subscribe(
					id => null,
					error => null
				);
				break;
			case ConnectionStatus.ExpiredToken:     // last operation errored out with an expired token. Your app should supply a new one.
				break;
			case ConnectionStatus.FailedToConnect:  // the initial attempt to connect to the conversation failed. No recovery possible.
				userData.getStatusChat('red',LOCAL.msg_not_connected);
				break;
			case ConnectionStatus.Ended:            // the bot ended the conversation
			default:
		}

		if (DEBUG) {
			console.log("DirectLine on ConnectionStatus:");
			console.log("Sinal = "+connectionStatus);
		}

	});


function getKey()
{
	var value = Math.random().toString(36).substring(2);
	return value;
}

try {
	date.locale(LOCAL.local);
} catch (err) {
	if (DEBUG)
		console.log(err);
}

//************************************BEGIN REACT-ADAPTIVECARDS BLOCK CODE****************************************************//
// For some reason react-adaptivecards does not work properly when installed in node_modules directory.
// Also I had made some modification of original code to work properly with my code. Code modifications are commented below
// This block is an opensource code developed by Daniel Gary (https://github.com/danielgary) under MIT Licence
// I could not use PropType. So I must change event 'Action.Submit'
// PS.: File 'compare.js' is Javascript Deep Compare function developed by Jean Vincent

const ACTION_OPEN_URL = 'Action.OpenUrl'
const ACTION_SHOW_CARD = 'Action.ShowCard'
const ACTION_SUBMIT = 'Action.Submit'

class AdaptiveCard extends React.Component {
	static propTypes = {
		/** The hostConfig object that is passed along to the native AdaptiveCards. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/hostconfig) */
		hostConfig: PropTypes.object,
		/** The card schema.  It must comply with the card schema. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/create/cardschema) */
		payload: PropTypes.object.isRequired,
		/** Method that will be invoked anytime a card action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actions) */
		onExecuteAction: PropTypes.func,
		/** Method that will be invoked when a Submit action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionsubmit) */
		onActionSubmit: PropTypes.func,
		/** Method that will be invoked when an Open Url action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionopenurl) */
		onActionOpenUrl: PropTypes.func,
		/** Method that will be invoked when a Show Card action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionshowcard) */
		onActionShowCard: PropTypes.func,
		/** Method that will be invoked if an error is thrown while trying to render a card. */
		onError: PropTypes.func,
		/** JSX styles that will be applied to the card conatiner */
		style: PropTypes.object
	}
	constructor (props) {
		super(props)
			// Create this in the constructor so we don't create it every render
			this.adaptiveCard = new AdaptiveCards.AdaptiveCard()
		}

	componentWillUnmount () {
		// Remove all references
		delete this.adaptiveCard
	}

	shouldComponentUpdate (nextProps) {

	//console.log('shouldComponentUpdate');
		if (compare(nextProps.hostConfig, this.props.hostConfig)) {
			return true
		}
		if (compare(nextProps.payload, this.props.payload)) {
			return true
		}
		if (compare(nextProps.onExecuteAction, this.props.onExecuteAction)) {
			return true
		}
		return false
	}

	executeAction (a) {

		const type = a.getJsonTypeName();

		switch (type) {
			case ACTION_OPEN_URL: {
				if (this.props.onActionOpenUrl) {
					this.props.onActionOpenUrl(a)
				} else {
					this.defaultOpenUrlHandler(a)
				}

        			break
      		}
			case ACTION_SHOW_CARD: {
				if (this.props.onActionShowCard) {
					this.props.onActionShowCard(a)
				}
				break
			}
			case ACTION_SUBMIT: {
				// Modification of original Daniel Gary's code
				//console.log(a);
				//if (DEBUG)
				//	console.log("Ação: Submit");

				directLine.postActivity({
					from: { id: userData.USER_NAME, name: userData.USER_ID }, // required (from.name is optional)
					type: 'message',
					//text: msg_valor_texto//this.valor_texto.value
					value: a.data
				}).subscribe(
					id => console.log('Sucesso', id),
					error => console.log("Error posting activity", error)
				);
				// End modification
        			//if (this.props.onActionSubmit) {
        			//  this.props.onActionSubmit(a)
        			//}
        			break
      		}
      		default:
		}
		if (this.props.onExecuteAction) {
			this.props.onExecuteAction(a)
		}
	}

	defaultOpenUrlHandler (action) {
		window.open(action.url, action.title || '_blank')
	}

	render () {
		if (this.props.hostConfig) {
			this.adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(this.props.hostConfig)
		}
		this.adaptiveCard.onExecuteAction = this.executeAction.bind(this)

		try {
			this.adaptiveCard.parse(this.props.payload)
			const result = this.adaptiveCard.render()
			//return <div className={adaptiveCardDiv} style={this.props.style} ref={(n) => { n && n.appendChild(result) }} />
			//Modification of Daniel Gary's code:
			return <div className="ac-container" style={this.props.style} ref={(n) => { n && n.appendChild(result) }} />
		} catch (err) {
			console.error(err)
			if (this.props.onError) {
				return this.props.onError(err)
			} else {
				return <div className="ac-container" style={{ color: 'red' }}>{err.message}</div> //Here another modification
			}
		}
	}
}


//************************************END REACT-ADAPTIVECARDS BLOCK CODE****************************************************//


class BubbleMessageRender extends React.Component {

	render()
	{
		var item = this.props.item;

		if (item.isClient)
		{
			return (
				<div className="client-container" key={"key-client-container-"+item.key}>
	   				<div className="client-message-container" key={"key-client-message-container-"+item.key}>
	   					<div className="client-message" key={"key-client-message-"+item.key}>
	   						{item.attachment?"Anexo":item.message}
	   					</div>
	   					<div className="client-timestamp" key={"key-client-timestamp-"+item.key}>
	   					 	{LOCAL.msg_sent}{date.format(new Date(), LOCAL.date_format)}
	  					</div>
	   				</div>
	    				<div className="client-avatar" key={"key-client-avatar-"+item.key}>
	    					<img src="images/user-avatar-small.png" alt="user-avatar-small.png" key={"key-client-avatar-img-"+item.key} />
	   				</div>
	   			</div>
			);
		}
		else
		{
			return (
				<div className="chatbot-container" key={"key-chatbot-container-"+item.key}>
					<div className="chatbot-avatar" key={"key-chatbot-avatar-"+item.key}>
	   					<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={"key-chatbot-avatar-img"+item.key} />
	   				</div>
	   				<div className="chatbot-message-container" key={"key-chatbot-message-container-"+item.key}>
	   					<div className="chatbot-message" key={"key-chatbot-message-"+item.key}>
							{item.attachment?<AdaptiveCard id={item.key+"adaptive"} payload={item.message}
								hostConfig={ADAPTIVECARD_CONF.hostConfig} />:item.message}
	   					</div>
	   					<div className="chatbot-timestamp" key={"key-chatbot-timestamp-"+item.key}>
	   						{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   					</div>
	   				</div>
				</div>
			);
		}
	}

}

class BubbleMessage extends React.Component {
	render() {
		return (
			this.props.items.map(item => (
				<BubbleMessageRender item={item} key={getKey()}/>
			))
		);
	}
}
// Default WelcomeMessage
class WelcomeMessage extends React.Component {
	render() {
		return (
		[
			<div className="chatbot-container" key={getKey()}>
				<div className="chatbot-avatar" key={getKey()}>
	   				<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={getKey()} />
	   			</div>
	   			<div className="chatbot-message-container" key={getKey()}>
	   				<div className="chatbot-message" key={getKey()}>
	   					{LOCAL.msg_welcome}
	   				</div>
	   				<div className="chatbot-timestamp" key={getKey()}>
	   					{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   				</div>
	   			</div>
			</div>,
			<div className="chatbot-container" key={getKey()}>
				<div className="chatbot-avatar" key={getKey()}>
	   				<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={getKey()} />
	   			</div>
	   			<div className="chatbot-message-container" key={getKey()}>
	   				<div className="chatbot-message" key={getKey()}>
	   					{LOCAL.msg_welcome2}
	   				</div>
	   				<div className="chatbot-timestamp" key={getKey()}>
	   					{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   				</div>
	   			</div>
			</div>,
			<div className="chatbot-container" key={getKey()}>
				<div className="chatbot-avatar" key={getKey()}>
	   				<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={getKey()} />
	   			</div>
	   			<div className="chatbot-message-container" key={getKey()}>
	   				<div className="chatbot-message" key={getKey()}>
	   					{LOCAL.msg_welcome3}
	   				</div>
	   				<div className="chatbot-timestamp" key={getKey()}>
	   					{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   				</div>
	   			</div>
			</div>,
			<div className="chatbot-container" key={getKey()}>
				<div className="chatbot-avatar" key={getKey()}>
	   				<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={getKey()} />
	   			</div>
	   			<div className="chatbot-message-container" key={getKey()}>
	   				<div className="chatbot-message" key={getKey()}>
	   					{LOCAL.msg_welcome4}
	   				</div>
	   				<div className="chatbot-timestamp" key={getKey()}>
	   					{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   				</div>
	   			</div>
			</div>,
			<div className="chatbot-container" key={getKey()}>
				<div className="chatbot-avatar" key={getKey()}>
	   				<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={getKey()} />
	   			</div>
	   			<div className="chatbot-message-container" key={getKey()}>
	   				<div className="chatbot-message" key={getKey()}>
	   					{LOCAL.msg_welcome5}
	   				</div>
	   				<div className="chatbot-timestamp" key={getKey()}>
	   					{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   				</div>
	   			</div>
			</div>,
			<div className="chatbot-container" key={getKey()}>
				<div className="chatbot-avatar" key={getKey()}>
	   				<img src="images/bot-avatar-small.png" alt="bot-avatar-small" key={getKey()} />
	   			</div>
	   			<div className="chatbot-message-container" key={getKey()}>
	   				<div className="chatbot-message" key={getKey()}>
	   					{LOCAL.msg_welcome6}
	   				</div>
	   				<div className="chatbot-timestamp" key={getKey()}>
	   					{LOCAL.msg_received_at}{date.format(new Date(), LOCAL.date_format)}
	   				</div>
	   			</div>
			</div>
		]
		);
	}
}

// Main class of myChatBot webchat

class MyChatbotClass extends React.Component
{

	constructor(props) {
		super(props)
		this.state = {
		     isClient: false,
			items: [],
			client_text:"",
			botIsTyping: false,
			attachment: false
		};
		this.submitMessage=this.submitMessage.bind(this);
		this.onEnterPress=this.onEnterPress.bind(this);
		this.clientInputText=this.clientInputText.bind(this);
		this.scrollToBottom = this.scrollToBottom.bind(this);
		this.chatBotActivity = this.chatBotActivity.bind(this);
		this.messageSent = this.messageSent.bind(this);
	}

	render() {
		return (
		[
			<div className="webchat-conversations" key="key-webchat-conversations" 
			ref={(messagesContainer) => {this.messagesContainer = messagesContainer;}} >
				{SHOW_CLIENT_CUSTOM_MSG?<WelcomeMessage />:null}
	   			<BubbleMessage items={this.state.items} key="key-bubble-message" />
	   			{this.state.botIsTyping?<img src="images/typing.gif" className="typing-img" key="key-typing-img" alt="alt-typing" />:null}
			</div>,
			<div className="webchat-form-div" key="key-form-div">
   				<div className="webchat-form" key="key-webchat-form">
   					<textarea className="webchat-textarea" placeholder={LOCAL.msg_box_hint}
   						value={this.state.client_text}
   						onKeyDown={this.onEnterPress}
   						onChange={this.clientInputText}
   						key="key-webchat-textarea">
   					</textarea>
   					<input className="webchat-submit" type="image" src="images/send.png" value="" alt="send-img"
   					onClick={this.submitMessage} key="key-webchat-submit" title={LOCAL.msg_send_hint}/>
   				</div>
   			</div>,
   			<div className="webchat-logo" key="key-webchat-logo">
   				<div className="webchat-logo-company" key="key-webchat-logo-company" title={LOCAL.msg_website_hint}>
	   				<a href={LOCAL.msg_website} target="_blank" rel="noopener noreferrer">
	   					<img src="images/generic-company-logo.png" alt="my-company-logo" key="key-my-company-logo"/>
	   				</a>
	   			</div>
	   			<div className="webchat-text-company" key="key-webchat-text-company">
	   				{LOCAL.msg_dev_company}
	   			</div>
	   		</div>
	   	]
		);
	}

     clientInputText(e)
     {
     	this.setState({client_text: e.target.value});
     }

	onEnterPress(e)
	{

		if (e.keyCode === 13 && e.shiftKey === false) {

			this.submitMessage(e);
		}

	}

	scrollToBottom()
	{
		const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
		messagesContainer.scrollTop = messagesContainer.scrollHeight;
	}

	messageSent(id, val)
	{
		if (DEBUG) {
			console.log("Sent ? ", val);
			console.log(id);
		}
	}

	submitMessage(e)
	{
		e.preventDefault();
		if (this.state.client_text.trim()==="")
		{
			return;
    		}
		const newItem = {
			isClient: true,
			message: this.state.client_text.trim(),
			key: getKey(),
			attachment: false
		}

		directLine.postActivity({
			from: { id: userData.USER_ID, name: userData.USER_NAME },
			type: 'message',
			text: newItem.message
		}).subscribe(
			id => this.messageSent(id, true),
			error => this.messageSent(error, false)
		);

		this.setState(prevState => ({
		     client_text: "",
			items: prevState.items.concat(newItem),
		}));
	}

	chatBotActivity(act)
	{
		if (DEBUG)
			console.log(act);

		if ((act.from.id===userData.BOT_ID)&&(act.from.name===userData.BOT_NAME))
		{
			if (act.type==="message")
			{

				const newItem = {
					isClient: false,
					message: (act.attachments)?act.attachments[0].content:act.text,
					attachment:(act.attachments!=null)
				}

				this.setState(prevState => ({
					botIsTyping: false,
					items: prevState.items.concat(newItem)
				}));
			}
			else if (act.type==="typing")
			{
				this.setState(prevState => ({
					botIsTyping: true
				}));
			}

		}
	}

	componentDidUpdate()
	{
		this.scrollToBottom();
	}

	componentDidMount()
	{

		directLine.activity$
			.subscribe(
				activity => this.chatBotActivity(activity)
		);
	}

}

ReactDOM.render(<MyChatbotClass />, document.getElementById('mywebchat'));

