/*
	AUTHOR: Fábio Pereira da Silva
	YEAR: 2019
	LICENSE: MIT
	EMAIL: fabioegel@gmail.com or fabioegel@protonmail.com

	Customized Language Support interface for myCryptoBot client side

	You can add/modify contents here including adding your own language :)

	Language added here: US English, Brazilian Portuguese, French, Italian and Spanish

	TODO: French, Spanish and Italian languages must be revised. If you want to contribute adding a new language
	please email me at fabioegel@gmail.com or fabioegel@protonmail.com

 */

//Ter Mar 13 13:46:06 BRT 2018 

const PT_BR = 0;
const EN_US = 1;
const FR_FR = 2;
const IT_IT = 3;
const ES_ES = 4;

const chatBotName="CryptoBot";

// TODO: Os idiomas Francês, Espanhol e o Italiano precisam de revisão de um nativo ou uma pessoa que entende o idioma específico

const MESSAGE_PT_BR = {
	msg_welcome_title: "Bem vindo !",
	msg_header_name: "Meu " + chatBotName,
	msg_welcome: "Olá, sou o "+chatBotName+". O primeiro ChatBot libertário treinado para solucionar as suas dúvidas sobre libertarianismo e criptomoedas.",
	msg_welcome2: "Visite o github de meu desenvolvedor para mais detalhes: https://github.com/devfabiosilva",
	msg_welcome3: "Se gostou desse projeto, aceito doações Bitcoin: 1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5",
	msg_welcome4: "Nano: nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb",
	msg_welcome5: "Litecoin: LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f",
	msg_welcome6: "Dogecoin: DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau",
	msg_sent: "Enviado: ",
	msg_received_at: "Recebido às: ",
	msg_dev_company: "Desenvolvido por Fábio Pereira",
	msg_box_hint: "Digite sua mensagem aqui...",
	local: 'pt',
	date_format: 'HH:mm DD/MM/YYYY',
	msg_website:"https://github.com/devfabiosilva",
	msg_website_hint: "Clique aqui e visite meu github para saber mais sobre mim ;)",
	msg_connecting: "Conectando ...",
	msg_connected: "Conectado",
	msg_not_connected: "Não conectado",
	msg_send_hint: "Enviar mensagem"
}

const MESSAGE_EN_US = {
	msg_welcome_title: "Welcome !",
	msg_header_name: "My " + chatBotName,
	msg_welcome: "Hi, I am " + chatBotName+ ". The first libertarian Bot trained to solve your doubts about libertarianism and cryptocurrencies.",
	msg_welcome2: "To know more about my developer visit: https://github.com/devfabiosilva",
	msg_welcome3: "If you liked it please, consider a little donation with: 1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5",
	msg_welcome4: "Nano: nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb",
	msg_welcome5: "Litecoin: LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f",
	msg_welcome6: "Dogecoin: DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau",
	msg_sent: "Sent: ",
	msg_received_at: "Received at: ",
	msg_dev_company: "Developed by Fábio Pereira",
	msg_box_hint: "Your message here...",
	local: 'us',
	date_format: 'HH:mm MM/DD/YYYY',
	msg_website:"https://github.com/devfabiosilva",
	msg_website_hint: "Just click here to visit my github to know more about me ;)",
	msg_connecting: "Connecting ...",
	msg_connected: "Conected",
	msg_not_connected: "Not connected",
	msg_send_hint: "Send message"

}

const MESSAGE_FR_FR = {
	msg_welcome_title: "Benvenue !",
	msg_header_name: "Mon " + chatBotName,
	msg_welcome: "Salut, je suis "+ chatBotName +". Le premier bot libertaire formé pour résoudre vos doutes sur le libertarisme et les crypto-monnaies.",
	msg_welcome2: "Pour en savoir plus sur ma développeur, visitez: https://github.com/devfabiosilva",
	msg_welcome3: "S'il vous plaît faire un don si vous avez aimé avec Bitcoin: 1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5",
	msg_welcome4: "Nano: nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb",
	msg_welcome5: "Litecoin: LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f",
	msg_welcome6: "Dogecoin: DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau",
	msg_sent: "Envoyé: ",
	msg_received_at: "Reçu: ",
	msg_dev_company: "Développé par Fábio Pereira",
	msg_box_hint: "Tapez votre message ...",
	local: 'fr',
	date_format: 'HH:mm DD/MM/YYYY',
	msg_website:"https://github.com/devfabiosilva",
	msg_website_hint: "Cliquez ici pour visiter mon github pour en savoir plus sur moi ;)",
	msg_connecting: "Connecting ...",
	msg_connected: "Connecté",
	msg_not_connected: "Débranché",
	msg_send_hint: "Envoyer le message"

}

