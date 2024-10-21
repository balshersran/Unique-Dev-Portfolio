import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <div>
      <nav className='navbar'>
        <li><Link to='/About'> About Me </Link></li>
        <li><Link to='/Portfolio'> Portfolio </Link></li>
        <li><Link to='/Contact'> Contact </Link></li>
        <li><Link to='/Resume'> Resume </Link></li>
      </nav>
    </div>
  );
};
