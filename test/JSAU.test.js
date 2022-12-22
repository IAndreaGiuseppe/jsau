import { assert } from "chai";
import JSAU from "../src/JSAU.js";
import DataObject from "../src/DataObject.js";
import doc from "./fixture_object.js";

describe("JSAU", function () {
    it("handle json response data member", () => {
        let response = { "data": doc };
        let jsau = new JSAU(response);

        assert.equal(jsau.getDoc(), doc);
    });

    it("gets the data member as DataObject", () => {
        let jsau = new JSAU(doc);

        assert.instanceOf(jsau.data(), DataObject);
    });

    it("gets the included member", () => {
        let jsau = new JSAU(doc);

        assert.equal(jsau.included(), doc.included);
    });
});
