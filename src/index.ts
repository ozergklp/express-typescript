import express, {Express, Request, Response} from 'express'

const app: Express = express();

app.listen(4000, () => {
    console.log('listening port 4000')
})