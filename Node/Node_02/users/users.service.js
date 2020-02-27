class UsersService{
    createUser(userData){
        return {
            id: 20,
            ...userData,
        }
    }
}

const usersService = new UsersService();
module.exports = usersService;