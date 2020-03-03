import { multi } from "../app/multi.js"

export function testMulti(assert){

describe("Check multi function", () => {
    it("mult of two numbers", () => {
        assert.equal(multi(2, 2), 4)
    })
    it("mult of three numbers", () => {
        assert.equal(multi(2, 2, 2), 8)
    })
})

}