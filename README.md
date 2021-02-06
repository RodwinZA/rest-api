# rest-api
Node.js MongoDB RESTful API

Use the fetch api to run in simplest form

fetch("http://localhost:4000/posts")
.then(result => {
  return result.json();
})
.then(data => {
  console.log(data);
})
