let dice = process.argv.slice(2)
  function rollDice(dice) {
    let result = []
      for (let i = 0; i < dice; i++ ) {
      let randomNum = Math.floor(Math.random() * 6);
     result.push(randomNum)
   } return `Rolled ${dice} dice: ${result.join(", ")}`
  }
  

