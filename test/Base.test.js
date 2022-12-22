import { assert } from "chai";
import Base from "../src/Base.js";
import doc from "./fixture_object.js";

describe("Base", function () {
    it("throws error for invalid member", () => {
        let base = new Base(doc);

        assert.throw(() => base.member("to"), Error, "Invalid member name [to].");
    });

    it("gets the original document", () => {
        let base = new Base(doc);

        assert.equal(base.getDoc(), doc);
    });

    it("gets a member inside the document", () => {
        let base = new Base(doc);

        assert.equal(base.member("jsonapi"), doc.jsonapi);
    });

    it("gets a nested member inside the document", () => {
        let base = new Base(doc);

        assert.equal(base.member("data.attributes.name"), doc.data.attributes.name);
    });

    it("checks if a member is an object", () => {
        let base = new Base(doc);

        assert.isTrue(base._isObject(doc));
        assert.isTrue(base._isObject({}));
        assert.isFalse(base._isObject(null));
        assert.isFalse(base._isObject(""));
        assert.isFalse(base._isObject(5));
    });
});
