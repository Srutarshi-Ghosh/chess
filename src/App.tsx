import React from "react";
import "./App.css";
import GamePage from "./components/GamePage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<GamePage />
			</div>
		</Provider>
	);
}

export default App;
