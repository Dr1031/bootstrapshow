/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2017-09-14 13:42:58
 * @version $Id$
 */


$(document).ready(function(){
    $("#demo-navbar .dropdown-menu a").click(function(){
        //通过attr获取a链接值
        var href = $(this).attr("href");
        //执行tab(show);
        $("#tab-list a[href='"+ href +"']").tab("show");
    });
});