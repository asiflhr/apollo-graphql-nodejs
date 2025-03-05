const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const cors = require('cors')

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await server.start()

  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.use('/graphql', expressMiddleware(server))

  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer()
