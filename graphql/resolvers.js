// Query를 해결 하는 곳
// Resolver를 DB에 연결하는 등 다양한 작업을 서술 해줄 수 있다. 

// const rams = {
//     name: "rams",
//     age: 28,
//     gender: "male"
// }

import { people, getPersonById, getMovies, getMovieById, addMovie, deleteMovies } from "./db"

const resolvers = {
    Query: {
        // person: () => rams
        people: () => people,
        // person: (_, args)로 아래 형태의 쿼리를 진행 하면, args로 id값이 온다 (  '{ id: 2 }' 형식으로 ) 
        // query {
        //   person(id:2) {
        //     name
        //   }
        // }
        person: (_, { id }) => getPersonById(id),
        // person()
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieById(id),
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovies(id)
    }
};

export default resolvers;