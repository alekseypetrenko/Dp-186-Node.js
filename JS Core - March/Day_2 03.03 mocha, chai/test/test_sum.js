import { sum } from "../app/sum.js"

export function testSum(assert){
    describe("Check Sum function", () => {
        it("Sum of two numbers", () => {
            assert.equal(sum(2, 2), 4)
        })
        it("Sum of three numbers", () => {
            assert.equal(sum(2, 2, 2), 6)
        })
        describe("Inc args", ()=>{
            it("Check Strings", () => {
                assert.equal(sum(2, 3, "four"), 5)
            })
            it("Check incorrect args", () => {
                assert.equal(sum(undefined, "four"), 0);
                assert.equal(sum(undefined, "four", NaN), 0);
            })
            it("Check empty args", () => {
                assert.equal(sum(undefined, "four"), 0);
                assert.deepEqual(sum(), {
                    status: "failed",
                    reason: "No arguments"
                });
            })
        })
    
    })
}