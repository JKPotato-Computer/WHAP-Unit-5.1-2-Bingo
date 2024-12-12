const main = (function() {
	const questionsList = {
		"King Louis XVI" : "",
		"Declaration of the Rights of Man and of the Citizen" : "", 
		"Declaration of Independence" : "",
		"French Revolution" : "",
		"American Revolution" : "",
		"Haitian Revolution" : "",
		"Brazilian Independence" : "",
		"Mexican Revolution" : "",
		"Gran Colombia"  : "",
		"Maximilian Robespierre"  : "",
		"Serfdom" : "",
		"Poverty" : "",
		"Treaty of Vienna" : "",
		"Liberals" : "",
		"Conservative" : "",
		"Federalist" : "",
		"Centralist" : "",
		"Letter from Jamaica" : "",
		"Napoleon Bonaparte" : "",
		"Slave Labor" : "",
		"Nationalism" : "",
		"Democracy" : "",
		"John Locke" : "",
		"Jean-Jacques Rousseau" : "",
		"Mary Wollstonecraft" : "",
		"Olympe de Gouge" : "",
		"Elizabeth Stanton / Seneca Falls" : "",
		"Jean Jacques Dessalines" : "",
		"1832 Reforms Bill" : "",
		"German + Italian Reunification" : "",
		"Propaganda Movement in the Philippines" : "",
		"Writings of Lola Rodriguez de Tio (Puerto Rico)" : "",
		"Balkan Nationalism" : "",
		"Greek Revolution" : "",
		"Mercantilism" : "",
		"Dom Pedro I" : ""
	};
	
	let avaliableList = {...questionsList};
	let alreadySelected = [];
	
	const chooseRandomQuestion = function() {
		let answer = Object.keys(avaliableList)[Math.floor(Math.random() * Object.keys(avaliableList).length)];
		let question = avaliableList[answer];
		delete avaliableList[answer];
		
		alreadySelected.push(answer);
		document.querySelector("#questionBox").textContent = "Hello";
		document.querySelector("#answerBox").textContent = answer;
	}
	
	const resetBingo = function() {
		avaliableList = {...questionsList};
		alreadySelected = [];
	}
	
	const init = function() {
		chooseRandomQuestion();
	}	
	
	return {
		questionsList : questionsList,
		init : init,
		chooseRandomQuestion : chooseRandomQuestion,
		resetBingo : resetBingo
	}
})();