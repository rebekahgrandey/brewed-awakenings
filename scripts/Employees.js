import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

//create parameter for employee
//create empty array for orders
//iterate through orders with for of loop
    //use if statement to check if order's employee id is equal to employee's id
        //if true, push order to array
//NOTE: do not assign to a variable until invoked inside the click event function & passed employees argument


const employeeOrders = (cat) => {
    const fulfilledOrders = []

    for (const order of orders) {
        if (order.employeeId === cat) {
            fulfilledOrders.push(order)
        }
    }

    return fulfilledOrders
}

//copypasta click event listener code :)
//check if item clicked's id starts with "employee"
    //if true,
        //1. use deconstruction and store only the second variable (the employee id)
        //2. split the id to obtain number string
//for of loop to iterate through employees array
    //check if an employee id is equal to the parse integer of employee id variable
        //if true:
            //1. invoke the employee orders function and the employees function as the argument
            //2. assign to a variable
            //3. in window alert, add employee name and the length of order count variable


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            const selectedId = parseInt(employeeId)
            for (const employee of employees) {
                if (employee.id === selectedId) {

                    const orderCount = employeeOrders(selectedId)
                    console.log(orderCount)

                    window.alert(` ${employee.name} sold ${orderCount.length} products`)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

