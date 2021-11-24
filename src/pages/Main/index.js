import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import TableTemperature from '../../components/TableTemperature';
import { temperatureData } from '../../utils/checkTemperatureData'
import { Container } from './styles'

function Main() {
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
    <>
    <Header />
    <Container className="App">
      <h2>Beers</h2>
      {items && (
        <TableTemperature items={items} />
      )}
    </Container>
    </>
  );
}

export default Main;
