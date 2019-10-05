var { InitPACFromFile, RunPAC } = require("pacrunner");

describe("demo", () => {
    it("this will work", () => {
        InitPACFromFile("example.pac");
        const result = RunPAC("https://exhentai.org/img/kokomade.jpg", {
            __RULES__: ["exhentai.org"],
            __USERRULES__: [],
            __PROXY__: "SOCKS 127.0.0.1:1080;"
        });
        expect(result).toBe("SOCKS 127.0.0.1:1080;");
    });

    it("this wont", () => {
        InitPACFromFile("example.pac");
        const result = RunPAC("https://exhentai.org/img/kokomade.jpg", {
            __RULES__: ["google.com"],
            __USERRULES__: [],
            __PROXY__: "SOCKS 127.0.0.1:1080;"
        });
        expect(result).toBe("SOCKS 127.0.0.1:1080;");
    });

});
