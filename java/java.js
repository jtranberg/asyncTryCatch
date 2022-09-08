
getPlanets().catch((err) => {
    console.log('in catch!!!');
    console.log(err);
})

async function getPlanets() {
  try {  
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
} 
catch(e) {
    console.log('in catch', e);
  }
}
getPlanets();