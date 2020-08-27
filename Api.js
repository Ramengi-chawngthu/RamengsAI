const input = document.getElementById('input');
const generate = document.getElementById('generate');
const jokes = document.getElementById('jokes');

 async function randomFacts (){
   jokes.innerText = '';
    const val = input.value;
    for(i = 0; i<val; i++){
      const data = await fetch('https://api.chucknorris.io/jokes/random').then(resp=> resp.json());
      const dataParsed = data.value.replace(/Chuck Norris/gi,'RamengiAI');
      const li = document.createElement("li");
      li.innerText = `${i+1}. ${dataParsed}`;
      jokes.appendChild(li);
    }
}

generate.addEventListener('click',randomFacts);
