function calcMat(){
	var output = document.getElementById('output');
	var input = document.getElementById('input').value;
	var recipe="Materials Needed: <br>";
	recipe+= input*2 + " Metal Pipes, ";
	recipe+= input*650 +" gunpowder, ";
	recipe+= input*30 +" low grade fuel, ";
	recipe+= input*100 +" sulfur, and "+ input*100 +" metal frag.<br><br>";
	recipe+= "Basic Materials Needed: <br>";
	recipe+= input*2 + " Metal Pipes, " +input*1400 +" sulfur, "+input*1950 +" charcoal, "+input*90+" animal fat, and "+input*30+" cloth.";

	output.innerHTML = recipe;
	//1 rocket is 2 metal pipe
	//650 gunpowder, 30 low grade, 100 sulfur and 100 metal frag
	//650 gunpowder is 65*20=1300 Sulfur and 65*30=1950 Charcoal
	//Grand Total 2 metal pipe, 1400 sulfur, 1950 Charcoal, 90 animal fat, 30 cloth
}