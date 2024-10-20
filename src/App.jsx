import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css'

function App() {
// The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
