const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = 9000


var obj = {
    "id": 7,
    "name": "FIFA 23",
    "price": 20,
    "size": "50gb",
    "platform": "origin",
    "gpu": "low",
    "category": "Sports" 
}

app.use(express.static('public'));

//start server at port 9000
app.listen(port, () => console.log(`Server listening on port ${port}`))
app.use(express.static(path.join(__dirname, '../frontend/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test1.html'))
})

app.get('/View', (req, res) => {
  fs.readFile('./clothing1.json', (err, data) => {
      if(!err) {
          res.write(data)
          res.end()
          return
      }
      res.write("Error reading clothing.json file")
      res.end()
      console.log("Error reading clothing.json file")
  })
})


app.get('/AddClothing', (req, res) => {
    fs.readFile('./clothing1.json', (err, data) => {
        if(!err) {
            var updated = JSON.parse(data)
            updated.push(obj)
            fs.writeFile('./clothing1.json', JSON.stringify(updated, null, 2), (err) => {
                if(!err) {
                    console.log("File Write Successful")
                }
                else {
                    console.log(err)
                }
            })
        }
    })
    res.statusCode=302
    res.setHeader('Location','/')
    return res.end()
})