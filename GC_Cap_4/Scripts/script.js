var sum = 0;
function addToList()
{
    var cost = 0.0;
    var s = document.getElementById("shoppingList");
    var selNum = s.options[s.selectedIndex].value;
    var quantity = document.getElementById("quantity").value;
    if (selNum === "Eggs") {
        cost = quantity * 2;
        console.log(cost);
        sum = sum + cost;
    }
    else if (selNum === "Cheese") {
        cost = quantity * 3.53;
        console.log(cost);
        sum = sum + cost;
    }
    else if (selNum === "48 Laws") {
        cost = quantity * 322.44;
        console.log(cost);
        sum = sum + cost;
    }
    else if (selNum === "Computers") {
        cost = quantity * 2;
        console.log(cost);
        sum = sum + cost;
    }
    else if (selNum === "Drew Proof Spray") {
        vcost = quantity * 10000000.00;
        console.log(cost);
        sum = sum + cost;
    }
    else if (selNum === "Something else") {
        cost = quantity * 0;
        console.log(cost);
        sum = sum + cost;
    }
    var shoppingListe = document.getElementById("sLT");
    var row = shoppingListe.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    // Add some text to the new cells:
    cell1.innerHTML = selNum;
    cell2.innerHTML = quantity;
    cell3.innerHTML = cost;

    console.log(sum);

}
function checkOut() {
    var container = document.querySelector(".container");
    var pTag = document.createElement('p');
    pTag.textContent = "$"+ sum +" "+ "PAID";
    container.appendChild(pTag);
}