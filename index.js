import express from 'express';
const app = express();
const PORT = process.env.PORT|| 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const users =[
{id:1,name:'raiyan',email:'raiyan@gmail.com'},
{id:2,name:'numan',email:'numan@gmail.com'},
{id:3,name:'mahin',email:'mahin@gmail.com'},
{id:4 ,name:'minhaj',email:'minhaj@gmail.com'},
{id:5 ,name:'minhaj',email:'minhaj@gmail.com'},

]
app.get('/users', (req, res) => {
  res.send(users)
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})