import {Alphabet} from './brain';

export function randomString(l: number): string {
    let res = '';
    for (let i = 0; i < l; i++) {
        res += Alphabet.selectInstance();
    }
    return res;
}
