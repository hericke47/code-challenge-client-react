import { useEffect, useState } from 'react';
import TableTemperature from './components/TableTemperature';
import { temperatureData } from './utils/checkTemperatureData'

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
    temperatureData.forEach((product) => {
        fetch(`http://localhost:8081/temperature/${product.id}`)
          .then((response) => response.json())
          .then((response) =>
            setItems((prevItems) => ({
              ...prevItems,
              [product.id]: {
                ...product,
                ...response,
              },
            }))
          );
      });

    setInterval(request, 5000);

    request();
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
      {items && (
        <TableTemperature items={items} />
      )}
    </div>
  );
}

export default App;
