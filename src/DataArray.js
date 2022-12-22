import Base from "./Base.js";
import DataObject from "./DataObject.js";

class DataArray extends Base {
    constructor(doc) {
        if (!Array.isArray(doc)) {
            throw Error("DataArray must be of type [array].")
        }

        super(doc);

        this._index = 0;
    }

    _first() {
        this._index = 0;
        return this;
    }
    _next() {
        this._index = (this._index + 1) % this.doc.length;
        return this;
    }
    _last() {
        this._index = this.doc.length - 1;
        return this;
    }

    first() {
        return this._first().get();
    }
    next() {
        return this._next().get();
    }
    last() {
        return this._last().get();
    }
    get() {
        return new DataObject(this.doc[this._index]);
    }
}

export default DataArray;
