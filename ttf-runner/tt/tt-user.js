function importTestCase(name, path, param) {
    return describe(name, function (param) {
        require(path);
    });
}

var common = require("../common");

describe("Manipulations with user.", function () {
    beforeEach(function () {
       console.log("running something before each test");
    });
    importTestCase("1", '../ttc/ttc-create-new-user');
    importTestCase("2", '../ttc/ttc-greet-existing-user');

    after(function () {
        console.log("after all tests");
    });
});