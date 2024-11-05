import React from 'react';
import CustomNotification from './CustomNotification'; // Ensure you import the correct component

const App = () => {
  return (
    <div>
      <h1>My Application</h1>
      <CustomNotification message="This is a custom notification!" />
    </div>
  );
};

export default App;
