function addIngredient() {
    const input = document.getElementById('ingredient-input');
    const ingredient = input.value.trim();
    if (ingredient) {
        const li = document.createElement('li');
        li.textContent = ingredient;

        const removeButton = document.createElement('span');
        removeButton.textContent = '';
        removeButton.className = 'fas fa-trash-alt';
        removeButton.id = 'remover';
        removeButton.onclick = function() {
            li.remove();
        };
        
        li.appendChild(removeButton);
        document.getElementById('ingredient-list').appendChild(li);
        input.value = '';
    }
}