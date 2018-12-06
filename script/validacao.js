let form = $(".formulario-contato-home");

form.validate({
    errorElement: "li",
    rules: {
      email: {
        required: true,
        email: true
      },
      name: "required",
      subject: "required",
      message: "required"
    },
    messages: {
      email: {
        required: "Precisamos do seu e-mail para entrar em contato.",
        email: "Seu e-mail deve ser no formato nome@dominio.com."
      },
        name: "Por favor, digite seu nome.",
      }

  });

  let formCamisas = $(".form-camisas");

formCamisas.validate({
    errorElement: "div",
    errorPlacement: function(error, element) {
      let type = $(element).attr("type");
      if(type === 'radio' ) {
        error.insertAfter(element.closest('.form-item'))
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      email: {
        required: true,
        email: true
      },
      camisaGenero: "required",
      camisa: "required",
      colarinho: "required",
      punho: "required",
      vista: "required",
      bolso: "required",
      tamanho: "required",
      name: "required",
      tel: "required",
      tecido: "required"
      
    },
    messages: {
      email: {
        required: "Precisamos do seu e-mail para entrar em contato.",
        email: "Seu e-mail deve ser no formato nome@dominio.com."
      },
      name: "Por favor, digite seu nome.",
      tel: "Digite o telefone.",
      message: "Por favor, escreva uma mensagem.",
      genero: "Por favor, escolhe o gênero.",
      tecido: "Escolha um tecido.",
      camisaGenero: "Escolha o estilo da camisa.",
      camisa: "Escolha o estilo da camisa.",
      colarinho: "Escolha o estilo do colarinho.",
      punho: "Escolha o estilo do punho.",
      vista: "Escolha o estilo da vista.",
      bolso: "Escolha se a sua camisa vai ter bolso.",
      tamanho: "Escolha o tamanho da sua casmisa."

      }
  });

 function isInputNumber(evt) {
    let ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))){
      evt.preventDefault()

} }