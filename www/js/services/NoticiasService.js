// Array mockado de notícias e atividades/eventos da UCSal
angular.module('ucsalApp')
  .factory('NoticiasService', function () {
    var publicacoes = [
      {
        id: 1,
        titulo: 'Rematrícula 2027.1: prazo até 15 de dezembro',
        data: '2026-11-10',
        categoria: 'Notícia',
        imagem: 'img/noticia.svg',
        resumo: 'Alunos veteranos já podem renovar a matrícula pelo portal.',
        conteudo: 'O período de rematrícula para o semestre 2027.1 está aberto até 15 de dezembro. ' +
          'O aluno deve estar em dia com as mensalidades e confirmar as disciplinas pelo portal acadêmico.'
      },
      {
        id: 2,
        titulo: 'Semoc 2026 - Semana de Mobilização Científica',
        data: '2026-10-19',
        categoria: 'Evento',
        imagem: 'img/evento.svg',
        resumo: 'A Semoc acontece no campus de Pituaçu com palestras e minicursos.',
        conteudo: 'A Semana de Mobilização Científica (Semoc) reúne estudantes, professores e pesquisadores ' +
          'no campus de Pituaçu. A programação inclui palestras, minicursos e apresentação de trabalhos.'
      },
      {
        id: 3,
        titulo: 'Edital de Iniciação Científica 2027',
        data: '2026-11-03',
        categoria: 'Notícia',
        imagem: 'img/noticia.svg',
        resumo: 'Inscrições abertas para bolsas de iniciação científica.',
        conteudo: 'Está aberto o edital de Iniciação Científica 2027. Os interessados devem procurar um ' +
          'professor orientador e enviar o plano de trabalho até 30 de novembro.'
      },
      {
        id: 4,
        titulo: 'Maratona de Programação UCSal',
        data: '2026-11-28',
        categoria: 'Evento',
        imagem: 'img/evento.svg',
        resumo: 'Equipes de até 3 alunos competem no campus da Federação.',
        conteudo: 'A Escola de Tecnologias promove a Maratona de Programação no campus da Federação. ' +
          'As equipes devem ter até 3 alunos e as inscrições são feitas na coordenação do curso.'
      },
      {
        id: 5,
        titulo: 'Projeto de Extensão: Inclusão Digital na Comunidade',
        data: '2026-11-21',
        categoria: 'Evento',
        imagem: 'img/evento.svg',
        resumo: 'Alunos voluntários darão oficinas de informática básica.',
        conteudo: 'O projeto de extensão Inclusão Digital busca alunos voluntários para ministrar oficinas ' +
          'de informática básica para moradores do entorno do campus de Pituaçu.'
      }
    ];

    return {
      listar: function () {
        return publicacoes;
      },

      listarCategorias: function () {
        return ['Notícia', 'Evento'];
      },

      buscarPorId: function (id) {
        for (var i = 0; i < publicacoes.length; i++) {
          if (publicacoes[i].id === Number(id)) {
            return publicacoes[i];
          }
        }
        return null;
      }
    };
  });
