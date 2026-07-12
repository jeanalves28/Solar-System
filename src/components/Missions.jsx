import { Component } from 'react';
import { missions } from '../data';
import MissionCard from './MissionCard';

class Missions extends Component {
	render() {
		return (
			<section className="section-missions">
				<h2 className="title-missions">MISSÕES</h2>
				<div
					data-testid="missions"
					className="grid-missions">
					{missions.map((objMission) => {
						const { name, year, country, destination } = objMission;

						return (
							<MissionCard
								key={name}
								name={name}
								year={year}
								country={country}
								destination={destination}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

export default Missions;
