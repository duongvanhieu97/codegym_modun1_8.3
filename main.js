function result() {
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    if (user === 'Admin' ) {
        if (password === 'TheMaster') {
            document.getElementById('result').innerHTML = 'Welcome'

        }else if (password === '') {
            document.getElementById('result').innerHTML = 'Canceled'
        } else {
            document.getElementById('result').innerHTML = 'Wrong password.'
        }
    }
else
    if (user === '') {
        document.getElementById('result').innerHTML = 'Canceled'

    } else {
        document.getElementById('result').innerHTML = 'I don’t know you'

    }
}