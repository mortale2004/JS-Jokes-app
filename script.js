const btn = document.getElementById("btn");
const header = document.getElementById("header");
const joke = document.getElementById("joke");



const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'oWibNJ3aAa5TkvBj/cEhdQ==jwTFqTfr9l3W2OcV'
	}
};


const getData =async ()=>{

    try {
        joke.innerText = "Loading..."
        btn.innerText = "Please Wait..."
        const response = await fetch(url, options);
        const result = await response.json();
        joke.innerText = result[0].joke
        btn.innerText = "Tell Me A Joke";
    } catch (error) {
        console.error(error);
    }
}


btn.addEventListener("click", ()=>{
    getData();
})