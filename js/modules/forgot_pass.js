function formatar(mascara, documento) {
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);
  if (texto.substring(0,1) != saida) {
    documento.value += texto.substring(0,1);
  }
}

$('.form-recover-pass').submit(function(e) {
  e.preventDefault();
  var cpf = $('#inputCPF').val();
  if(cpf === '' || cpf.length === 0) {
    $('.validate-msg').slideDown('fast');
    return false;
  } else {
    $('.validate-msg').slideUp('fast');
  }
});