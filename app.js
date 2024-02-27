const express = require ('express');
const path = require ('path');

const app = express();

app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'C:/Users/Diego/Desktop/cursodigital/carpeta/views/home.html'))
    
})
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'C:/Users/Diego/Desktop/cursodigital/carpeta/views/register.html'));
  
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,('C:/Users/Diego/Desktop/cursodigital/carpeta/views/login.htm')))
})
app.listen(3001,()=>{
    console.log('servidor corriendo')
});