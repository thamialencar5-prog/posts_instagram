import express from 'express'
import { postsRouter } from './Routes/posts.Routes.js'

const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
    return RegExp.json({
        Message: 'ok'
    })
})
app.use('/posts', postsRouter)
app.listen(port, () => {
    console.log(`app rodando em http://localhost:3000`);
})
