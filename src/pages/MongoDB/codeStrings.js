const code1 = 
`db.createUser(
  {
    user: "miusuario",
    pwd: "miPa$$word",
    roles: [{ role: "userAdminAnyDatabase", db: "admin"}]
  }
)`

const code2 = `C:\\Program Files\\MongoDB\\Server\\6.0\\bin`

const code3 =
`security:
  authorization: "enabled"`

const code4 = `mongosh -u user -p --authenticationDatabase admin`

const code5 = `const url = 'mongodb://<user>:<password>@localhost:27017';`

const code6 = 
`use admin
db.getUsers()
db.grantRolesToUser('devB', [{ role: 'readWrite', db: 'client' }]);`

const code7 =
`use admin
db.getUsers()
db.revokeRolesFromUser('devB', [{ role: 'readWrite', db: 'client' }]);`

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
}