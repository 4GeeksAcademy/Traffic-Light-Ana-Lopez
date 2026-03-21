import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Hook from "./Hook.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Hook />
		</div>
	);
};

export default Home;