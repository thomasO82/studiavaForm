const boutonsSupprimer = document.querySelectorAll('.btn-supprimer');
const buttonAddChoice = document.querySelector('.btn-add');

if (buttonAddChoice) {
  buttonAddChoice.addEventListener('click', () => {
    addChoiceInput(document.querySelector('#q-container'))
  })
}



// Ajouter un écouteur d'événements à chaque bouton de suppression
boutonsSupprimer.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const container = bouton.parentNode;
    container.remove();
  });
});

// window.addEventListener("load", ()=>{
//   if(document.querySelector("#type").value == "radio" || document.querySelector("#type").value == "checkbox"){
//     createForm(document.querySelector("#type"))
//   }
// })


function createForm(selectElement) {
  const additionalForm = document.getElementById('additionalForm');
  additionalForm.innerHTML = ""
  const selectedType = selectElement.value;

  if (selectedType === 'radio') {
    const choicesContainer = document.createElement('div');
    additionalForm.appendChild(choicesContainer);

    const addChoiceButton = document.createElement('button');
    addChoiceButton.textContent = "+ Ajouter un choix";
    addChoiceButton.type = "button"
    additionalForm.appendChild(addChoiceButton);

    addChoiceButton.addEventListener('click', function () {
      addChoiceInput(choicesContainer);
    });
  } else if (selectedType === 'checkbox') {
    const minSelectionsLabel = document.createElement('label');
    minSelectionsLabel.textContent = "Nombre minimal de sélections :";

    const minSelectionsInput = document.createElement('input');
    minSelectionsInput.type = 'number';
    minSelectionsInput.name = 'minSelections';

    const maxSelectionsLabel = document.createElement('label');
    maxSelectionsLabel.textContent = "Nombre maximal de sélections :";

    const maxSelectionsInput = document.createElement('input');
    maxSelectionsInput.type = 'number';
    maxSelectionsInput.name = 'maxSelections';

    const choicesContainer = document.createElement('div');
    additionalForm.appendChild(minSelectionsLabel);
    additionalForm.appendChild(minSelectionsInput);
    additionalForm.appendChild(maxSelectionsLabel);
    additionalForm.appendChild(maxSelectionsInput);
    additionalForm.appendChild(choicesContainer);

    const addChoiceButton = document.createElement('button');
    addChoiceButton.type = "button"
    addChoiceButton.textContent = "+ Ajouter un choix";
    additionalForm.appendChild(addChoiceButton);

    addChoiceButton.addEventListener('click', function () {
      addChoiceInput(choicesContainer);
    });
  }
}

function addChoiceInput(parentElement) {
  const choiceContainer = document.createElement('div');
  choiceContainer.classList.add('choice-container');

  const choiceLabel = document.createElement('label');
  choiceLabel.textContent = "Choix :";

  const choiceInput = document.createElement('input');
  choiceInput.type = 'text';
  choiceInput.name = 'choices';

  const removeChoiceButton = document.createElement('button');
  removeChoiceButton.type = "button"
  removeChoiceButton.textContent = "Supprimer";
  removeChoiceButton.addEventListener('click', function () {
    parentElement.removeChild(choiceContainer);
  });

  choiceContainer.appendChild(choiceLabel);
  choiceContainer.appendChild(choiceInput);
  choiceContainer.appendChild(removeChoiceButton);

  parentElement.appendChild(choiceContainer);
}

