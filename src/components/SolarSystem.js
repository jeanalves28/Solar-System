import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <section>
        <Title headline="Planetas" />
        <div data-testid="solar-system">
          {Planets.map((objPlanet) => {
            const { name, image } = objPlanet;

            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
