import React from 'react'
import {
  Container
} from './styles'

function Header({items}) {
  return (
    <Container style={{textAlign: 'center'}}>
      <h1>SensorTech</h1>
    </Container>
  );
}

export default Header;
