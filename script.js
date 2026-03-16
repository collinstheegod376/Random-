let subscriptions = JSON.parse(localStorage.getItem('subs')) || [];

function renderSubs() {
    const container = document.getElementById('subs');
    container.innerHTML = subscriptions.map((sub, i) => 
        `<div class="sub-card">
            <h3>${sub.name}</h3>
            <p>$${sub.cost}/mo | Next: ${sub.nextDue}</p>
            <button onclick="deleteSub(${i})">Delete</button>
        </div>`
    ).join('');
}

function addSub() {
    const name = prompt('Service name:');
    const cost = prompt('Monthly cost:');
    const nextDue = prompt('Next due date (YYYY-MM-DD):');
    subscriptions.push({name, cost: parseFloat(cost), nextDue});
    localStorage.setItem('subs', JSON.stringify(subscriptions));
    renderSubs();
}

function deleteSub(index) {
    subscriptions.splice(index, 1);
    localStorage.setItem('subs', JSON.stringify(subscriptions));
    renderSubs();
}
