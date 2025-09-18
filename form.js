// ====================================
// ==== Configuration pour Grist ======
// ====================================

// TODO: A implémenter

// ==========================================
// ==== fonction d'affichge des fiches ======
// ==========================================


function titreForm(){
  document.getElementById('titreForm').innerHTML = 'Titre du formulaire : le magnifique ';
  // TODO: aller chercher les infos dans grist
}
function descriptionForm(){
  document.getElementById('descriptionForm').innerHTML = 'description du formulaire <br><br><br><br> fin de la description';
  // TODO: aller chercher les infos dans grist
}
function descriptionOrganisationEquipe(){
  document.getElementById('descriptionOrganisationEquipe').innerHTML = 'description du formulaire <br><br><br><br> fin de la description';
  // TODO: aller chercher les infos dans grist
}
function descriptionPartieCAP(){
  document.getElementById('partieCAP').innerHTML = 'description du formulaire <br><br><br><br> fin de la description';
  // TODO: aller chercher les infos dans grist
}

// =====================================================
// ==== fonction de mise à jour/creation de fiche ======
// =====================================================


function changementService(context){
  alert(`changement de Service : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist et créer la liste dans le select de la sousDirection
}

function changementSousDirection(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist et créer la liste dans le select des projets + option création
}

function changementProjet(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist pour l'ensemble des champs (si le projet existe déjà)
}

function changementProjetLong(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementDescription(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementCompetences(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementDateDebut(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementDateFin(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementQuotite(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementOrganisationEquipeProjet(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementConditionSucces(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementModalitésPratiques(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementAbsencesPrevisionnelles(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementDatePremierPoint(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementDateSecondPoint(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementTroisiemePoint(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementCommentaires(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}

function changementContacts(context){
  alert(`changement de valeur : ${context.value}`);
  console.log("test input :", context.value);
  // TODO: aller chercher les infos dans grist
}


// ========================================
// ==== initialisation du formulaire ======
// ========================================


titreForm();
descriptionForm();
descriptionOrganisationEquipe();
descriptionPartieCAP();
