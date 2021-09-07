const redis = require('redis')
const {redisHost, redisPort, redisKey} = require('../config.json')


const client = redis.createClient({
    host: redisHost,
    port: redisPort,
    password: redisKey
})

// client.on("connect", function(err))


client.on("error", function(error) {

    console.error(error)
})

client.set("foo", "bar", redis.print)
client.get("foo", redis.print)