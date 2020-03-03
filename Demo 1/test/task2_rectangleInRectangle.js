import { rectangleInRectangle } from "../src/task2.js";

export function testRectangleInRectangle(assert) {
    describe("Конверт и открытка", () => {
        it("Числа больше 0", () => {
            assert.deepEqual(rectangleInRectangle({ w: 0, h: 10 }, { w: 0, h: 9 }), { status: "failed", reason: "Введите числа больше нуля" });
        })
        it("Введенные значения не являются числами", () => {
            assert.deepEqual(rectangleInRectangle({ w: "Sd", h: "we" }, { w: "s", h: "s" }), { status: "failed", reason: "Введённые значения не являются числами" });
        })
    })
}

