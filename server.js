var express = require('express')
var cors = require('cors')
var app = express()
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;
app.use(cors())

app.get('/getdata', (req, res) => {
  const query = req.query.searchname;
  fetch(`https://search-api.swiftype.com/api/v1/public/engines/search.json?q=${query}&page=1&per_page=10&facets%5Bpage%5D%5B%5D=product&facets%5Bpage%5D%5B%5D=website_section&facets%5Bpage%5D%5B%5D=documentation_type&engine_key=5jZG1gmmCTFYbSSDjpqq`)
    .then(resp => resp.json())
    .then(json => res.send(json));
  // res.send('success');
})

app.listen(port, () => console.log('Example app listening on port 3000!'))