async function getIncome() {
    let url = 'assets/json/inkomst-dummy.json';
    try {
        let res = await fetch(url);
        // console.log("hello")
        let response = await res.json();
        renderIncomeToList(response);
        let categories = calculateIncomeCategories(response);
        //calculate percentage med categories parameter
        let percentage = calculateProcentages(categories);
        // Function declared in pie.js
        getPercentageAndCategories(percentage)

    } catch (error) {
        console.log(error);
    }
}


function renderIncomeToList(incomes) {
    let html = '';
    incomes.forEach(income => {
        let htmlSegment = `
            <ul class="income-list">
                <li class="usual-text-size income-list-item name-width">${income.nameOfProvider}</li>
                <li class="usual-text-size income-list-item date-width">${income.date}</li>
                <li class="usual-text-size income-list-item amount-width">${income.amount}</li>
            </ul>
            <div class="list-item-separator"></div>
                            
                            `;

        html += htmlSegment;
    });

    let container = document.querySelector('#income_list');
    container.innerHTML = html;
}

//renderIncomeToList();



function calculateIncomeCategories(incomes) {
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
    // calculate percentages anrop????
    return incomeCategoryValues;
}


function calculateProcentages(incomeCategoryValues){
    let totalValue = incomeCategoryValues.Total;
    let categoryPercentage = {};

    for (const key in incomeCategoryValues) {
        //console.log(`${key}: ${incomeCategoryValues[key]}`);
        
        if(incomeCategoryValues[key] > 0 && key !== "Total") {

            let incomePercentageResult = percentage(incomeCategoryValues[key] ,totalValue)
            categoryPercentage[key] = incomePercentageResult;
           
        }
      }
      return categoryPercentage;
}


function percentage(partialValue, totalValue) {

        let percentage = (100 * partialValue) / totalValue; 
        return Math.round(percentage);
    }


getIncome();