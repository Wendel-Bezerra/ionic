// Mural de notícias e eventos (RF02)
angular.module('ucsalApp')
  .controller('NoticiasCtrl', function ($scope, $state, NoticiasService) {
    $scope.publicacoes = NoticiasService.listar();
    $scope.categorias = NoticiasService.listarCategorias();
    // Categoria vazia = mostrar todas
    $scope.filtro = { categoria: '' };

    $scope.abrirDetalhe = function (publicacao) {
      $state.go('app.noticia-detalhe', { id: publicacao.id });
    };
  })

  // Visualização completa de uma publicação
  .controller('NoticiaDetalheCtrl', function ($scope, $stateParams, NoticiasService) {
    $scope.publicacao = NoticiasService.buscarPorId($stateParams.id);
  });
