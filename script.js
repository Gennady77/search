const btn = document.querySelector('.btn');
const list = document.querySelectorAll('.li');
const inputText = document.getElementById('inputText');
const dropdownLayout = document.getElementById('dropdownLayout');


btn.addEventListener('click', function() {
    openDropdown();
})

inputText.addEventListener('input', function(e) {
    openDropdown();
});

function openDropdown() {
    dropdownLayout.style.display = 'block';
}
