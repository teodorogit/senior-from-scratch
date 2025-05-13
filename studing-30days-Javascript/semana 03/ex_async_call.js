

// CALLING ASYNC FUNCTIONS  ES6 AND OTHER 

const getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      })
      .catch(error => {
        reject(error);
      });
  });
};

getUsers()

async function getUsuario() {
  await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
// getUsuario()


//  (async function() {
//   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// })();

