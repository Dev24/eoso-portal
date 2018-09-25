const express = require('express');

const app = express();
app.use(express.json());

players = [
    { id: 1, name: 'player1' },
    { id: 2, name: 'player2' },
    { id: 3, name: 'player3' }
]


app.get('/', (req, res) => {
    res.send('GET /api/player - to view players, POST /api/player {name: ..}- to create player');
});

app.get('/api/player', (req, res) => {
    res.send(players);
})

app.post('/api/player', (req, res) => {
    const player = {
        id: player.length + 1,
        name: req.body.name
    }
    players.push(player);
    res.send(player);
})


app.listen(3000, () => {console.log('Listening on port 3000')});

