const bodyParser = require('body-parser');
const express = require("express");
const _ = require("lodash");


/*
APIS
// get all chat, limit, offset
// get all chat details, limit, offset
// get all calls
// add new chat
*/

const sampleData = [
  {
    id:1,
    name: "Harriet Woods",
    message: "Aliqua mollit consectetur incididunt proident adipisicing elit cillum mollit aliqua.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*3),
    chats: [
      {
        time: 103,
        self: false,
        message: "Dolor consequat est mollit minim nulla enim commodo aliquip eiusmod veniam sunt consequat elit.",
      },
      {
        time: 104,
        self: true,
        message: "In dolore proident ex laboris commodo dolor officia.",
      },
      {
        time: 105,
        self: false,
        message: "Qui consequat ullamco velit culpa consequat amet in est exercitation non et aliqua.",
      },
      {
        time: 106,
        self: false,
        message: "Aliqua quis ea adipisicing sit laboris adipisicing laborum eu et commodo Lorem pariatur.",
      },
      {
        time: 107,
        self: false,
        message: "Tempor aliquip ex ex excepteur sunt pariatur fugiat excepteur sunt.",
      },
      {
        time: 108,
        self: true,
        message: "Qui consequat ullamco velit culpa consequat amet in est exercitation non et aliqua.",
      },
      {
        time: 109,
        self: false,
        message: "Aliqua quis ea adipisicing sit laboris adipisicing laborum eu et commodo Lorem pariatur.",
      },
      {
        time: 110,
        self: true,
        message: "Tempor aliquip ex ex excepteur sunt pariatur fugiat excepteur sunt.",
      },
      {
        time: 106,
        self: false,
        message: "Aliqua quis ea adipisicing sit laboris adipisicing laborum eu et commodo Lorem pariatur.",
      },
      {
        time: 107,
        self: false,
        message: "Tempor aliquip ex ex excepteur sunt pariatur fugiat excepteur sunt.",
      },
      {
        time: 108,
        self: true,
        message: "Qui consequat ullamco velit culpa consequat amet in est exercitation non et aliqua.",
      },
      {
        time: 109,
        self: false,
        message: "Aliqua quis ea adipisicing sit laboris adipisicing laborum eu et commodo Lorem pariatur.",
      },
      {
        time: 110,
        self: true,
        message: "Tempor aliquip ex ex excepteur sunt pariatur fugiat excepteur sunt.",
      },
    ]
  },
  {
    id:2,
    name: "Cody Ramsey",
    message: "Esse eiusmod voluptate ea nulla est commodo ad consectetur veniam ad.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:3,
    name: "Violet Lawson",
    message: "Ea ad cillum velit eu quis ex ipsum est sit exercitation tempor quis anim culpa.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:4,
    name: "Ivan Shelton",
    message: "Nisi nisi sint Lorem tempor ullamco veniam veniam eiusmod quis nostrud esse consequat deserunt minim.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:5,
    name: "Delia Sandoval",
    message: "Duis commodo nostrud ex veniam Lorem ex occaecat sit tempor ex dolore adipisicing.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:6,
    name: "Helena Houston",
    message: "Ipsum amet enim pariatur et deserunt occaecat.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:7,
    name: "Leroy Gibson",
    message: "Culpa occaecat voluptate ullamco incididunt esse quis.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:8,
    name: "Nell Holland",
    message: "Laborum duis aute occaecat amet aliqua et.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:9,
    name: "Luke Terry",
    message: "Officia ex eu enim dolor deserunt deserunt officia aliqua.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:10,
    name: "Bruce Harper",
    message: "Ut irure nostrud consectetur laborum fugiat id aute elit.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
]

const sampleCalls = [
  {
    name: "Bill Bradley",
    incomming: "yes",
    time: "9:03 am",
    missed: Math.random()>0.5,
  },
  {
    name: "Edwin Sutton",
    incomming: "yes",
    time: "9:03 am",
    missed: Math.random()>0.5,
  },
  {
    name: "Jorge Hoffman",
    incomming: "no",
    time: "9:03 am",
    missed: Math.random()>0.5,
  },
  {
    name: "Cora Haynes",
    incomming: "yes",
    time: "9:03 am",
    missed: Math.random()>0.5,
  },
  {
    name: "Randy Wong",
    incomming: "yes",
    time: "9:03 am",
    missed: Math.random()>0.5,
  },

]

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods","POST, PUT, GET, OPTIONS, DELETE");
  console.log(req.path)
  next();
});

app.get("/chats", function(req, res){
  // get all chats
  chats = sampleData

  return res.status(200).send(chats);
});

app.get("/calls", function(req, res){
  // get all chats
  calls = sampleCalls

  return res.status(200).send(calls);
});

app.put("/chat/:reci/readReset", function(req, res){
  console.log(req.params.reci)
  var index = _.findIndex(sampleData, (ele)=>{
    return ele.id == req.params.reci
  });
  console.log(index);
  sampleData[index].unread=0;
  return res.send(200);
})

app.get("/chat/:recipient", function(req, res){
  if(req.query.start == undefined)
    start = 0
  else
    start = req.query.start;
  console.log("S"+start);
  let recipient = Object.assign({}, _.find(sampleData, (ele)=>{return ele.id == req.params.recipient}));

  console.log(recipient.chats.length)
  console.log("RANGE:");
  console.log(Math.max(0,recipient.chats.length-5-start))
  console.log(recipient.chats.length-start)
  recipient.chats = recipient.chats.slice(Math.max(0,recipient.chats.length-5-start), recipient.chats.length-start);

  return res.status(200).send(recipient);
})



app.listen(9000, function(req, res){
  console.log("Server running on 9000!");
})

