const redis = require('redis');
const {redisHost, redisPort, redisKey} = require('../config.json')

const client = redis.createClient({
    host: redisHost,
    port: redisPort,
    password: redisKey
})

client.del('key')
client.get("key", redis.print)
client.get("donutExist")