import { getInputGridName } from "../app/inputGridName.js"

export function testGetInputGridName(assert) {
    describe("Input Grid Names", () => {
        it("_parentId равен Outside Processor", ()=>{
            assert.equal(getInputGridName("OUTSIDE PROCESSOR"), "InputOPGrid")
        })
        it("_parentId равен Check this", ()=>{
            assert.equal(getInputGridName("CHECK THIS"), "Some value")
        })
        it("ничего не передано", ()=>{
            assert.equal(getInputGridName("undefined"), "InputGrid")
        })
    })
}