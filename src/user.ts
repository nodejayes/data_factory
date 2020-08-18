import {Ages, Brain, Emails, Fornames, Surnames, UserGroups} from './brain';
import {randomString} from './stringer';

interface IGroup {
    id: number;
    name: string;
}

export const Groups = new Brain<IGroup>();
Groups.addItem({
    id: 1,
    name: UserGroups.getInstance(0),
});
Groups.addItem({
    id: 2,
    name: UserGroups.getInstance(1),
});
Groups.addItem({
    id: 3,
    name: UserGroups.getInstance(2),
});

interface IUser {
    userName: string;
    password: string;
    email: string;
    age: number;
    forename: string;
    surname: string;
    groupId: number;
}

export const Users = new Brain<IUser>();
let start = 0;
while (start < 99) {
    start++;
    const fn = Fornames.selectInstance();
    const sn = Surnames.selectInstance();
    const em = Emails.selectInstance();
    const ag = Ages.selectInstance();
    const un = fn[0].ToUpperCase() + sn.ToLowerCase()
    Users.addItem({
        userName: un,
        email: em,
        forename: fn,
        surname: sn,
        age: ag,
        password: randomString(25),
        groupId: Groups.selectInstance().id,
    });
}
