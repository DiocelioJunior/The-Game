const characters = [
    {
      name: 'Victoria Chase',
      image: './assets/img/Victoria.gif',
      forca: '8',
      destreza: '5',
      inteligencia: '6',
      charme: '2',
      luta: '10',
      coragem: '9',
      age: '14',
      fears: '...',
      abilities: '...',
    },
    {
      name: 'Emily Johnson',
      image: './assets/img/Emily.gif',
      forca: '3',
      destreza: '8',
      inteligencia: '10',
      charme: '9',
      luta: '4',
      coragem: '3',
      age: '15',
      fears: '...',
      abilities: '...',
    },
    {
      name: 'David Roberts',
      image: './assets/img/David.gif',
      forca: '9',
      destreza: '7',
      inteligencia: '6',
      charme: '8',
      luta: '10',
      coragem: '7',
      age: '17',
      fears: '...',
      abilities: '...',
    }
  ];
  

// Função para salvar o personagem selecionado no local storage
function saveCharacter(character) {
  localStorage.setItem('selectedCharacter', JSON.stringify(character));
}

// Função para exibir o personagem e adicionar o evento de clique
function showCharacter(index) {
  const character = characters[index];
  document.getElementById('character-image-' + (index + 1)).src = character.image;
  document.getElementById('name-' + (index + 1)).textContent = character.name;
  document.getElementById('forca-' + (index + 1)).textContent = character.forca;
  document.getElementById('destreza-' + (index + 1)).textContent = character.destreza;
  document.getElementById('inteligencia-' + (index + 1)).textContent = character.inteligencia;
  document.getElementById('charme-' + (index + 1)).textContent = character.charme;
  document.getElementById('luta-' + (index + 1)).textContent = character.luta;
  document.getElementById('coragem-' + (index + 1)).textContent = character.coragem;
  document.getElementById('age-' + (index + 1)).textContent = character.age;
  document.getElementById('fears-' + (index + 1)).textContent = character.fears;
  document.getElementById('abilities-' + (index + 1)).textContent = character.abilities;

  // Adicionar evento de clique ao botão do card
  const button = document.getElementById('button-' + (index + 1));
  button.addEventListener('click', function() {
    saveCharacter(character);
    window.location.href = "./home.html";
  });
}

// Chamar a função showCharacter para exibir os personagens
showCharacter(0);
showCharacter(1);
showCharacter(2);
