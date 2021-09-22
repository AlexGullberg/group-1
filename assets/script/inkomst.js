async function getIncome() {
    let url = 'assets/json/inkomst-dummy.json';
    try {
        let res = await fetch(url);
        // console.log("hello")
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderIncomeToList() {
    let incomes = await getIncome();
    let html = '';
    incomes.forEach(income => {
        let htmlSegment = `
            <ul class="income-list">
                <li class="income-list-item name-width">${income.nameOfProvider}</li>
                <li class="income-list-item date-width">${income.date}</li>
                <li class="income-list-item amount-width">${income.amount}</li>
            </ul>
            <div class="list-item-separator"></div>
                            
                            `;

        html += htmlSegment;
    });

    let container = document.querySelector('#income_list');
    container.innerHTML = html;
}

renderIncomeToList();



async function calculateIncomeCategories() {
    let incomes = await getIncome();
    let incomeCategoryValues = {
        "Lön":0,
        "Bidrag":0,
        "Övrigt":0,
        "Total":0,
    }
    incomes.forEach(income => {
        if(income.incomeCategory === "Lön"){
            incomeCategoryValues.Lön += income.amount;
            incomeCategoryValues.Total += income.amount;
        }
        if(income.incomeCategory === "Bidrag"){
            incomeCategoryValues.Bidrag += income.amount;
            incomeCategoryValues.Total += income.amount;
        }
        if(income.incomeCategory === "Övrigt"){
            incomeCategoryValues.Övrigt += income.amount;
            incomeCategoryValues.Total += income.amount;
        }
    });
    
    return incomeCategoryValues;
}

async function calculateProcentages(){
    let categoryValues = await calculateIncomeCategories()

}
test();

