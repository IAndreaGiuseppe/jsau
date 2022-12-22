import { assert } from "chai";
import DataArray from "../src/DataArray.js";
import DataObject from "../src/DataObject.js";
import doc from "./fixture_array.js";

describe("DataArray", function () {
    it("throws error for invalid doc", () => {
        assert.throw(() => new DataArray(""), Error, "DataArray must be of type [array].");
        assert.throw(() => new DataArray({}), Error, "DataArray must be of type [array].");
        assert.throw(() => new DataArray(null), Error, "DataArray must be of type [array].");
    });

    it("gets elements as DataObject instance", () => {
        let data = new DataArray(doc.data);

        assert.isTrue(data.first() instanceof DataObject);
    });

    it("gets the first element of the data array", () => {
        let data = new DataArray(doc.data);

        assert.isTrue(data.first() instanceof DataObject);
        assert.equal(data.first().getDoc(), doc.data[0]);
    });

    it("gets the last element of the data array", () => {
        let data = new DataArray(doc.data);

        assert.isTrue(data.last() instanceof DataObject);
        assert.equal(data.last().getDoc(), doc.data[1]);
    });

    it("gets the next element of the data array", () => {
        let data = new DataArray(doc.data);

        assert.isTrue(data.next() instanceof DataObject);
        assert.equal(data.next().getDoc(), doc.data[0]);
    });
});
