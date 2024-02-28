const port = process.env.PORT || 3033;
const express = require ('express');
const app = express();

const path = require ('path');



app.use(express.static(path.resolve(__dirname,'./public')));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'C:\Users\Diego\Desktop\cursodigital\carpeta\views\home.html'))
    
})
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'C:\Users\Diego\Desktop\cursodigital\carpeta\views\register.html'));
  
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,('C:\Users\Diego\Desktop\cursodigital\carpeta\views\login.htm')))
})
app.listen(port,()=> console.log(`Servidor corriendo en el puerto ${port}`));
    
