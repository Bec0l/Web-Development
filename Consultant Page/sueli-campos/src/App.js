import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Biography from './Components/Biography';
import { Container } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Container>
      <Header />
      <Biography />
      <Footer />
      </Container>
    </div>
  );
}

export default App;
