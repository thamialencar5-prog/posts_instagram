import knexconfing from 'knex'
import 'dotenv/config'

export const knex = knexconfing({
    client: 'pg',
    Connection: {},
    debug: true
})