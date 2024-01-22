import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import keys from './varprod.json' assert {type: 'json'};
console.log(keys,keys["APIKEY"])
const rest = new REST({ version: '10' }).setToken(keys["APIKEY"]);
import fetch from 'node-fetch'; // Importez le module fetch
const fs = import('fs');
const userIDFeminin = ['346737432869470219','349898990088749056','280804408457953280','776137866636034079','152527402252238848','280804408457953280','270279322755923969'];
const client = new Client({
	intents: [ // Toutes les autorisations du BOT
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessageReactions,
	],
});
client.on('messageCreate', (message) => {
  if (message.author.bot) return; // ignore les messages des bots
  const auteurid = message.author.id;
  // récupère le contenu en minuscule (jsp pourquoi mais les gens font ça, peut être pour éviter un tableau avec plusieurs valeurs du même mot)
  const content = message.content.toLowerCase();
  // regarde si le message se termine par "quoi" (en excluant la ponctuation finale)
  // Créez un tableau de réponses possibles
  const reponsesAuteurM = ['feur', 'bah juste feur en fait','bah feur écoute','feur je crois ?','heu feur ?','juste feur mon pote'];
  const reponsesAuteurF = ['feur', 'bah juste feur en fait','bah feur écoute','feur je crois ?','heu feur ?','juste feur ma pote'];
  const reponseAleatoireM = reponsesAuteurM[Math.floor(Math.random() * reponsesAuteurM.length)];
  const reponseAleatoireF= reponsesAuteurF[Math.floor(Math.random() * reponsesAuteurF.length)];
  if (content.match(/\bquoi\s*[.!?]*\s*$/)) {
    // répond feur
    if(userIDFeminin.includes(auteurid)) {
    message.channel.send(reponseAleatoireF);
    }
    else {
      message.channel.send(reponseAleatoireM);  
    }
   }  
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // ignore les messages des bots
  // récupère le contenu en minuscule (jsp pourquoi mais les gens font ça, peut être pour éviter un tableau avec plusieurs valeurs du même mot)
  const content = message.content.toLowerCase();
  // regarde si le message se termine par "quoicoubé" (en excluant la ponctuation finale)
  if (content.match(/quoicoubé\s*[.!?]*\s*$/)) {
    // Répondez avec t'as les cramptés?
    message.channel.send('T\'AS LES CRAMPTÉS?');
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // ignore les messages des bots
  const auteurid = message.author.id;
  // récupère le contenu en minuscule (jsp pourquoi mais les gens font ça, peut être pour éviter un tableau avec plusieurs valeurs du même mot)
  const content = message.content.toLowerCase();
  // regarde si le message se termine par "quoi" (en excluant la ponctuation finale)
  // Créez un tableau de réponses possibles
  const reponsesAuteurM = ['pour feur je crois mec',"bah clairement pour feur mec"];
  const reponsesAuteurF = ['pour feur je crois meuf',"bah clairement pour feur meuf"];
  const reponseAleatoireM = reponsesAuteurM[Math.floor(Math.random() * reponsesAuteurM.length)];
  const reponseAleatoireF= reponsesAuteurF[Math.floor(Math.random() * reponsesAuteurF.length)];
  if (content.match(/pourquoi\s*[.!?]*\s*$/)) {
    // répond feur
    if(userIDFeminin.includes(auteurid)) {
    message.channel.send(reponseAleatoireF);
    }
    else {
      message.channel.send(reponseAleatoireM);  
    }
   }  
});

client.on('ready', () => {
  console.log(`Connecté sous ${client.user.tag}!`);
});
client.login(keys["APIKEY"]);