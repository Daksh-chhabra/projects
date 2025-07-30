let column = ["column1", "column2", "column3"];
var newRow = document.querySelector(".add");
let totalIncoming =0 ;
let totalOutgoing =0;


let plusClick =0;
let minusClick = 0;
var row = document.getElementsByClassName("table")[0];
newRow.addEventListener("click",function(){
    plusClick++
    addrow();
    row.style.gridTemplateRows = `repeat(${plusClick}, 1fr)`;
    minusClick = 0;
});

var removeRow = document.querySelector(".remove");
removeRow.addEventListener("click",function(){
     minusClick++;
    removerow();
    if ( minusClick < plusClick){
         row.style.gridTemplateRows = `repeat(${(plusClick - minusClick )}, 1fr)`;
    }
   
    plusClick--;
   
});
row.addEventListener("click", function(event) {
    if (event.target.classList.contains("editable")) {
        const h2 = event.target;
        const value = h2.textContent;
        let input = document.createElement("input");
        if (h2.parentNode.classList.contains("column2") || h2.parentNode.classList.contains("column3"))
            {
                input.type = "number";
            }
            else 
            {
                input.type = "text";
            }
        
        input.value = value;
        h2.parentNode.replaceChild(input,h2);
        input.focus();
        
        function save() {
            let newh2 = document.createElement("h2");
            newh2.classList.add("editable");
            newh2.textContent = input.value;
            input.parentNode.replaceChild(newh2,input);
        }

        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                save();
            }
        });

        input.addEventListener("blur", save);
    }
});

function addrow() {
    const row = document.getElementsByClassName("table")[0];

    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.classList.add("cell", column[i]);

        // Description column (left)
        if (column[i] === "column1") {
            div.innerHTML = `<h2 class="editable">Click to edit</h2>`;
        } 
        // Credit column (middle)
        else if (column[i] === "column2") {
            div.innerHTML = `<h2 class="editable" style="color: var(--color-credit);">0</h2>`;
        } 
        // Debit column (right)
        else if (column[i] === "column3") {
            div.innerHTML = `<h2 class="editable" style="color: var(--color-debit);">0</h2>`;
        }

        row.appendChild(div);
    }
}
function removerow()
{
    var row = document.getElementsByClassName("table")[0];
    if (row.children.length >=3){
        for (let i = 0; i < 3; i++) {
            row.removeChild(row.lastElementChild);
        }
    }
}


document.querySelector(".income").addEventListener("click",totalIncome);
function totalIncome()
{
    let total=0;
    document.querySelectorAll(".column2 h2").forEach(cell => {
        let value1 = parseFloat(cell.textContent);
            if(!isNaN(value1)){
            total+= value1;
         }
    });
    var tinc =document.querySelector(".credit-col")
    tinc.innerHTML = `<h2>Total Income is ${total}</h2>`;
    totalIncoming = total;

}

document.querySelector(".debit").addEventListener("click",totalDebit);
function totalDebit()
{
    let expense =0;
    document.querySelectorAll(".column3 h2").forEach(cell => {
         let value = parseFloat(cell.textContent); 
         if(!isNaN(value)){
            expense+= value;
         }
    });
    var tdeb = document.querySelector(".debit-col");
    tdeb.innerHTML =`<h2>Total Expenses are  ${expense}</h2>`;
    totalOutgoing = expense;

}

document.querySelector(".balance").addEventListener("click",balance1);
function balance1()
{
    let balance = totalIncoming - totalOutgoing;
    var tbal = document.querySelector(".balance-col");
    tbal.innerHTML = `<h2>Total Balance is ${balance}</h2>`;
}

