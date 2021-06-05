import {Container} from '@material-ui/core';
import Navbar from './components/Navbar';
import Routes from './pages/Routes';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Navbar />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
