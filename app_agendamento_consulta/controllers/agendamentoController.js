function getIndexView(req, res){
    res.render('index.html');
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);
    let form_invalido = campos_invalidos.length > 0;
    res.render('index.html', {form_invalido, campos_invalidos, dados_consulta});
}

module.exports = {
    getIndexView,
    postAgendarConsulta
}

function validarRequisicaoAgendamentoConsulta(dados_consulta){
    let campos_invalidos = [];

    if(dados_consulta.nome.length == 0){
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        campos_invalidos.push("CPF");
    }
    if(dados_consulta.data_nascimento.length == 0){
        campos_invalidos.push("Data de nascimento");
    }
    if(dados_consulta.telefone.length == 0){
        campos_invalidos.push("Telefone");
    }
    if(dados_consulta.cep.length == 0){
        campos_invalidos.push("CEP");
    }
    if(dados_consulta.endereco.length == 0){
        campos_invalidos.push("Endereço");
    }
    if(dados_consulta.clinica.length == 0){
        campos_invalidos.push("Clínica");
    }
    if(dados_consulta.especialidade.length == 0){
        campos_invalidos.push("Especialidade");
    }
    if(dados_consulta.data_consulta.length == 0){
        campos_invalidos.push("Data da consulta");
    } else {
        let hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        let dataConsulta = new Date(dados_consulta.data_consulta);
        if(dataConsulta <= hoje){
            campos_invalidos.push("Data da consulta (deve ser futura)");
        }
    }
    if(dados_consulta.hora_consulta.length == 0){
        campos_invalidos.push("Hora da consulta");
    }

    return campos_invalidos;
}
