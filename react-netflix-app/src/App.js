import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}></Row>
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      ></Row>
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
    </div>
  );
}

export default App;
