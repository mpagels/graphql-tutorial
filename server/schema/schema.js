const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql

// dummy data

const books = [
  {
    name: 'Harry Potter and the philosopher stones',
    genre: 'Fantasy',
    id: '1',
  },
  {
    name: 'Star Wars: A new hope',
    genre: 'Sc-Fi',
    id: '2',
  },
  {
    name: 'Python Crash Course',
    genre: 'nonfiction',
    id: '3',
  },
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        const [book] = books.filter((book) => book.id === args.id)
        return book
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
