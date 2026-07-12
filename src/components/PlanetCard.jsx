import { Component } from 'react';
import propTypes from 'prop-types';

class PlanetCard extends Component {
	render() {
		const { planetName, planetImage, planetWidth = '100%' } = this.props;

		return (
			<div className="card-planet">
				<div
					data-testid="planet-card"
					className="image-planet">
					<img
						src={planetImage}
						alt={`Planeta ${planetName}`}
						width={planetWidth}
					/>
				</div>
				<figcaption
					data-testid="planet-name"
					className="name-planet">
					{planetName}
				</figcaption>
			</div>
		);
	}
}

PlanetCard.propTypes = {
	planetImage: propTypes.string.isRequired,
	planetName: propTypes.string.isRequired,
	planetWidth: propTypes.number,
};

export default PlanetCard;
