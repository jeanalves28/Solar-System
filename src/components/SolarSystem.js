import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {Planets.map((objPlanet) => {
          const { name, image } = objPlanet;

          return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
        })}
      </>
    );
  }
}

export default SolarSystem;
