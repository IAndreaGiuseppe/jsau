import { assert } from "chai";
import DataObject from "../src/DataObject.js";
import doc from "./fixture_object.js";

describe("DataObject", function () {
    it("owns type and id properties", () => {
        let data = new DataObject(doc.data);

        assert.equal(data.type, doc.data.type);
        assert.equal(data.id, doc.data.id);
    });

    it("gets the attributes member", () => {
        let data = new DataObject(doc.data);

        assert.equal(data.attributes(), doc.data.attributes);
    });

    it("gets a specific relationship", () => {
        let data = new DataObject(doc.data);

        assert.equal(data.relationship("companies"), doc.data.relationships.companies);
    });

    it("gets undefined for a missing relationship", () => {
        let data = new DataObject(doc.data);

        assert.isUndefined(data.relationship("missing"));
    });
});
