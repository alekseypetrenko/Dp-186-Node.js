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

let repoValue = "Sundry";
let role_name = "Data Cleanser";

// Для примера с репо Sundry и ролью Data Cleanser ожидаем 
// [{NAME: "Sundry Data Cleanser", DESCRIPTION: "Sundry Data Cleanser"}]

export function checkRoles(roles, repoValue, role_name) {
    let err = validation(roles, repoValue, role_name);
    if (typeof err === "object"){
        return err;
    }

    return roles.resultSet.Record.filter(filteredRoles =>
        filteredRoles.NAME == `${repoValue} ${role_name}`)
};

function validation(...args){
    for (let i = 0; i < args.length; i++){
        if(args[i] === undefined){
            return {status: "failed", reason: "Not all parameters were passed to the function"}
        }

    }
}

console.log(checkRoles(roles, "Fiber", "adsfrs "));

