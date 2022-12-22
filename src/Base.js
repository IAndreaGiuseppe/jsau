
class Base {
    constructor(doc) {
        this.doc = doc;
        this.members = ["jsonapi", "data", "errors", "meta", "links"];
    }

    getDoc() {
        return this.doc;
    }
    member(name) {
        this._checkMember(name);

        return name.split(".").reduce((a, b) => a[b], this.doc);
    }

    _isObject(o) {
        return !!(o && typeof o === "object" && !Array.isArray(o));
    }
    _checkMember(name) {
        if ("string" !== typeof name) {
            throw new Error("Member must be of string type.");
        }

        let firstLevel = name.split(".")[0];
        if (!this.members.includes(firstLevel)) {
            throw new Error(`Invalid member name [${name}].`);
        }
    }
}

export default Base;
