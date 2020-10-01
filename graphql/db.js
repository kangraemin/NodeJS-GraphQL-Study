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

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};