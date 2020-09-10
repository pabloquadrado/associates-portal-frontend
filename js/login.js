const Login = {
    initialize: function () {
        $('form').submit(Login.auth);
    },

    auth: function (event) {
        event.preventDefault();

        $.ajax({
            url: 'http://localhost:3333/login',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                code: $('#inputCode').val(),
                password: $('#inputPassword').val(),
                operator: $('#operatorSwitch:checked').length
            }),
            success: function (response) {
                const { user } = response;

                alert('Bem-vindo ' + user.name)
            },
            error: function (response) {
                const errorCode = response.responseJSON.code;

                switch (errorCode) {
                    case 1:
                        alert('O campo "Login" não pode ser vazio.');
                        break;
                    case 2:
                        alert('O campo "Senha" não pode ser vazio.');
                        break;
                    case 3:
                        alert('Usuário não encontrado.');
                        break;
                    case 4:
                        alert('Senha inválida.');
                        break;
                    default:
                        alert('Ocorreu um erro na autenticação. Tente novamente!')
                        break;
                }
            }
        });
    }
};

$(Login.initialize);

