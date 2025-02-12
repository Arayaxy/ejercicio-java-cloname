let turn = true
    const btnList = document.querySelectorAll('.table button')
    btnList.forEach(btn => {
        btn.addEventListener('click', event=>{
            event.target.textContent = turn? 'X' : 'O'
            turn = !turn
        })
    })