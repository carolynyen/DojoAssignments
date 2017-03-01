
$(document).ready(function(){
    var DIV = $('#thisdiv').get(0);
    DIV.scrollTop = DIV.scrollHeight;
    setInterval(function(){
        $("#outerdiv").load("/chatroom #thisdiv", function () {
            var DIV2 = $('#thisdiv').get(0);
            DIV2.scrollTop = DIV2.scrollHeight;
        });
        console.log('hi');
    }, 2000);
});
