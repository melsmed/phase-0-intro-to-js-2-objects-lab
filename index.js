
 let employee = {
    name: "Chondrus Crispus",
     streetAddress: "143 Main Street",
 }
function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {
        ...employee,
        [key]:value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee,key) {
    const newEmp = { ...employee}
    delete newEmp[key]
    return newEmp

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key]
    return employee
}