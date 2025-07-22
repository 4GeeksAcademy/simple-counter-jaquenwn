import React, { useState, useEffect } from "react";
import Card from './Card';
import Clock from './Clock';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	 const [start, setStart] = useState(null);
	 const [time, setTime] = useState(0);
  	 useEffect(() => {
	 	setStart (Date.now());
     	//create your first component
		const interval = setInterval(() => {
	 		const elapsedtime = Date.now() - start
	 		setTime(Math.floor(elapsedtime / 1000));
     	}, 1000);

	 	return () => clearInterval(interval);
  	 }, [start]);
 		
	// Esta parte toma el tiempo y le quita la unidad menor siguiente 
	 let t1 = Math.floor(time/10)
	 let t2 = Math.floor(time/100)
	 let t3 = Math.floor(time/1000)
	 let t4 = Math.floor(time/10000)
	 let t5 = Math.floor(time/100000)

	 // Esta parte le quita las unidades mayores siguientes
	 let uni1 = t1 - (t2*10)
	 let uni2 = t2 - (t3*10)
	 let uni3 = t3 - (t4*10)
	 let uni4 = t4 - (t5*10)

	  // construccion de unidades solas
	 let sumaTotal = uni1*10 + uni2*100 +uni3*1000 + uni4*10000+ t5
	 let segUni = time - sumaTotal
	return (
		<div className="text-center d-flex justify-content-center bg-dark">
            <Clock/>
			<Card text={t5} />
			<Card text={uni4}/>
			<Card text={uni3}/>
			<Card text={uni2}/>
			<Card text={uni1}/> 
			<Card text={segUni}/>
		</div>
	);
};

export default Home;