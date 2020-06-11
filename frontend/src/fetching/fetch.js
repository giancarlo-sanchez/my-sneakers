export default async function fetchSneaker(){
  try{
    const sneaker = await fetch("http://localhost:8000/sneakers/");
    // .then(res => res.json())
    // .then(data => this.setState({
    //   sneakers: data,
    if(!sneaker.ok){
      throw sneaker;
    }


    return await sneaker.json();

  }catch(err){
    console.error(err);
  }
}
