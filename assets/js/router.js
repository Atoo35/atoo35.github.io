function getPageDetails(pageName){
        var data={
                "welcome":false,
                "talk-to-me":true,
                "battleship":false
        }
        return data[pageName]
}
function changeRoute(routeName){
        $('#test').load(`pages/${routeName}.html`,function(response){
        })
        $('.channels').children('div').each(function(){
                // console.log($(this).first().attr("id"));
                $(this).children().each(function(){
                        if($(this).attr('id') == routeName)
                                $(this).addClass('channel-selected')
                        else
                                $(this).removeClass('channel-selected') 
                })
        })
        var disabled =getPageDetails(routeName)
        $(`#text-message-input`).attr('placeholder',disabled?`Message #${routeName}`:`You do not have permission to type in this channel`)
        disabled?$('#text-message-input').prop('disabled',false):$('#text-message-input').prop('disabled',true)
        if(disabled)
                $('#text-message-input').focus()
        $(`#${routeName}`).addClass("channel-selected")
        $(`#nav-header-name`).text(routeName)
}

