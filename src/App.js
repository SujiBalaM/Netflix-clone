
import './App.css';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Movies url="https://api.themoviedb.org/3/trending/movie/week?language=en-US&&api_key=8f058e2bfc1bbc642969aa3d88fa5ff5" title="Trending Movies"  />
      <Movies url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&&api_key=8f058e2bfc1bbc642969aa3d88fa5ff5" title="Top Rated Movies" />
      <Movies url="https://api.themoviedb.org/3/discover/movie?with_genre=35&api_key=8f058e2bfc1bbc642969aa3d88fa5ff5" title="Comedy Movies"/>
      {/* <Movies url="https://api.themoviedb.org/3/discover/movie?with_genre=28&api_key=8f058e2bfc1bbc642969aa3d88fa5ff5" />
      <Movies url="https://api.themoviedb.org/3/discover/movie?with_genre=1079&api_key=8f058e2bfc1bbc642969aa3d88fa5ff5" /> */}

    </div>
  );
}

export default App;
