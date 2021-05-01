
function getDate(){
        var d = new Date();

        var month = d.getMonth() + 1;
        var day = d.getDate();

        // return (day < 10 ? '0' : '') + day + '/' +
        //         (month < 10 ? '0' : '') + month + '/' +
        //         d.getFullYear();
        return "Today at"
}
function getTime(){
        return new Date().toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' })
         
}
var owner = "Atharva Deshpande"
var user = "John Doe"
var ownerClass= "embed-actual-user-name"
var userClass = "diff-color"
async function runBot(event){
        event.preventDefault()
        // await new Promise(r => setTimeout(r, 600));
        var inputText = $('#text-message-input').val()
        notEmbed(inputText,"/assets/img/default.png",user,userClass)
        $('#text-message-input').val('')
        var data = await onMessage(inputText)
        if(data.isCommand){
                if(data.isEmbed){
                       isEmbed(data.message)
                }
                else{
                       notEmbed(data.message.text,"https://avatars.githubusercontent.com/u/43279227?s=400&u=1673f782587866aefc1c751deb798042e21867ab&v=4",owner,ownerClass)

                }
        }
}
function notEmbed(message,image,author,className){
        $('#test').prepend(`
        <div class="main-embed">
                        <div class='embed-user-image'>
                                <img class="embed-real-image"
                                        src="${image}">

                        </div>
                        <div class='embed-message'>
                                <div class='embed-user-name'>
                                        <div class="embed-user">
                                                <span class='${className}'>
                                                        <label>${author}</label>
                                                        <label id="date">${getDate()} ${getTime()}</label>
                                                </span>
                                        </div>
                                        <div style="color:var(--text-normal)">
                                        ${message}
                                        </div>
                                </div>
                        </div>
        </div>
`)
}

function isEmbed(message){
        $('#test').prepend(`
        <div class="main-embed">
                                <div class='embed-user-image'>
                                        <img class="embed-real-image"
                                                src="https://avatars.githubusercontent.com/u/43279227?s=400&u=1673f782587866aefc1c751deb798042e21867ab&v=4">

                                </div>
                                <div class='embed-message'>
                                        <div class='embed-user-name'>
                                                <div class="embed-user">
                                                        <span class='embed-actual-user-name'>
                                                                <label>Atharva Deshpande</label>
                                                                <label id="date">${getDate()} ${getTime()}</label>
                                                        </span>
                                                </div>
                                                <div class='embed-data'>
                                                        <div class="embed-content">
                                                                <!-- <div class="title-bold">
                                                                <p>Hey this is Atharva</p>
                                                        </div>
                                                        <div class='content-body'>
                                                                <p>Site is still under construction!!</p>
                                                        </div> -->
                                                                <div class="content-grid">
                                                                        <div class="grid-item">
                                                                                <p class="title-bold-1">${message.header}</p>
                                                                        </div>
                                                                        <div class="grid-item">
                                                                                <p class="content-body-1">${message.text}</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class='embed-thumbnail'></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
        `)
}