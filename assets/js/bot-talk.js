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
                                data.message.text = "`!help` is the only command as of now <br/> This is under development! Stay tuned...."
                                data.isCommand = true
                                data.isEmbed=true
                                resolve(data);
                                break;
                        }
                        default: {
                                resolve(data)
                        }


                }
        })

}