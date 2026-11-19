function searchMedicine() {

    let name = document.getElementById("medicineName").value;

    let result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = "Please enter a medicine name.";
    }
    else {
        result.innerHTML =
        "<h3>Medicine Search</h3>" +
        "<p>You searched for: " + name + "</p>" +
        "<p>This is a demo. Verified medicine information is not connected yet.</p>";
    }
}
