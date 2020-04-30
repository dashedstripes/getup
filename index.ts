import server from './server';

const PORT = 4000;

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));