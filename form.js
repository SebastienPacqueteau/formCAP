// ====================================
// ==== Configuration pour Grist ======
// ====================================

let colonnesNecessaires = [
	{
    name: 'id_fiche',
    title: "Identifiant fiche",
    type: 'Any',
    optional: false // if column is optional.
	},
  {name: 'contenu',title: "Contenu a reprendre dans la fiche",type: 'Any',optional: false}
];

let tableauFiche = {};
let listeTables;

// ==========================================
// ==== fonction d'affichge des fiches ======
// ==========================================


function titreForm(){
  document.getElementById('titreForm').innerHTML = tableauFiche['titreFiche'];
  // TODO: aller chercher les infos dans grist
}
function descriptionForm(){
  document.getElementById('descriptionForm').innerHTML = tableauFiche['descriptionForm'];//'description du formulaire <br><br><br><br> fin de la description';
  //console.log(tableauFiche);
  // TODO: aller chercher les infos dans grist
}
function descriptionOrganisationEquipe(){
  document.getElementById('descriptionOrganisationEquipe').innerHTML = tableauFiche['descriptionOrganisationEquipe'];
  // TODO: aller chercher les infos dans grist
}
function descriptionPartieCAP(){
  document.getElementById('partieCAP').innerHTML = tableauFiche['partieCAP'];
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

function changementModalitesPratiques(context){
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



// =============================================
// ==== panneau de Configuration / option ======
// =============================================

function basculerPanneauOption() {
	const sidebar = document.getElementById('sidebar');
	sidebar.classList.toggle('collapsed');
	//console.log(sidebar);
}

function panneauOptionService(context){
	const optionService = document.getElementById('optionService');
	alert(optionService.value);
}

function panneauOptionChoixTableService(tables){
	const optionService = document.getElementById('optionService');
	let nouvelleOption;
	tables.forEach((table, i) => {
		nouvelleOption = document.createElement("option");
		nouvelleOption.value = table;
		nouvelleOption.text = table;

		optionService.add(nouvelleOption);
	});
	//console.log(optionService.options);
}

// ========================================
// ==== initialisation du formulaire ======
// ========================================

/*
grist.ready({
	onEditOptions() {
		basculerPanneauOption();
		//telechargeGantt();
  },
  columns: colonnesNecessaires,
	requiredAccess: 'read table',
	allowSelectBy: false
});
async function init(){
  const tableau = await grist.fetchSelectedTable({format: 'rows'});
  const colonnes = await grist.sectionApi.mappings();
  tableau.forEach((ligne, i) => {
    tableauFiche[ligne[colonnes.id_fiche]] = ligne[colonnes.contenu];
  });

  listeTables = await grist.docApi.listTables();
  titreForm();
  descriptionForm();
  descriptionOrganisationEquipe();
  descriptionPartieCAP();
	panneauOptionChoixTableService(listeTables);
}
*/
function init_sansGrist(){
	listeTables = ["services", "sousDirection","AAC"];
  titreForm();
  descriptionForm();
  descriptionOrganisationEquipe();
  descriptionPartieCAP();
	panneauOptionChoixTableService(listeTables);
}

init_sansGrist();
//init();
