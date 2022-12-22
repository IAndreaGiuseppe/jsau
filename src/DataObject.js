import Base from "./Base.js";

class DataObject extends Base {
    constructor(doc) {
        super(doc);

        this.members = ["id", "type", "attributes", "relationships", "links", "meta"];
        this.type = doc.type;
        this.id = doc.id;
    }

    attributes() {
        return this.member("attributes");
    }
    relationship(name) {
        return this.member(`relationships.${name}`);
    }
}

export default DataObject;
