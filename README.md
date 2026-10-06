# DevTrack

Kanban responsivo para gerenciamento de tarefas desenvolvido com **HTML, CSS e JavaScript puro**, com persistência local no navegador e foco em uma experiência simples de produtividade.

## ✨ Funcionalidades

- criar, editar e excluir tarefas;
- mover tarefas entre **To Do, Doing e Done**;
- filtrar por texto e prioridade;
- persistir dados com `localStorage`;
- exibir contadores por coluna;
- restaurar dados de exemplo;
- layout responsivo para desktop e mobile.

## 🛠️ Stack

**HTML5 · CSS3 · JavaScript · LocalStorage**

## 🧩 Arquitetura

O projeto é totalmente client-side:

```text
Interface HTML
    ↓
JavaScript
    ↓
Estado das tarefas
    ↓
LocalStorage
```

Não há dependência de backend para executar a aplicação.

## 📂 Estrutura

```text
devtrack/
├── assets/
│   ├── app.js
│   └── style.css
├── sql/
│   └── schema.sql
├── index.html
└── README.md
```

O arquivo `sql/schema.sql` documenta uma possível evolução para persistência em banco relacional em uma versão full stack.

## ▶️ Como executar

Você pode abrir `index.html` diretamente no navegador ou iniciar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## 🧠 O que este projeto demonstra

- manipulação do DOM;
- gerenciamento de estado no frontend;
- persistência no navegador;
- validação e sanitização de conteúdo;
- responsividade;
- organização de uma aplicação JavaScript sem framework.

## 🚀 Próximas evoluções possíveis

- drag and drop entre colunas;
- datas e responsáveis;
- backend com API;
- autenticação;
- persistência em banco de dados.

---

Desenvolvido por **Eduardo de Toledo Dias**.

[Portfólio](https://dudxzz-25.github.io/portfolio-web/) · [GitHub](https://github.com/dudxzz-25) · [LinkedIn](https://www.linkedin.com/in/eduardo-de-toledo-dias-880b9834b/)