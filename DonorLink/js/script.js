function goToDonors() {
    window.location.href = "donors.html";
}

function validateSignup() {
    if (
        name.value === "" ||
        email.value === "" ||
        blood.value === "" ||
        password.value.length < 6
    ) {
        alert("Please fill all fields correctly");
        return false;
    }
    alert("Signup Successful");
    return true;
}

function validateLogin() {
    if (loginEmail.value === "" || loginPassword.value === "") {
        alert("Enter login details");
        return false;
    }
    alert("Login Successful");
    return true;
}

function request() {
    alert("Blood request sent!");
}

function filterDonors() {
    let group = filterGroup.value;
    let donors = document.getElementsByClassName("donor");

    for (let d of donors) {
        d.style.display =
            group === "all" || d.dataset.group === group
                ? "block"
                : "none";
    }
}

function validateContact() {
    if (cname.value === "" || cemail.value === "" || msg.value === "") {
        alert("Fill all fields");
        return false;
    }
    alert("Message sent!");
    return true;
}
