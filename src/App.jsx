import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

// The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
