let formCamisas = $(".form-camisas");

formCamisas.validate({
    errorElement: "li",
    rules: {
      email: {
        required: true,
        email: true
      },
      name: "required",
      tel: "required",
      tecido: "required",
      
      
    },
    messages: {
      email: {
        required: "Precisamos do seu e-mail para entrar em contato.",
        email: "Seu e-mail deve ser no formato nome@dominio.com."
      },
        name: "Por favor, digite seu nome.",
        tel: "Digite o telefone",
        message: "Por favor, escreva uma mensagem.",
        tecido: "Escolha um tecido",
        
  
      }

  });
