import React from "react";
import Nav from "./nav";

class App extends React.Component {
	render () {
		return (
			<div id="gglol">
				<Nav />
				{ this.props.children }
			</div>
		);
	};
};

export default App;