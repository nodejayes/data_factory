import {NumberFactory} from 'ts-tooling';

export class Brain<T> {
    private store: T[] = [];

    addItem(item: T) {
        this.store.Add(item);
    }

    selectInstance(): T {
        if (this.store.length < 1) {
            throw new Error('the Brain is empty');
        }
        if (this.store.length === 1) {
            return this.store[0];
        }
        const rnd = NumberFactory.RandomInteger(0, this.store.length-1);
        return this.store[rnd];
    }

    getInstance(idx: number): T {
        return this.store[idx];
    }
}

export const Alphabet = new Brain<string>();
Alphabet.addItem('a');
Alphabet.addItem('b');
Alphabet.addItem('c');
Alphabet.addItem('d');
Alphabet.addItem('e');
Alphabet.addItem('f');
Alphabet.addItem('g');
Alphabet.addItem('h');
Alphabet.addItem('i');
Alphabet.addItem('j');
Alphabet.addItem('k');
Alphabet.addItem('l');
Alphabet.addItem('m');
Alphabet.addItem('n');
Alphabet.addItem('o');
Alphabet.addItem('p');
Alphabet.addItem('q');
Alphabet.addItem('r');
Alphabet.addItem('s');
Alphabet.addItem('t');
Alphabet.addItem('u');
Alphabet.addItem('v');
Alphabet.addItem('w');
Alphabet.addItem('x');
Alphabet.addItem('y');
Alphabet.addItem('z');
Alphabet.addItem('ß');
Alphabet.addItem('ä');
Alphabet.addItem('ö');
Alphabet.addItem('ü');

export const Fornames = new Brain<string>();
for (const d of [
    'Ralf', 'Sabine', 'Sven', 'Lena', 'Benjamin', 'Stefanie', 'Susanne', 'Kristian', 'Anne', 'Lisa', 'Monika',
    'Anke', 'Sophia', 'Heike', 'Jessika', 'Leon', 'Felix', 'Dennis', 'Mario', 'Benjamin', 'Uwe', 'Kathrin',
    'Christine', 'Michelle', 'Johanna', 'Tim', 'Marcel', 'Claudia', 'Simone', 'Florian', 'Sebastian', 'Phillip',
    'Martina', 'Thorsten', 'Marina', 'Andreas', 'Nadine', 'Niklas', 'Nils', 'Jenifer', 'Lukas', 'Tanja', 'Vanessa'
]) {
    Fornames.addItem(d);
}

export const Surnames = new Brain<string>();
for (const d of [
    'Lehmann', 'Hartmann', 'Maurer', 'Schwartz', 'Weiss', 'Duerr', 'Faust', 'Weber', 'Zimmer', 'Dresdner', 'Eisenhower',
    'Kappel', 'Diederich', 'Herzog', 'Krause', 'Bumgarner', 'Faerber', 'Brandt', 'Finkel', 'Austerlitz', 'Fisher', 'Nussbaum',
    'Klug', 'Jung', 'Cole', 'Freeh', 'Wechsler', 'Schuhmacher', 'Frankfurter', 'Fuerst', 'Eberhardt', 'Beike', 'Shuster', 'Dreher',
    'Richter', 'Loewe', 'Neudorf', 'Vogler', 'Propst', 'Eisenberg', 'Gerber', 'Kastner', 'Goldschmidt'
]) {
    Surnames.addItem(d);
}

export const Domains = new Brain<string>();
for (const d of [
    '.de', '.com', '.tv', '.org', '.net'
]) {
    Domains.addItem(d);
}

export const Providers = new Brain<string>();
for (const d of [
    't-online', 'outlook', 'freenet', 'emailn', 'web'
]) {
    Providers.addItem(d);
}

export const Emails = new Brain<string>();
let start = 0;
while (start < 99) {
    start++;
    Emails.addItem(`${Fornames.selectInstance()}.${Surnames.selectInstance()}@${Providers.selectInstance()}${Domains.selectInstance()}`);
}

export const Ages = new Brain<number>();
start = 0;
while (start < 99) {
    start++;
    Ages.addItem(start);
}

export const Phones = new Brain<number>();
start = 0;
while (start < 99) {
    start++;
    let number = '';
    for (let i = 0; i < 11; i++) {
        number += NumberFactory.RandomInteger(0, 9);
    }
    Phones.addItem(parseInt(number));
}

export const UserGroups = new Brain<string>();
for (const d of [
    'Admin', 'User', 'TestUser'
]) {
    UserGroups.addItem(d);
}
