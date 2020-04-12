export default class Repository {
    constructor(name) {
        this.name =  name;
    }
    get() {
        return Promise.resolve(this.getOrDefine());
    }
    getOrDefine() {
        let items = localStorage.getItem(this.name);
        if (items == null) {
            items = [];
            this.localUpdate(items);
        }
        return JSON.parse(items);
    }
    async add(newValue) {
        let items = this.getOrDefine();
        newValue.id = Math.max(items.map(x=>x.id)) + 1;
        items.push(newValue);
        this.localUpdate(items);
    }

    update(id, value) {
        let items = this.getOrDefine();
        let indexOf = items.findIndex(x => x.id === id);
        if (indexOf < 0) throw new Error(id + ' is not found');
        items[indexOf] = value;
        this.localUpdate(items);
        return Promise.resolve();
    }


    delete(id) {
        let items = this.getOrDefine();
        let indexOf = items.findIndex(x => x.id === id);
        if (indexOf < 0) throw new Error(id + ' is not found');
        items.splice(indexOf, 1);
        this.localUpdate(items);
        return Promise.resolve();
    }

    localUpdate(items){
        localStorage.setItem(this.name,JSON.stringify(items));
    }
}