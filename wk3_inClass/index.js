let data;

const getData = async () =>{
    console.log("test");

    try{
        let response = await fetch(`https://rickandmortyapi.com/api/character`);  
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error();
    }
}

const addDataToHtml = async () =>{
    //call the api only once ;)
    if(!data)
        data = await getData();

    // console.log(data);

    // the file has 20 items
    let randomNumber = Math.floor(Math.random() * 20);
    let character = data.results[randomNumber];

    // console.log(character);

    document.querySelector("#content").innerHTML = `
        <h1>${character.name}</h1>
        <img src="${character.image}" width="350" height="500">
    `;
}


let btn = document.querySelector("#btn").addEventListener("click", addDataToHtml);