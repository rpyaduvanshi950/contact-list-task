// import ContactListApp from "./components/ContactListApp";

// function App() {
//   return (
//     <ContactListApp/>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import ContactListApp from "./components/ContactListApp";
import Loader from './components/loder/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> : <ContactListApp />}
    </div>
  );
}

export default App;


