<<<<<<< HEAD
#!/usr/bin/node

let filename = process.argv[2];
const fs = require('fs');
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
=======
#!/usr/bin/node
>>>>>>> fc5e959e74a77b074c70b21740f492f55b0ef174
