const mailLenght = 6;
const passLenght = 5;

let mail = prompt('Please, enter email:', '');
let pass;
let newPass;
let newPassCheck;
let passCheck;
let ask;

let user = {
    mail: 'user@gmail.com',
    password: 'UserPass'
};

let admin = {
    mail: 'admin@gmail.com',
    password: 'AdminPass'
};

let massages = {
    passWrong: 'Wrong password',
    canceled: 'Canceled'
};

if (mail === null || mail.length === 0) {
    alert(massages.canceled);
} else if (mail.length < mailLenght) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (mail === user.mail || mail === admin.mail) {
    pass = prompt('Enter your password', '');
    if (mail === user.mail && pass === user.password || mail === admin.mail && pass === admin.pass) {
        ask = confirm('Do you want to change your password?');
        if (ask === true) {
            passCheck = prompt('Enter your old password', '');
            if (mail === user.mail && passCheck === user.password || mail === admin.mail && passCheck === admin.password) {
                newPass = prompt('Enter your new password', '');
                if (newPass.length >= passLenght) {
                    newPassCheck = prompt('Enter the new password again', '');
                    if (newPassCheck === newPass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                } else {
                    alert('It’s too short password. Sorry.');
                }
            } else if (passCheck === null || passCheck.length === 0) {
                alert(massages.canceled);
            } else {
                alert(massages.passWrong);
            }
        } else {
            alert('You have failed the change.');
        }
    } else if (pass === null || password.lenght === 0) {
        alert(massages.canceled);
    } else {
        alert(massages.passWrong);
    }
} else {
    alert('I don’t know you');
}