const MESSAGE_IT_IT = {
	msg_welcome_title: "Benvenutti !",
	msg_header_name: "Mio " + chatBotName,
	msg_welcome: "Ciao. Io sono "+chatBotName+". Il primo ChatBot libertario a risolvere i loro dubbi sul libertarismo e sulle cripto-monete.",
	msg_welcome2: "Per saperne di più sul mio sviluppatore, visita: https://github.com/devfabiosilva",
	msg_welcome3: "Per favore, fai una donazione se ti è piaciuto con Bitcoin: 1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5",
	msg_welcome4: "Nano: nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb",
	msg_welcome5: "Litecoin: LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f",
	msg_welcome6: "Dogecoin: DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau",
	msg_sent: "Inviato: ",
	msg_received_at: "Ricevuto a: ",
	msg_dev_company: "Sviluppato da Fábio Pereira",
	msg_box_hint: "Il tuo messaggio qui...",
	local: 'it',
	date_format: 'HH:mm DD/MM/YYYY',
	msg_website:"https://github.com/devfabiosilva",
	msg_website_hint: "Fai clic qui per visitare il mio github per saperne di più su di me ;)",
	msg_connecting: "Collegamento ...",
	msg_connected: "Collegato",
	msg_not_connected: "Non collegato",
	msg_send_hint: "Invia messaggio"
}

const MESSAGE_ES_ES = {
	msg_welcome_title: "Bienvenido !",
	msg_header_name: "Mi " + chatBotName,
	msg_welcome: "Hola, soy "+ chatBotName +". El primer bot libertario entrenado para resolver sus dudas sobre el libertarismo y las criptomonedas.",
	msg_welcome2: "Para saber más sobre mi desarrollador, visite: https://github.com/devfabiosilva",
	msg_welcome3: "Si te gustó, considera una pequeña donación con Bitcoin: 1JDckpLRJGhp46LTcjY1vsW19wurZ3L1d5",
	msg_welcome4: "Nano: nano_1cb5fs7xmixqzpitfn9ouy4j1g3hjmdfudc1igt5xhwwps7qdku5htqxmznb",
	msg_welcome5: "Litecoin: LRjEiKadFzPCoGorWvSVUnWPsFyPZGt97f",
	msg_welcome6: "Dogecoin: DRrWWMdwY6AN8rdz7zH2cp3qaK8vSgDTau",
	msg_sent: "Expedido: ",
	msg_received_at: "Recibido en: ",
	msg_dev_company: "Desarrollado por Fábio Pereira",
	msg_box_hint: "Su mensaje aquí...",
	local: 'es',
	date_format: 'HH:mm DD/MM/YYYY',
	msg_website:"https://github.com/devfabiosilva",
	msg_website_hint: "Clic aquí para visitar mi github para saber más sobre mí. ;)",
	msg_connecting: "Conectando ...",
	msg_connected: "Conectado",
	msg_not_connected: "No connectado",
	msg_send_hint: "Enviar mensaje"
}

module.exports = {

	PT_BR, EN_US, FR_FR, IT_IT, ES_ES, chatBotName,
	load_language: function (lang)
	{
		switch(lang)
		{
			case PT_BR:
				return MESSAGE_PT_BR;
			case FR_FR:
				return MESSAGE_FR_FR;
			case IT_IT:
				return MESSAGE_IT_IT;
			case ES_ES:
				return MESSAGE_ES_ES;
			default:
				return MESSAGE_EN_US;
		}
	}
}
