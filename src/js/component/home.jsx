import React from "react";
import Navbar from "./navBar";
import Card from "./card"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			 <Navbar/>
			 <Jumbotron/>
			 <Card/>
			


		</div>
	);
};

export default Home;
