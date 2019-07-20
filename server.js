// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const port = 3333;
// const server = express();
// const token =
//   'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

// const sendUserError = (msg, res) => {
//   res.status(422);
//   res.json({ Error: msg });
//   return;
// };

// let smurfs = [
//   {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm',
//     id: 0
//   }
// ];

// let smurfId = smurfs.length;

// server.use(bodyParser.json());

// server.use(cors());

// function authenticator(req, res, next) {
//   const { authorization } = req.headers;
//   if (authorization === token) {
//     next();
//   } else {
//     res.status(403).json({ error: 'User be logged in to do that.' });
//   }
// }

// server.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   if (username === 'Papa Smurf' && password === 'smurfking') {
//     req.loggedIn = true;
//     res.status(200).json({
//       payload: token
//     });
//   } else {
//     res
//       .status(403)
//       .json({ error: 'Username or Password incorrect. Please see Readme' });
//   }
// });

// server.get('/smurfs', authenticator, (req, res) => {
//   res.send(smurfs);
// });

// server.post('/smurfs', authenticator, (req, res) => {
//   const { name, age, height } = req.body;
//   const newSmurf = { name, age, height, id: smurfId };
//   if (!name || !age || !height) {
//     return sendUserError(
//       'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
//       res
//     );
//   }
//   const findSmurfByName = smurf => {
//     return smurf.name === name;
//   };
//   if (smurfs.find(findSmurfByName)) {
//     return sendUserError(
//       `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
//       res
//     );
//   }

//   smurfs.push(newSmurf);
//   smurfId++;
//   res.send(smurfs);
// });

// server.put('/smurfs/:id', authenticator, (req, res) => {
//   const { id } = req.params;
//   const { name, age, height } = req.body;
//   const findSmurfById = smurf => {
//     return smurf.id == id;
//   };
//   const foundSmurf = smurfs.find(findSmurfById);
//   if (!foundSmurf) {
//     return sendUserError('No Smurf found by that ID', res);
//   } else {
//     if (name) foundSmurf.name = name;
//     if (age) foundSmurf.age = age;
//     if (height) foundSmurf.height = height;
//     res.send(smurfs);
//   }
// });

// server.delete('/smurfs/:id', authenticator, (req, res) => {
//   const { id } = req.params;
//   const foundSmurf = smurfs.find(smurf => smurf.id == id);

//   if (foundSmurf) {
//     const SmurfRemoved = { ...foundSmurf };
//     smurfs = smurfs.filter(smurf => smurf.id != id);
//     res.status(200).send(smurfs);
//   } else {
//     sendUserError('No smurf by that ID exists in the smurf DB', res);
//   }
// });

// server.listen(port, err => {
//   if (err) console.log(err);
//   console.log(`server is listening on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    name: 'Brainey',
    age: 200,
    height: '5cm',
    id: 0
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
