"use strict";

const elementList = document.querySelector(".js-list");
const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastacio";
const kittenOneNameMayuscula = kittenOneName.toUpperCase();
const kittenOneDesc =
  " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenOneRace = "Siamés";

const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoNameMayuscula = kittenTwoName.toUpperCase();
const kittenTwoDesc =
  " Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenTwoRace = "Sphynx";

const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeNameMayuscula = kittenThreeName.toUpperCase();
const kittenThreeDesc =
  " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenThreeRace = "Maine Coon";

let html_1 = '';
  if (kittenOneRace === "") {
    html_1 = `Uy que despiste, no sabemos su raza`;
  } else {
    html_1 = kittenOneRace;
  }

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenOneImage}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneNameMayuscula}</h3>
  <h4 class="card_race">${html_1}</h4>
  <p class="card_description">${kittenOneDesc}</p>
</article>
</li>`;

let html_2 = '';
  if (kittenTwoRace === "") {
    html_2 = `Uy que despiste, no sabemos su raza`;
  } else {
    html_2 = kittenTwoRace;
  }

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenTwoImage}"
    alt="sphynx-cat"
  />
  <h3 class="card_title">${kittenTwoNameMayuscula}</h3>
  <h4 class="card_race">${html_2}</h4>
  <p class="card_description">
  ${kittenTwoDesc}  
   </p>
</article>
</li>`;

let html_3 = '';
  if (kittenThreeRace === "") {
    html_3 = `Uy que despiste, no sabemos su raza`;
  } else {
    html_3 = kittenThreeRace;
  }

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${kittenThreeImage}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeNameMayuscula}</h3>
<h4 class="card_race">${html_3}</h4>
<p class="card_description">
${kittenThreeDesc}
</p>
</li>`;

elementList.innerHTML = "";

//Adakitten2.3//

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
  if( kittenOneDesc.includes(descrSearchText) ) {
  elementList.innerHTML = kittenOne;
  }
  
  if( kittenTwoDesc.includes(descrSearchText) ) {
  elementList.innerHTML = elementList.innerHTML + kittenTwo;
  }
  
  if( kittenThreeDesc.includes(descrSearchText) ) {
    elementList.innerHTML = elementList.innerHTML + kittenThree;
  }
  const inputDesc = document.querySelector('.js-input-desc');
  const inputPhoto = document.querySelector('.js-input-photo');
  const inputName = document.querySelector('.js-input-name');
  const labelMessageError = document.querySelector('.js-label-error');

  const addKittenBtn = document.querySelector(".js-btn-add");
  
  

  addKittenBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
       labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
    } else {
      labelMessageError.innerHTML = "¡Bienvenido gatito!"
        
    }
  });



  
  const cancelBtn = document.querySelector('.js-btn-cancel');
  const sectionForm = document.querySelector('.js-section-form'); 
  cancelBtn.addEventListener('click', (evCancel) => {
    evCancel.preventDefault();
    sectionForm.classList.add('collapsed'); 
  }
  );
  
/*
const plusBtn = document.querySelector('.js_plus')
plusBtn.addEventListener('click', (event) => {
event.preventDefault();
  function showNewCatForm() {
    sectionForm.classList.remove('collapsed');
  }
  function hideNewCatForm() {
    sectionForm.classList.add('collapsed');
  }
});*/

