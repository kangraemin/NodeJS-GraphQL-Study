export const people = [
    {
        id: "1",
        name: "rams",
        age: 28,
        gender: "male"
    },
    {
        id: "2",
        name: "cola",
        age: 18,
        gender: "female"
    },
    {
        id: "3",
        name: "coca",
        age: 38,
        gender: "female"
    },
    {
        id: "4",
        name: "zero",
        age: 48,
        gender: "male"
    }
];

export let movies = [
    {
        id: 0,
        name: "movie_name dbzbzbz",
        score: 8
    },
    {
        id: 1,
        name: "movie_name dfdsfgfnadoudn",
        score: 8
    },
    {
        id: 2,
        name: "movie_name ggazzz",
        score: 10
    },
    {
        id: 3,
        name: "movie_name asdsadasdsad",
        score: 1
    },
    {
        id: 4,
        name: "movie_name dagdgasdg",
        score: 4
    },
    {
        id: 5,
        name: "movie_name mmmmm",
        score: 4
    },
    {
        id: 6,
        name: "movie_name haha",
        score: 8
    },
]

export const getPersonById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};

export const getMovieById = id => {
    const filteredMoives = movies.filter(movie => movie.id === id);
    return filteredMoives[0];
};

export const getMovies = () => {
    return movies;
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovies = (id) => {
    const cleandMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleandMovies.length) {
        movies = cleandMovies;
        return true;
    } else {
        return false;
    }
}