    // Define users and their initial balances
    let users = [
        { username: "Luis", password: "contra1", balance: 200 },
        { username: "Yina", password: "contra2", balance: 290 },
        { username: "Madox", password: "contra3", balance: 67 }
    ];

    let currentUser = null;

    function login() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let user = users.find(u => u.username === username && u.password === password);
        if (user) {
            currentUser = user;
            document.getElementById("user").innerText = currentUser.username;
            document.getElementById("balance").innerText = currentUser.balance;
            document.getElementById("login").style.display = "none";
            document.getElementById("operations").style.display = "block";
        } else {
            alert("Usuario o contraseña incorreto");
        }
    }
    function withdraw() {
        let amount = parseFloat(document.getElementById("amount").value);
        if (amount <= 0|| isNaN(amount)) {
            alert("Cantidad invalida");
            return;
        }
        if (amount > currentUser.balance) {
            alert("Fondos insuficientes");
            return;
        }

        if (currentUser.balance - amount< 10){
            alert("Monto minimo alcanzado")
        } else currentUser.balance -= amount;
        updateBalance();


    }

    function deposit() {
        let amount = parseFloat(document.getElementById("amount").value);
        if (amount <= 0 || isNaN(amount)) {
            alert("Cantidad invalida");
            return;
        }
        if (currentUser.balance + amount > 1000){
            alert("Monto maximo alcanzado")
        } else currentUser.balance += amount;
        updateBalance();
    }

    function logout() {
        currentUser = null;
        document.getElementById("login").style.display = "block";
        document.getElementById("operations").style.display = "none";
    }

    function updateBalance() {
        document.getElementById("balance").innerText = currentUser.balance;
    }