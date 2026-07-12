import { Component } from 'react';
import calendar from '../images/icons/calendar.svg';
import flag from '../images/icons/flag.svg';
import mapPin from '../images/icons/map_pin.svg';
import propTypes from 'prop-types';

class MissionCard extends Component {
	render() {
		const { name, year, country, destination } = this.props;

		return (
			<div
				data-testid="mission-card"
				className="card-mission">
				<span data-testid="mission-name">{name}</span>
				<div />
				<div>
					<img
						src={calendar}
						width="17px"
						height="17px"
						alt="Calendar"
					/>
					<span data-testid="mission-year">{year}</span>
				</div>
				<div>
					<img
						src={mapPin}
						width="17px"
						height="17px"
						alt="Map Pin"
					/>
					<span data-testid="mission-country">{country}</span>
				</div>
				<div>
					<img
						src={flag}
						width="20px"
						height="20px"
						alt="Flag"
					/>
					<span data-testid="mission-destination">{destination}</span>
				</div>
			</div>
		);
	}
}

MissionCard.propTypes = {
	name: propTypes.string.isRequired,
	year: propTypes.string.isRequired,
	country: propTypes.string.isRequired,
	destination: propTypes.string.isRequired,
};

export default MissionCard;
