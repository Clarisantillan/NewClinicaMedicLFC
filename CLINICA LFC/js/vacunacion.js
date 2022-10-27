const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b5ef6ea07msh5ed9286a4f9beeap1d1c3djsn554d649b3514',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/countries', options)
	.then(response => response.json())
	.then(data =>{
        let pais= document.getElementById('pais');
        pais.innerHTML = data.response 
    })

	.catch(err => console.error(err));