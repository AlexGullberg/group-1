fetch('assets/json/inkomst-dummy.json')
  .then(response => response.json())
  .then(data => console.log(data));



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

async function renderIncome() {
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

renderIncome();