// Mock de credenciais e controle da sessão do aluno
angular.module('ucsalApp')
  .factory('AuthService', function ($window, AlunoService) {
    var CHAVE_SESSAO = 'ucsal_matricula_logada';

    var credenciais = [
      { matricula: '20261001', senha: '123456' },
      { matricula: '20261002', senha: '654321' }
    ];

    // Matrícula do aluno logado (mantida na sessão do navegador)
    var matriculaLogada = $window.sessionStorage.getItem(CHAVE_SESSAO);

    return {
      // Retorna true se matrícula e senha conferem com o mock
      login: function (matricula, senha) {
        for (var i = 0; i < credenciais.length; i++) {
          if (credenciais[i].matricula === matricula && credenciais[i].senha === senha) {
            matriculaLogada = matricula;
            $window.sessionStorage.setItem(CHAVE_SESSAO, matricula);
            return true;
          }
        }
        return false;
      },

      logout: function () {
        matriculaLogada = null;
        $window.sessionStorage.removeItem(CHAVE_SESSAO);
      },

      estaLogado: function () {
        return !!matriculaLogada;
      },

      getAlunoLogado: function () {
        return matriculaLogada ? AlunoService.buscarPorMatricula(matriculaLogada) : null;
      }
    };
  });
