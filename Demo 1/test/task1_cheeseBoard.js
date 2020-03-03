import { createCheeseBoard } from "../src/task1.js";

export function testCreateCheeseBoard(assert) {
    describe("Тест шахматной доски", () => {
        it("Доска размером 2 на 2", () => {
            assert.equal(createCheeseBoard(2, 2, "*"), "* \n *\n")
        })
        it("Высота или ширина больше 50", () => {
            assert.deepEqual(createCheeseBoard(51, 10, "*"), { status: "failed", reason: "Введите 1-й и 2-й аргументы в диапазоне от 1 до 50" });
        })
        it("Высота или ширина не являются числами, символ не является строкой", () => {
            assert.deepEqual(createCheeseBoard("re", "er", 2), { status: "failed", reason: "1-й и 2-й аргументы должны быть целыим числами, 3-й - строкой" });
        })
        it("Пустые параметры", () => {
            assert.deepEqual(createCheeseBoard(), { status: "failed", reason: "Какой-то из 3 параметров пустой" });
        })
    })
}
