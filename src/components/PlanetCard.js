import React, { Component } from 'react';
import propTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <>
        <div data-testid="planet-card" />
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <figcaption />
        {planetName}
      </>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: propTypes.string.isRequired,
  planetName: propTypes.string.isRequired,
};

export default PlanetCard;
