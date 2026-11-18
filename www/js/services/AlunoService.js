// Dados cadastrais mockados dos alunos e métodos de consulta/edição
angular.module('ucsalApp')
  .factory('AlunoService', function ($window) {
    var CHAVE_STORAGE = 'ucsal_alunos';

    var alunos = [
      {
        matricula: '20261001',
        nome: 'Maria Clara Santos',
        curso: 'Engenharia de Software',
        email: 'maria.santos@email.com',
        telefone: '(71) 99999-1001',
        endereco: {
          cep: '41740-090',
          rua: 'Av. Prof. Pinto de Aguiar, 2589',
          bairro: 'Pituaçu',
          cidade: 'Salvador'
        }
      },
      {
        matricula: '20261002',
        nome: 'João Pedro Oliveira',
        curso: 'Engenharia de Software',
        email: 'joao.oliveira@email.com',
        telefone: '(71) 98888-1002',
        endereco: {
          cep: '40231-902',
          rua: 'Av. Cardeal da Silva, 205',
          bairro: 'Federação',
          cidade: 'Salvador'
        }
      }
    ];

    // Se houver dados salvos no localStorage, eles substituem o mock inicial
    var salvos = $window.localStorage.getItem(CHAVE_STORAGE);
    if (salvos) {
      alunos = JSON.parse(salvos);
    }

    function encontrar(matricula) {
      for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula === matricula) {
          return alunos[i];
        }
      }
      return null;
    }

    return {
      // Retorna uma cópia para a tela não alterar o mock antes de salvar
      buscarPorMatricula: function (matricula) {
        return angular.copy(encontrar(matricula));
      },

      // Atualiza somente os campos editáveis (contato e endereço)
      atualizarContato: function (matricula, dados) {
        var aluno = encontrar(matricula);
        if (!aluno) {
          return false;
        }
        aluno.email = dados.email;
        aluno.telefone = dados.telefone;
        aluno.endereco = angular.copy(dados.endereco);
        $window.localStorage.setItem(CHAVE_STORAGE, JSON.stringify(alunos));
        return true;
      }
    };
  });
