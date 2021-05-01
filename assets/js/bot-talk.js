async function onMessage(message) {
        var prefix = "!"
        if (!message.startsWith(prefix))
                return {
                        "isCommand": false
                };
        var command = message.split(" ")[0].slice(prefix.length);
        await new Promise(r => setTimeout(r, Math.random()*500));
        return await runCommand(command);
}

function runCommand(command) {
        return new Promise(function (resolve, reject) {
                var data = {
                        "isCommand": false,
                        "isEmbed": false,
                        "message": {
                                "header":"",
                                "text":""
                        }
                }
                switch (command) {
                        case 'help': {
                                data.message.header='Help Menu'
                                data.message.text = "`!contact` - find out how to contact me."
                                data.isCommand = true
                                data.isEmbed=true
                                resolve(data);
                                break;
                        }
                        case 'contact':{
                                data.isCommand=true;
                                data.message.text='You can find this information at the bottom left corner near `Atoo35`'
                                resolve(data);
                                break;
                        }
                        default: {
                                resolve(data)
                        }


                }
        })

}