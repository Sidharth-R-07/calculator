function btnclick(val){
    document.getElementById('textfield').value+=val
}


function btnclear(){
    document.getElementById('textfield').value=''
}

function btnequal(){
    var text=document.getElementById('textfield').value
    var result=eval(text)
    document.getElementById('textfield').value=result;
}