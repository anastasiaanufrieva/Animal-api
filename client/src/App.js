import { Container } from 'reactstrap'
import { Routes, Route } from 'react-router-dom';
import MyNav from './components/Nav/Nav';
import MainPage from './components/MainPage/MainPage';
import Cat from './components/Cat/Cat';
import Dog from './components/Dog/Dog';
import './App.css'
import Favourite from './components/Favourite/Favourite';

function App() {
  return (
    <Container>
      <MyNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </Container>
  );
}

export default App;
