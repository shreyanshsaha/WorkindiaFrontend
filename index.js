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
    message: "Anim aliquip fugiat elit irure aute elit.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*3),
    chats: [
      {
        time: 103,
        self: false,
        message: "Ea dolore sint labore reprehenderit nisi ad esse aliqua laborum ullamco proident ut.",
      },
      {
        time: 104,
        self: true,
        message: "Sit pariatur Lorem est veniam incididunt sunt enim laborum commodo.",
      },
      {
        time: 105,
        self: false,
        message: "Irure esse ad ea in duis aliqua consequat nulla quis fugiat.",
      },
      {
        time: 106,
        self: false,
        message: "Reprehenderit do occaecat voluptate Lorem incididunt mollit dolore mollit.",
      },
      {
        time: 107,
        self: false,
        message: "Irure aliqua sunt veniam eu anim velit ad voluptate velit est nulla magna veniam non.",
      },
      {
        time: 108,
        self: true,
        message: "Ad anim eu duis culpa velit id.",
      },
      {
        time: 109,
        self: false,
        message: "Ex occaecat sunt sunt do occaecat.",
      },
      {
        time: 110,
        self: true,
        message: "Eiusmod laborum reprehenderit id ullamco dolor dolore adipisicing eu nisi culpa.",
      },
      {
        time: 106,
        self: false,
        message: "Mollit laborum enim elit non sunt eu laboris nulla.",
      },
      {
        time: 107,
        self: false,
        message: "Aute ex culpa voluptate sunt elit incididunt ad nostrud est laborum ut.",
      },
      {
        time: 108,
        self: true,
        message: "Minim aliqua fugiat sunt do nostrud esse tempor incididunt.",
      },
      {
        time: 109,
        self: false,
        message: "Nostrud eu amet sunt exercitation exercitation in commodo pariatur ipsum commodo magna reprehenderit fugiat.",
      },
      {
        time: 110,
        self: true,
        message: "Sunt elit proident deserunt aute fugiat id consectetur qui do est.",
      },
      {
        time: 108,
        self: true,
        message: "Esse Lorem adipisicing minim incididunt sunt nulla duis fugiat quis officia fugiat.",
      },
      {
        time: 109,
        self: false,
        message: "Sit velit consequat tempor et veniam sit.",
      },
      {
        time: 110,
        self: true,
        message: "Adipisicing mollit aliqua dolor cillum quis.",
      },
      {
        time: 103,
        self: false,
        message: "Laboris id voluptate exercitation in elit commodo magna eu pariatur.",
      },
      {
        time: 104,
        self: true,
        message: "Irure deserunt mollit ex tempor Lorem eiusmod Lorem labore tempor proident pariatur adipisicing adipisicing officia.",
      },
      {
        time: 105,
        self: false,
        message: "Amet aliquip sint amet cupidatat ad esse sunt Lorem labore nulla pariatur.",
      },
      {
        time: 106,
        self: false,
        message: "Labore adipisicing quis enim enim proident laboris ad.",
      },
      {
        time: 107,
        self: false,
        message: "Deserunt ex ut cupidatat et sint in id eiusmod exercitation anim aute reprehenderit occaecat voluptate.",
      },
      {
        time: 108,
        self: true,
        message: "Anim aliqua pariatur nulla labore ex.",
      },
      {
        time: 109,
        self: false,
        message: "Incididunt eu esse nostrud fugiat occaecat sunt non non occaecat ut elit cupidatat ex mollit.",
      },
      {
        time: 110,
        self: true,
        message: "Ad deserunt nulla dolor dolore nulla nostrud minim deserunt quis ullamco officia duis exercitation.",
      },
      {
        time: 106,
        self: false,
        message: "Aliquip consectetur ut cillum veniam.",
      },
      {
        time: 107,
        self: false,
        message: "Nulla aute proident fugiat cillum et laboris ullamco non excepteur.",
      },
      {
        time: 108,
        self: true,
        message: "Officia ipsum dolore fugiat ullamco elit qui anim pariatur enim.",
      },
      {
        time: 109,
        self: false,
        message: "Duis consequat do dolore ipsum ut mollit ex sint do.",
      },
      {
        time: 110,
        self: true,
        message: "Exercitation magna in nulla deserunt esse officia.",
      },
      {
        time: 108,
        self: true,
        message: "Nisi elit laborum adipisicing adipisicing et anim.",
      },
      {
        time: 109,
        self: false,
        message: "Irure ullamco est nulla reprehenderit culpa aute ullamco exercitation.",
      },
      {
        time: 110,
        self: true,
        message: "Ex est culpa amet eu et nisi excepteur eiusmod aliquip duis exercitation tempor enim.",
      },
      {
        time: 103,
        self: false,
        message: "Sit elit tempor sunt exercitation irure.",
      },
      {
        time: 104,
        self: true,
        message: "Sunt eu reprehenderit labore eu aliquip ad excepteur est incididunt et.",
      },
      {
        time: 105,
        self: false,
        message: "Enim ullamco eiusmod nisi reprehenderit culpa quis sit ea tempor aliqua occaecat ea tempor qui.",
      },
      {
        time: 106,
        self: false,
        message: "Nulla aliquip sit et sint cillum veniam elit.",
      },
      {
        time: 107,
        self: false,
        message: "Reprehenderit amet anim nulla do nulla dolore labore nulla deserunt anim ut labore sit adipisicing.",
      },
      {
        time: 108,
        self: true,
        message: "Ea incididunt qui consectetur non sint.",
      },
      {
        time: 109,
        self: false,
        message: "Nulla ea labore ullamco fugiat consectetur exercitation tempor ut sint Lorem.",
      },
      {
        time: 110,
        self: true,
        message: "Aliquip laborum non et veniam veniam.",
      },
      {
        time: 106,
        self: false,
        message: "Quis ad nulla deserunt mollit laboris in enim sint.",
      },
      {
        time: 107,
        self: false,
        message: "Aliqua eiusmod pariatur laboris ad reprehenderit Lorem fugiat veniam.",
      },
      {
        time: 108,
        self: true,
        message: "Deserunt ex consequat enim eiusmod id veniam ad exercitation eiusmod fugiat aute.",
      },
      {
        time: 109,
        self: false,
        message: "Voluptate laboris voluptate officia sit aliquip velit eu ipsum cupidatat laborum.",
      },
      {
        time: 110,
        self: true,
        message: "Officia consequat mollit dolor velit deserunt sunt in Lorem irure quis mollit proident ea irure.",
      },
      {
        time: 108,
        self: true,
        message: "Veniam occaecat id cillum proident est cillum.",
      },
      {
        time: 109,
        self: false,
        message: "Occaecat commodo tempor non fugiat Lorem aliquip ipsum in pariatur exercitation magna mollit eiusmod irure.",
      },
      {
        time: 110,
        self: true,
        message: "Eiusmod magna consectetur elit anim reprehenderit ea aliqua laborum duis.",
      },
    ]
  },
  {
    id:2,
    name: "Cody Ramsey",
    message: "Magna excepteur Lorem officia pariatur ut esse qui.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:3,
    name: "Violet Lawson",
    message: "Aliquip minim nostrud reprehenderit magna nostrud non fugiat cupidatat nostrud do dolore sit incididunt minim.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:4,
    name: "Ivan Shelton",
    message: "Pariatur elit labore ea sit fugiat.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:5,
    name: "Delia Sandoval",
    message: "Est sunt ullamco ut nisi dolore ullamco adipisicing magna do non esse amet occaecat.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:6,
    name: "Helena Houston",
    message: "Sit eu eiusmod pariatur sunt.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:7,
    name: "Leroy Gibson",
    message: "Nulla labore excepteur nisi cillum sunt et do reprehenderit excepteur occaecat incididunt mollit eiusmod proident.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:8,
    name: "Nell Holland",
    message: "Ex tempor minim aliqua elit dolore ex esse qui sit non aliqua ullamco.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:9,
    name: "Luke Terry",
    message: "Nisi incididunt ullamco ipsum id.",
    time: "9:03 am",
    unread: parseInt(0+Math.random()*10),
    chats:[]
  },
  {
    id:10,
    name: "Bruce Harper",
    message: "Magna cupidatat fugiat ex Lorem.",
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

