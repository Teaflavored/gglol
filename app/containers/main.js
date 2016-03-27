import React from "react";
import { KEY_CODE_ENTER } from "../constants/keyboardConstants";

class Main extends React.Component {

	constructor(props) {
		super(props);	
		this.state = {
			value: props.value
		};
	};

	handleChange (event) {
		this.setState( { value: event.target.value } );
	};

	handleOnKeyPress (event) {
		if (event.charCode == KEY_CODE_ENTER) {
			console.log("Enter key has been pressed.");
		}
	};

	render () {
		return (
			<div className="main-search__container">
				<input type="search" onChange={this.handleChange.bind(this)}
					onKeyPress={this.handleOnKeyPress.bind(this)}
					state={this.state.value} className="main-search__search-box" autoComplete="off"
					placeholder="Enter the Summoner's name."/>
			</div>
		);
	};
};

Main.propTypes = {
	value: React.PropTypes.string
};

Main.defaultProps = {
	value: ""
};

export default Main;