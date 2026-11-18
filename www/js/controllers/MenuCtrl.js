// Menu lateral: mostra o aluno logado e faz o logout
angular.module('ucsalApp')
  .controller('MenuCtrl', function ($scope, $state, $ionicHistory, AuthService) {
    $scope.aluno = AuthService.getAlunoLogado();

    $scope.sair = function () {
      AuthService.logout();
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
      $state.go('login');
    };
  });
