const input = document.getElementById('input');
const generate = document.getElementById('generate');
const jokes = document.getElementById('jokes');

 async function randomFacts (){
   jokes.innerText = '';
    const val = input.value;
    // let data, li;
    for(i = 0; i<val; i++){
      const data = await fetch('https://api.chucknorris.io/jokes/random').then(resp=> resp.json());
      console.log(data.value);
      const li = document.createElement("li");
      li.innerText = `${i+1}. ${data.value}`;
      jokes.appendChild(li);
    }
}

generate.addEventListener('click',randomFacts);
