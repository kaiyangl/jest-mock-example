const getRandomCatFact = async () => {
  console.log('ehehe')
  const response = await fetch('https://cat-fact.herokuapp.com/facts/random?amount=1');
  if (response.ok)  {
    return await response.json();
  }
}

export default getRandomCatFact;