import Base from "./Base.js";
import DataArray from "./DataArray.js";
import DataObject from "./DataObject.js";

function _hasDataWrapper(doc) {
    return doc.hasOwnProperty("data") ?
        doc.data.hasOwnProperty("data") :
        false;
}

class JSAU extends Base {
    constructor(doc) {
        super(_hasDataWrapper(doc) ? doc.data : doc);

        this.members = ["data", "included"];
    }

    data() {
        let data = this.member("data");
        return Array.isArray(data) ? new DataArray(data) : new DataObject(data);
    }
    included() {
        return this.member("included");
    }
}

export default JSAU;
