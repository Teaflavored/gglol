import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from "./containers/app";
import Main from "./containers/main";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main} />
		</Route>
	</Router>
, document.getElementById("app"));
