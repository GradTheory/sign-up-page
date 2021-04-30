
import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className='max-w-6xl font-body grid md:grid-cols-2 grid-cols-1 gap-x-7 m-auto py-11 px-4  lg:mx-auto xl:mx-auto 2xl:mx-auto'>
      <Left/>
      <Right/>
    </div>
  );
}

export default App;
