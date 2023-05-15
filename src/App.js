import Header from './components/Header.jsx';
import Tlist from './components/tlist.jsx';

const tasklist = [

  {

    title: 'Humber',

    tasks: ['Task 1', 'Task 2', 'Task 3'],

    id: 1,

  },

  {

    title: 'MERN',

    tasks: ['Lab', 'Project', 'Quiz'],

    id: 2,

  },

  {

    title: 'Java',

    tasks: ['Group Discussion', 'Exam', 'Assignment'],

    id: 3,

  },

]

let number = 0;

for (let i = 0; i < tasklist.length; i++) {
    number += tasklist[i].tasks.length;
  }
 
const App = () => {
  return (
    <div>
      <Header title='Task List' totalnumbertask={number} />
        
      {tasklist.map((t) => (
        <Tlist title={t.title} tasks={t.tasks} key={t.id.toString()} />
      ))}
    </div>
  );
};

export default App;
