
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import './App.css'

function App() {

  return (
    <>
     
      <Header  />
      <main className='background'>
        <Meals />
      </main>
    </>
  );
}

export default App;
