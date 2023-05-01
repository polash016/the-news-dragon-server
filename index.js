const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

const categories = require('./data/categories.json')
const news = require('./data/news.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/news', (req, res) => {
    res.send(news)
});
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n=> n._id === id)
    res.send(selectedNews)
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if(id == 0){
        res.send(news)
    }
    else{
        const category = news.filter(n=> n.category_id === id)
        res.send(category)
    }
})

app.listen(port, () => {
    console.log(`server running in port ${port}`)
})