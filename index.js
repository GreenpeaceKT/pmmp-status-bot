
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { 
  console.log(`${client.user.tag}が起動しました`);



client.on('message', async message =>{

    

    if(message.author.bot){
        return;
    }
    


if(command === "status"){
        let url = "https://api.mcsrvstat.us/2/yourserverip:yourserverport";//ex)"https://api...../mc.example.com:19132"
        fetch(url)
         .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
　　　message.channel.send({
                    embed: {
                        color: 3447003,
                        author: {
                            name: 'myserver',
                            
                        },
                        title: 'サーバーの状態',
                        fields: [
                            { name: 'IPとPORT', value: jsonData['hostname']+":"+jsonData['port']},
                            { name: '人数', value: jsonData["players"]["online"]+"/"+jsonData["players"]["max"]},
                            { name: 'サーバーにいる人', value: jsonData["players"]["list"]},
                        ],
                        
                    }
                })






}
    }





});


client.login(yourTOKEN);
