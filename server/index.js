const express = require('express')
const cors = require('cors')
const { faker } = require('@faker-js/faker');

const app = express()
const port = 8080

app.use(cors())
app.get('/api/v1/data', (req, res) => {
  let resArr = [];
  for (let i = 0; i < +req.query.count; i++) {
    const slideObj = {
      image: `${faker.image.animals()}?${faker.random.alphaNumeric(10)}`,
      link: faker.internet.avatar(),
      text: faker.animal.type()
    }
    resArr.push(slideObj)
  }
  res.send(resArr)
});

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})