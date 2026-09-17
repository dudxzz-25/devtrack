# DevTrack

Kanban responsivo para gerenciamento de tarefas desenvolvido com **HTML, CSS e JavaScript puro**. Os dados são persistidos no `localStorage`, permitindo uso sem backend.

## Funcionalidades
- criar, editar e excluir tarefas;
- mover tarefas entre To Do, Doing e Done;
- filtro por texto e prioridade;
- persistência local;
- contadores por coluna;
- layout responsivo.

## Execução
Abra `index.html` no navegador ou use um servidor local:
```bash
python -m http.server 8000
```
Depois acesse `http://localhost:8000`.

`sql/schema.sql` documenta como o mesmo domínio poderia ser persistido em banco relacional em uma evolução full stack.
