// Tela de login (RF01)
angular.module('ucsalApp')
  .controller('LoginCtrl', function ($scope, $state, $ionicHistory, AuthService) {
    $scope.dados = { matricula: '', senha: '' };
    $scope.erro = '';

    $scope.entrar = function () {
      // Impede o envio de campos vazios
      if (!$scope.dados.matricula || !$scope.dados.senha) {
        $scope.erro = 'Informe a matrícula e a senha.';
        return;
      }

      if (AuthService.login($scope.dados.matricula, $scope.dados.senha)) {
        $scope.erro = '';
        $scope.dados = { matricula: '', senha: '' };
        // A home vira a raiz do histórico (sem botão voltar para o login)
        $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
        $state.go('app.noticias');
      } else {
        $scope.erro = 'Matrícula ou senha inválida.';
      }
    };
  });
