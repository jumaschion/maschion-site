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
        subject: "Por favor, escreva o assunto.",
        message: "Por favor, escreva uma mensagem."
      }

  });

  let formCamisas = $(".form-camisas");

  formCamisas.validate({
      errorElement: "li",
      rules: {
        email: {
          required: true,
          email: true,
          tel: true
        },
        name: "required",
      },
      messages: {
        email: {
          required: "Precisamos do seu e-mail para entrar em contato.",
          email: "Seu e-mail deve ser no formato nome@dominio.com."
        },
          name: "Por favor, digite seu nome.",
          tel: "Por favor, coloque o seu telefone.",
        }
  
    });
 