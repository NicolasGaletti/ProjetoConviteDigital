import { v4 as uuid } from 'uuid';

export default class Id {
    static novo(): string {
        return uuid();
    }
}

// for (let i = 0; i < 100; i++) {
//     console.log(Id.novo());
// }