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
        let htmlSegment = `<div>
                            <span>${income.nameOfProvider}</span>
                            </div>
                            `;

        html += htmlSegment;
    });

    let container = document.querySelector('#income-test');
    container.innerHTML = html;
}

renderIncome();