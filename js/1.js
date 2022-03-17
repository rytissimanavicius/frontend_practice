function openLoginForm() {
    document.getElementById("myLoginForm").style.display = "block";
}

function openRegisterForm() {
    document.getElementById("myLoginForm").style.display = "none";
    document.getElementById("myRegisterForm").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("myLoginForm").style.display = "none";
}

function closeRegisterForm() {
    document.getElementById("myRegisterForm").style.display = "none";
}

function validateLogin() {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    if (email == "")
        alert("KLAIDA! Įveskite el. paštą.")
    else if (password == "")
        alert("KLAIDA! Įveskite slaptažodį.")
    else if (email == "admin@admin.lt" && password == "admin123") {
        closeLoginForm()
        document.getElementById("settings_button").style.display = "block";
        document.getElementById("logout_button").style.display = "block";
        document.getElementById("login_button").style.display = "none";
        alert("Prisijungimas sėkmingas!")
    }
}

function validateRegistration() {
    var name = document.getElementById("registration_name").value;
    var email = document.getElementById("registration_email").value;
    var password1 = document.getElementById("registration_password1").value;
    var password2 = document.getElementById("registration_password2").value;

    if (name == "")
        alert("KLAIDA! Įveskite vardą.")
    else if (email == "")
        alert("KLAIDA! Įveskite el. paštą.")
    else if (password1 == "")
        alert("KLAIDA! Įveskite slaptažodį.")
    else if (password1 != password2)
        alert("KLAIDA! Slaptažodžiai nesutampa.")
    else if (password1.length < 8)
        alert("KLAIDA! Slaptažodis per trumpas (minimum 8 simboliai).")
    else {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false) {
            alert('KLAIDA! Netinkamas el. pašto adresas.');
        }
        else {
            closeRegisterForm()
            openLoginForm()
            alert("Registracija sėkminga!")
        }
    }
}

function logout() {
    document.getElementById("settings_button").style.display = "none";
    document.getElementById("logout_button").style.display = "none";
    document.getElementById("login_button").style.display = "block";
    alert("Sėkmingai atsijungta!")
}

function game() {
    document.getElementById("gameForm").style.display = "block";
}

var spejimuSk = 0;
var random = Math.floor(Math.random() * 100) + 1;
var ismeginti = []
function gameLogic() {
    spejimuSk += 1
    var spejimas = document.getElementById("game_sk").value;

    if (spejimas == random) {
        alert("Skaičių atspėjote! (" + spejimuSk + " bandymas)." + ismeginti + "\n" + "Išmėginti: " + ismeginti.join(", "))
        random = Math.floor(Math.random() * 100) + 1;
        spejimuSk = 0
        ismeginti = []
    }
    else {
        ismeginti.push(spejimas)
        alert("Neatspėjote! (" + spejimuSk + " bandymas)." + "\n" + "Išmėginti: " +  ismeginti.join(", "))
    }
}

function closeGame() {
    spejimuSk = 0
    ismeginti = []
    document.getElementById("gameForm").style.display = "none";
}

function openSettingsForm() {
    document.getElementById("mySettingsForm").style.display = "block";
}

function closeSettingsForm() {
    document.getElementById("mySettingsForm").style.display = "none";
}

var dark = false
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    if (!dark) {
        document.getElementById('temptemp1').classList.remove('background-color-popup');
        document.getElementById('temptemp1').classList.add('background-color-popup-dark');
        document.getElementById('temptemp2').classList.remove('background-color-popup');
        document.getElementById('temptemp2').classList.add('background-color-popup-dark');
        document.getElementById('temptemp3').classList.remove('background-color-popup');
        document.getElementById('temptemp3').classList.add('background-color-popup-dark');
        document.getElementById('temptemp4').classList.remove('background-color-popup');
        document.getElementById('temptemp4').classList.add('background-color-popup-dark');
    }
    else {
        document.getElementById('temptemp1').classList.remove('background-color-popup-dark');
        document.getElementById('temptemp1').classList.add('background-color-popup');
        document.getElementById('temptemp2').classList.remove('background-color-popup-dark');
        document.getElementById('temptemp2').classList.add('background-color-popup');
        document.getElementById('temptemp3').classList.remove('background-color-popup-dark');
        document.getElementById('temptemp3').classList.add('background-color-popup');
        document.getElementById('temptemp4').classList.remove('background-color-popup-dark');
        document.getElementById('temptemp4').classList.add('background-color-popup-');
    }

    if (dark)
        dark = false
    else
        dark = true
}

function changeColor() {
    var temp = document.getElementById('colorChanger').value;

    Array.from(document.getElementsByTagName('h2')).forEach(element => {
        element.style.color = temp
    });
    Array.from(document.getElementsByTagName('h5')).forEach(element => {
        element.style.color = temp
    });
}
