
	function ghori() {
		let somoy = new Date(),
		ghonta = somoy.getHours(),
		minute = somoy.getMinutes(),
		second = somoy.getSeconds(),
		dinrat = ' AM'

		if (ghonta < 12) {

			dinrat = ' PM'
		}

		if (ghonta >12) {

			ghonta = ghonta - 12 ;
		}

		if (ghonta == 0) {
			ghonta=12;
		}

		if (ghonta < 10) {
			ghonta = '0' + ghonta;
		}

		if (minute < 10) {
			minute = '0' + minute;
		}
		if (second < 10) {
			second= '0' +second;
		}

		document.getElementById('clock'). innerHTML= ghonta + ':' +minute + ':' + second+ dinrat;
		
	}
	setInterval(ghori , 1000)