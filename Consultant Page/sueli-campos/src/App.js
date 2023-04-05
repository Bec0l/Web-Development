import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import ResponsiveAppBar from './Components/Header';
import Biography from './Components/Biography';
import { Box, Container } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Container>
      <Box>
      <ResponsiveAppBar />
      </Box>
      <Biography />
      <Footer />
      </Container>
    </div>
  );
}

export default App;
