import {coment} from './items.class';

export class itemsService {

    private itemsServ: coment[] = [{
        'name': 'First item with custom name',
        'comments': ['test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'text', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']
    }, {
        'name': 'Second  item is active',
        'comments': ['A variation of the ordinary lorem ipsum text has been used in\n typesetting since the 1960s or earlier, when it was popularized by\n advertisements for Letraset transfer sheets. It was introduced to the\n Information Age in the mid-1980s',
            'A variation of the ordinary lorem ipsum text has been used in\n typesetting since the 1960s or earlier, when it was popularized by\n advertisements for Letraset transfer sheets. It was introduced to the\n Information Age in the mid-1980s',

            'A variation of the ordinary lorem ipsum text has been used in\n typesetting since the 1960s or earlier, when it was popularized by\n advertisements for Letraset transfer sheets. It was introduced to the\n Information Age in the mid-1980sA variation of the ordinary lorem\n ipsum text has been used in typesetting since the 1960s or earlier,\n when it was popularized by advertisements for Letraset transfer\n sheets. It was introduced to the Information Age in the mid-1980sA\n variation of the ordinary lorem ipsum text has been used in typeset-\nting since the 1960s or earlier, when it was popularized by advertise-\nments for Letraset transfer sheets. It was introduced to the Informa-\ntion Age in the mid-1980s']
    }, {
        'name': 'string3',
        'comments': ['text3']
    }, {
        'name': 'test',
        'comments': []
    }];

    getItems() {
        return this.itemsServ;
    }

    addItem(item) {
        this.itemsServ.push(new coment(item));
    }

    removeItem(index) {
        this.itemsServ.splice(index, 1);
    }

    addComent(coment: string, index: number) {
        this.itemsServ[index].comments.push(coment);
    }
}