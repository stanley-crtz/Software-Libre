(() => {
    const el = document.querySelector('#members')
    fetch('/api/getMembers')
        .then(resp => resp.json())
        .then(({ members }) => {
            let resp = ''
            members.forEach(element => {
                resp += `
                    <div class="alert alert-dismissible alert-primary m-2">
                        ${element}
                    </div>
                `
            });

            el.innerHTML = resp
        })
})()

document.getElementById('button').addEventListener('click', () => {
    window.location = "/registro"
})