'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let q1 = prompt('“Введите обязательную статью расходов в этом месяце”');
let q2 = prompt('“Во сколько обойдется?”');
let q3 = prompt('“Введите обязательную статью расходов в этом месяце”');
let q4= prompt('“Во сколько обойдется?”');




let appData = {
    budget: money,
    
    timeData: time,
    
    expenses: {
        q1 : q2,
        q3 : q4,
    },
    
    optionalExpenses: {},
    
    income: [],
    
    savings: false;
}

alert(appData.budget / 30);

