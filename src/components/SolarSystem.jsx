import { Component } from 'react';
import { planets } from '../data';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
	render() {
		return (
			<section className="section-planets">
				<h2>PLANETAS</h2>
				<div
					data-testid="solar-system"
					className="row-planets">
					{planets.map(({ name, image, width }, i) => {
						return (
							<PlanetCard
								key={`planet-card-${i + 1}`}
								planetName={name}
								planetImage={image}
								planetWidth={width}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

export default SolarSystem;
