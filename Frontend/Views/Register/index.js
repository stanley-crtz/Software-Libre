const form = document.getElementById("form")

form.addEventListener('submit', e => {
    e.preventDefault()

    const member = document.getElementById('member').value

    fetch('/api/setMember', {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({ member })
    })
        .then(() => window.location = '/')
})