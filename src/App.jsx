import { Component } from 'react';
import { Header, Missions, SolarSystem } from './components';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<SolarSystem />
				<Missions />
			</>
		);
	}
}

export default App;
