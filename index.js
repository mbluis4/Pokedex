const poketable = document.getElementById('poketable')
const searchName = document.getElementById('search')

let getPokemon = async () => {
  const res = await fetch("pokemon.json");
  const data = await res.json();
  return data
};


let renderPokemons = (pok) => {
    let pokemonHtml = ''
        pokemonHtml += `
        <div class='a-pokemon' id='a-pokemon'>
        <div class='pokemon-id'>${pok.id}</div>
        <div class='pokemon-name'>${pok.name.english}</div>
        <div class='pokemon-type'>${pok.type.join('/')}</div>
        <div class='pokemon-stat'>HP: ${pok.base.HP}</div>
        <div class='pokemon-stat'>Attack: ${pok.base.Attack}</div>
        <div class='pokemon-stat'>Defense: ${pok.base.Defense}</div>
        <div class='pokemon-stat'>Speed: ${pok.base.Speed}</div>
        <div class='pokemon-other-name'>${pok.name.japanese}</div>
        <div class='pokemon-other-name'>${pok.name.chinese}</div>
        <div class='pokemon-other-name'>${pok.name.french}</div>
        </div>
        `
    return pokemonHtml
}

let searchNames = (event) => {
    let pokemonCollection = document.getElementsByClassName('pokemon-name')
    let searchQuery = event.target.value.toLowerCase()
    for (const name of pokemonCollection) {
      if (name.innerText.toLowerCase().includes(searchQuery)) {
        name.closest('#a-pokemon').style.display = 'grid'
      } else {
        name.closest('#a-pokemon').style.display = 'none'
      }
    }
  
}

getPokemon().then((data) => {
    //render pokemons
    poketable.innerHTML +=  data.map(renderPokemons).join('')
    //search
    searchName.addEventListener('keyup', searchNames)
});
