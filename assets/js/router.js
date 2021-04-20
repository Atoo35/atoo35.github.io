function changeRoute(routeName){
        $('#mainFrame').attr('src',`./${routeName}.html`)
        $('.channels').children('div').each(function(){
                // console.log($(this).first().attr("id"));
                $(this).children().each(function(){
                        if($(this).attr('id') == routeName)
                                $(this).addClass('channel-selected')
                        else
                                $(this).removeClass('channel-selected') 
                })
        })
        $(`#${routeName}`).addClass("channel-selected")
        $(`#nav-header-name`).text(routeName)
}