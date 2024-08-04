 function Addtext(){
     var inputValue = document.getElementById('input').value;
     document.getElementById('body').innerHTML += '<h1>'+ inputValue +'</h1>'
     console.log(inputValue);    
}

function AddNumbers(){
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    document.getElementById('result').innerHTML =  parseInt(input1) + parseInt(input2);
    
}