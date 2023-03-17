const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(`Error fetching data from ${url}: ${error}`));
}

// function to measure time taken for Promise.all
function measurePromiseAll() {
  const start = Date.now();
  Promise.all(apiUrls.map(fetchData))
    .then(() => {
      const end = Date.now();
      const timeTaken = end - start;
      document.getElementById('output-all').innerHTML = `${timeTaken}ms`;
    });
}

// function to measure time taken for Promise.any
function measurePromiseAny() {
  const start = Date.now();
  Promise.any(apiUrls.map(fetchData))
    .then(() => {
      const end = Date.now();
      const timeTaken = end - start;
      document.getElementById('output-any').innerHTML = `${timeTaken}ms`;
    });
}

// call the functions to measure performance
measurePromiseAll();
measurePromiseAny();