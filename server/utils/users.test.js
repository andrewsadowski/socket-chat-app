const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Secret Room'
        }, {
            id: '2',
            name: 'Jen',
            room: 'Super Secret Room'
        }, {
            id: '3',
            name: 'Joan',
            room: 'Secret Room'
        }];
    });


    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Secret Room', () => {
        var userList = users.getUserList('Secret Room');
        expect(userList).toEqual(['Mike', 'Joan']);
    })
});