"use strict";
function hello(person) {
    let greeting = "Hello";
    if (person.firstName) {
        greeting += ` ${person.firstName}`;
    }
    if (person.lastName) {
        greeting += ` ${person.lastName}`;
    }
    return greeting;
}
hello({
    firstName: 'John',
});
