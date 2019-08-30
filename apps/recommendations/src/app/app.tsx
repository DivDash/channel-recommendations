import React, { useEffect, useState } from 'react';
import { Message } from '@recommendation/api-interfaces';
import Recommendations from './Components/Recommended_Channels';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Channel Recommendations System!</h1>
      </div>
      <>
        <Recommendations/>
      </>
      <div>{m.message}</div>
    </>
  );
};

export default App;
