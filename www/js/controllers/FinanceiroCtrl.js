// Consulta financeira por semestre (RF04)
angular.module('ucsalApp')
  .controller('FinanceiroCtrl', function ($scope, $window, $ionicPopup, FinanceiroService) {
    $scope.semestres = FinanceiroService.listarSemestres();
    $scope.mensalidades = FinanceiroService.listarTodas();
    // Começa no semestre mais recente
    $scope.filtro = { semestre: $scope.semestres[$scope.semestres.length - 1] };
    // Guarda qual mensalidade teve o código copiado (para o aviso na tela)
    $scope.copiada = null;

    $scope.copiarCodigo = function (mensalidade) {
      copiarTexto(mensalidade.codigoBarras);
      $scope.copiada = mensalidade;
      $ionicPopup.alert({
        title: 'Código copiado',
        template: 'Linha digitável de ' + mensalidade.mes + ' copiada:<br>' + mensalidade.codigoBarras
      });
    };

    // Copia para a área de transferência (com alternativa para navegadores antigos)
    function copiarTexto(texto) {
      if ($window.navigator.clipboard && $window.navigator.clipboard.writeText) {
        $window.navigator.clipboard.writeText(texto);
        return;
      }
      var campo = $window.document.createElement('textarea');
      campo.value = texto;
      $window.document.body.appendChild(campo);
      campo.select();
      $window.document.execCommand('copy');
      $window.document.body.removeChild(campo);
    }
  });
