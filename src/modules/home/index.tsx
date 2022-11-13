import { Link } from 'react-router-dom';

function Home() {
  return (
    <p>
      This is a blank page <Link to="/vendors"> go to vendors</Link>
    </p>
  );
}

export default Home;
