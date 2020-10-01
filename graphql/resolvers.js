// Query를 해결 하는 곳
// Resolver를 DB에 연결하는 등 다양한 작업을 서술 해줄 수 있다. 
const resolvers = {
    Query: {
        name: () => "nicolas"
    }
};

export default resolvers;