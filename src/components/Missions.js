import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <section>
        <Title headline="Missões" />
        <div data-testid="missions">
          {missions.map((objMission) => {
            const { name, year, country, destination } = objMission;

            return (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Missions;
