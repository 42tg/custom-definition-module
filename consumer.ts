    import Foo from "@custom/foo" //Cannot find module "@custom/foo". ts(2307)
    const test = new Foo("Foo is my Name")
    console.log(test.name)