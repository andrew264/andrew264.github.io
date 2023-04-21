const checkbox = document.getElementById('toggle-night')
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
