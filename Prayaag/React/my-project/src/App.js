import MoviesList from './components/MoviesList.jsx';
import Counter from './components/functionalCounter.jsx'
import StorePicker from './components/storePicker.jsx';

function App() {
  return (
  <>
    <Counter/>
    <StorePicker/>
    <MoviesList movie1 = "Endgame" movie2 = "Avatar" movie3 = "Train to Busan" movie4 = "Parasyte"/>
  </>

  );
}

export default App;
