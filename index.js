const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/public/"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

var port_number = server.listen(process.env.PORT || 5000);
app.listen(port_number, () => {
  console.log('webgl-daftacademy on 5000!')
});
