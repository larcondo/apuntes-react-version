const code1 = `const data = { name: name, password: password }

fetch('http://localhost:3000', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
})
.then(r => r.json())
.then(json => console.log(json))
.catch(e => console.log(e))`

const code2 = `fetch('http://localhost:3000/logout',{
  method: 'GET',
  credentials: 'include'
})
.then(r => r.json())
.then(json => console.log(json))
.catch(e => console.log(e))`

const code3 = `// Para test
function simFetch ( userCred ) {
  const tempUser = { name: 'Pedro', password: 'pascal$123' }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userCred.name !== tempUser.name) reject({ error: 'user' })
      if (userCred.password !== tempUser.password) reject({ error: 'password' })
      resolve({ accessToken: 'asdasirs733497sasd64s'})
    }, 1500)
  })
}
    
  
    
simFetch({name: name, password: password})
  .then(response => {
    // Si la promesa se cumple
  })
  .catch(err => {
    // Si la promesa es rechazada
  })
`

export default {
  code1,
  code2,
  code3,
}