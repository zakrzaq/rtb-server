const app = require('express')();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.json({
    message: "RTB API"
  })
})

app.listen(port, () => console.log(`Server running on: ${port}`))
