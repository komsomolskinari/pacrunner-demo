var { PAC } = require("pacrunner");

describe("demo", () => {
    it("this will work", () => {
        const result = PAC.FromFile("example.pac").Run(
            "https://exhentai.org/img/kokomade.jpg",
            {
                __RULES__: ["exhentai.org"],
                __USERRULES__: [],
                __PROXY__: "SOCKS 127.0.0.1:1080;"
            }
        );
        expect(result).toBe("SOCKS 127.0.0.1:1080;");
    });

    it("this wont", () => {
        const result = PAC.FromFile("example.pac").Run(
            "https://exhentai.org/img/kokomade.jpg",
            {
                __RULES__: ["google.com"],
                __USERRULES__: [],
                __PROXY__: "SOCKS 127.0.0.1:1080;"
            }
        );
        expect(result).toBe("SOCKS 127.0.0.1:1080;");
    });
});
