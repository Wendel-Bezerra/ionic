// Atualização cadastral (RF03)
angular.module('ucsalApp')
  .controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {
    $scope.erro = '';

    // Recarrega os dados do aluno sempre que a tela é aberta
    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.aluno = AuthService.getAlunoLogado();
      $scope.erro = '';
    });

    $scope.salvar = function () {
      if (!$scope.aluno.email || !$scope.aluno.telefone) {
        $scope.erro = 'E-mail e telefone são obrigatórios.';
        return;
      }

      $scope.erro = '';
      AlunoService.atualizarContato($scope.aluno.matricula, $scope.aluno);
      $ionicPopup.alert({
        title: 'Sucesso',
        template: 'Dados atualizados com sucesso!'
      });
    };
  });
