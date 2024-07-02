import inquirer from "inquirer";
import { chalkStderr } from "chalk";
import chalkAnimation from "chalk-animation";
function mainMenu() {
    inquirer
        .prompt({
        type: "number",
        name: "table",
        message: chalkStderr.bgBlueBright("Enter a number to generate its multiplication table:  "),
        validate: (input) => {
            if (input >= 2) {
                return true; // Valid input
            }
            else {
                return "Please enter a number greater than or equal to 2.";
            }
        },
    })
        .then((response) => {
        if (response.table) {
            tableCreated(response.table);
        }
    });
}
async function tableCreated(tableNo) {
    for (let i = 1; i <= 10; i++) {
        const animation = chalkAnimation.rainbow(`${tableNo} x ${i} = ${tableNo * i}`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        animation.stop(); // Stop the animation after each iteration
    }
}
mainMenu();
