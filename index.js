let message = [ 'Guadalupe', 'Ollie', 'Aki' ];

function writeCards(message) {
    let result = []
  for (let i = 0; i < message.length; i++) {
    result.push(`Thank you, ${message[i]}, for the wonderful surprise gift!`);
    debugger;
  }

  return result;
}

function countDown() {
    let countDown = 0; 
    while (countDown < 11) {
      console.log(countDown++);
    }
  
}
  
 
