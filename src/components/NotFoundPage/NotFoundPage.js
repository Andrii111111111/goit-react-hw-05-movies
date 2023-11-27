import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2> Sorry Page Not Found</h2>
      <p>
        Please back to <Link to={'/'}>Home page</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
