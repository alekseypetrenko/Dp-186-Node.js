import { checkRoles } from "../app/checkRoles.js";
let roles = {
    resultSet: {
        Record: [
            {NAME: "Admin", DESCRIPTION: "Default Administrator Role"},
            {NAME: "Global Viewer", DESCRIPTION: "Global Viewer"},
            {NAME: "Resin Data Cleanser", DESCRIPTION: "Resin Data Cleanser"},
            {NAME: "Fiber Viewer", DESCRIPTION: "Fiber Viewer"},
            {NAME: "Resilient Data Cleanser", DESCRIPTION: "Resilient Data Cleanser"},
            {NAME: "Resilient Editor", DESCRIPTION: "Resilient Editor"},
            {NAME: "Resilient Viewer", DESCRIPTION: "Resilient Viewer"},
            {NAME: "Wood Data Cleanser", DESCRIPTION: "Wood Data Cleanser"},
            {NAME: "Wood Viewer", DESCRIPTION: "Wood Viewer"},
            {NAME: "Wood Editor", DESCRIPTION: "Wood Editor"},
            {NAME: "Wood Approver", DESCRIPTION: "Wood Approver"},
            {NAME: "Ceramic Editor", DESCRIPTION: "Ceramic Editor"},
            {NAME: "Ceramic Approver", DESCRIPTION: "Ceramic Approver"},
            {NAME: "Softflooring Data Cleanser", DESCRIPTION: "Softflooring Data Cleanser"},
            {NAME: "Softflooring Viewer", DESCRIPTION: "Softflooring Viewer"},
            {NAME: "Yarn Group Data Cleanser", DESCRIPTION: "Yarn Group Data Cleanser"},
            {NAME: "Sundry Data Cleanser", DESCRIPTION: "Sundry Data Cleanser"},
            {NAME: "Sundry Viewer", DESCRIPTION: "Sundry Viewer"},
        ]
    }
}

export function testCheckRoles(assert) {
    describe("Unit tests for checkRoles", () => {
        it("Sundy репо и роль Data Cleanser", ()=>{
            // используем имеено deepEqual для проверки вложенных объектов
            assert.deepEqual(checkRoles(roles, "Sundry", "Data Cleanser"), [{NAME: "Sundry Data Cleanser", DESCRIPTION: "Sundry Data Cleanser"}])
        })
        it("Поиск роли которой нет в объекте roles", ()=>{
            assert.deepEqual(checkRoles(roles, "Sundry", "bla bla"), []);
        })
        it("Какой-то из параметров пустой", ()=>{
            assert.deepEqual(checkRoles(), {status: "failed", reason: "Not all parameters were passed to the function"});
        })
    })
}