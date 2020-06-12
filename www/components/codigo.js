// This is a JavaScript file
function ver(){
  var result = document.getElementById('txtBox').value;
  if(result == 'SPEEDWAGON'){
    navigator.notification.alert('Parabéns', null, 'acertou o nome da melhor waifu de JoJo', 'Nice');
  }else{
    navigator.vibrate(1000);
    lim();
  }
}

function letra(i, h){
  document.getElementById('txtBox').value += h;
  document.getElementById(i).disabled = true;
  navigator.notification.beep(1);
}

function lim(){
  var ids = ['W', 'S', 'A', 'T', 'O', 'P', 'D', 'E', 'G', 'K', 'N', 'E1'];

  document.getElementById('txtBox').value = '';

  for(x = 0; x <= ids.length; x++){
    document.getElementById(ids[x]).disabled = false;    
  }
}
