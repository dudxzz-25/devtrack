const STORAGE='devtrack.tasks.v1';
const seed=[
{id:crypto.randomUUID(),title:'Criar pipeline ETL',description:'Validar e carregar dados de vendas.',priority:'Alta',status:'todo'},
{id:crypto.randomUUID(),title:'Treinar modelo',description:'Comparar baseline com Random Forest.',priority:'Média',status:'doing'},
{id:crypto.randomUUID(),title:'Publicar README',description:'Documentar arquitetura e execução.',priority:'Baixa',status:'done'}
];
let tasks=JSON.parse(localStorage.getItem(STORAGE)||'null')||seed;
const columns=[['todo','To Do'],['doing','Doing'],['done','Done']];
const $=s=>document.querySelector(s); const save=()=>localStorage.setItem(STORAGE,JSON.stringify(tasks));
function filtered(){const q=$('#search').value.toLowerCase();const p=$('#priority').value;return tasks.filter(t=>(!q||(t.title+' '+t.description).toLowerCase().includes(q))&&(!p||t.priority===p));}
function render(){const data=filtered();$('#board').innerHTML=columns.map(([key,label])=>`<section class="column"><div class="column-head"><h2>${label}</h2><span>${data.filter(t=>t.status===key).length}</span></div>${data.filter(t=>t.status===key).map(card).join('')}</section>`).join('');}
function card(t){return `<article class="card"><h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.description||'Sem descrição.')}</p><div class="meta"><span class="pill">${t.priority}</span><div class="card-actions"><button onclick="moveTask('${t.id}')">Mover</button><button onclick="editTask('${t.id}')">Editar</button><button onclick="deleteTask('${t.id}')">Excluir</button></div></div></article>`}
function escapeHtml(v){return v.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
window.moveTask=id=>{const t=tasks.find(x=>x.id===id);const order=['todo','doing','done'];t.status=order[(order.indexOf(t.status)+1)%3];save();render();};
window.deleteTask=id=>{if(confirm('Excluir esta tarefa?')){tasks=tasks.filter(x=>x.id!==id);save();render();}};
window.editTask=id=>{const t=tasks.find(x=>x.id===id);$('#taskId').value=t.id;$('#title').value=t.title;$('#description').value=t.description;$('#taskPriority').value=t.priority;$('#status').value=t.status;$('#formTitle').textContent='Editar tarefa';$('#modal').showModal();};
$('#newTask').onclick=()=>{$('#taskForm').reset();$('#taskId').value='';$('#formTitle').textContent='Nova tarefa';$('#modal').showModal();};
$('#cancel').onclick=()=>$('#modal').close();
$('#taskForm').addEventListener('submit',e=>{e.preventDefault();const id=$('#taskId').value;const data={id:id||crypto.randomUUID(),title:$('#title').value.trim(),description:$('#description').value.trim(),priority:$('#taskPriority').value,status:$('#status').value};tasks=id?tasks.map(t=>t.id===id?data:t):[...tasks,data];save();render();$('#modal').close();});
$('#search').oninput=render;$('#priority').onchange=render;$('#reset').onclick=()=>{tasks=structuredClone(seed);save();render();};render();
