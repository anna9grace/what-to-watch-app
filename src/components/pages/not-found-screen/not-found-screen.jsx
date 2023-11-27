
import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div style={{textAlign: 'center'}}>

      <h1>404. Page not found</h1>
      <Link to='/'>Go to main page</Link>
    </div>
  );
}

export default NotFoundScreen;
