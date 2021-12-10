const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString } = graphql

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      tpye: GraphQLString,
    },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
})
