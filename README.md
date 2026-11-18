# Portal do Aluno UCSal

MVP front-end em **Ionic Framework (v1) + AngularJS**. Todos os dados são mockados
nos Services (sem back-end).

## Como rodar

```bash
npm start
```

Abre em `http://localhost:8100`. (Qualquer servidor estático apontando para `www/` também funciona.)

## Login de teste

| Matrícula | Senha  |
|-----------|--------|
| 20261001  | 123456 |
| 20261002  | 654321 |

## Funcionalidades

- **RF01 Login** – valida matrícula/senha no `AuthService` e bloqueia campos vazios.
- **RF02 Notícias e Eventos** – cards com filtro por categoria e tela de detalhe ("Ler mais").
- **RF03 Atualização Cadastral** – nome, matrícula e curso bloqueados; contato e endereço
  editáveis, salvos no `AlunoService` e no `localStorage`.
- **RF04 Financeiro** – mensalidades por semestre, status por cor e botão "Copiar Código de Barras".

## Estrutura

```
www/
├── css/style.css          # cores da UCSal (variáveis CSS)
├── img/
├── js/
│   ├── app.js             # módulo e rotas ($stateProvider)
│   ├── controllers/
│   └── services/          # dados mockados
├── lib/                   # Ionic + AngularJS
├── templates/
└── index.html
```
