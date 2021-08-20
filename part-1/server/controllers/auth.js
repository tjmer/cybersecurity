const bcrypt = require("bcryptjs")
const users = []


module.exports = {
  login: (req, res) => {
    
    console.log('Logging In User')
    console.log(req.body)
    const { username, password } = req.body
    for (let i = 0; i < users.length; i++) {
      // console.log(users[i])
      const passComp = bcrypt.compareSync(password, users[i].password)
      if (users[i].username === username) {
        if(passComp){
          let userToReturn = {...users[i]}
          delete userToReturn.passHash
          res.status(200).send(userToReturn)
          return
        }
        // res.status(200).send(users[i])
      }
    }
    
    res.status(400).send("User not found.")
  },
  register: (req, res) => {
    const {username, password, email, firstName, lastName} = req.body
    const salt = bcrypt.genSaltSync(5)
    const passHash = bcrypt.hashSync(password, salt)

      console.log('Registering User')
      req.body.password = passHash
      console.log(req.body)
      users.push(req.body)
      res.status(200).send(req.body)
    }
}