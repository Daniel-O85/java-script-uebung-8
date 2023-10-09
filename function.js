/*************
 * Funktionen
 *************/
////////////////
// Hauptstädte
////////////////
// Klassische Funktion
function eineStadt(name) {
    let st = ``;
    // if else Methode
    if (name.toLowerCase() == "kairo")
        st = `${name.toUpperCase()} ist die Hauptstadt von`;

    else if (name.toLowerCase() == "algier" ||
        name.toLowerCase() == "luanda" ||
        name.toLowerCase() == "malabo" ||
        name.toLowerCase() == "addis abeba" ||
        name.toLowerCase() == "porto-novo" ||
        name.toLowerCase() == "gaborone" ||
        name.toLowerCase() == "ouagadougou" ||
        name.toLowerCase() == "gitega" ||
        name.toLowerCase() == "yamoussoukro" ||
        name.toLowerCase() == "asmara" ||
        name.toLowerCase() == "dschibuti-stadt" ||
        name.toLowerCase() == "libreville" ||
        name.toLowerCase() == "banjul" ||
        name.toLowerCase() == "accra" ||
        name.toLowerCase() == "conakry" ||
        name.toLowerCase() == "bissau" ||
        name.toLowerCase() == "yaoundé" ||
        name.toLowerCase() == "praia" ||
        name.toLowerCase() == "nairobi"
    )
        st = `${name.toUpperCase()} ist die Hauptstadt von`;
    else st = `Leider nichts gefunden`;
    return st;
};
////////////////
// Länder
////////////////
// Anonyme Funktion
const einLand = function (name) {
    let la = ``;
    // switch Methode
    switch (name.toUpperCase()) {
        case "ÄGYPTEN":
        case "ALGERIEN":
        case "ANGOLA":
        case "ÄQUATORIALGUINEA":
        case "ÄTHIOPIEN":
        case "BENIN":
        case "BOTSWANA":
        case "BURKINA FASO":
        case "BURUNDI":
        case "ELFENBEINKÜSTE":
        case "ERITREA":
        case "DSCHIBUTI":
        case "GABUN":
        case "GAMBIA":
        case "GHANA":
        case "GUINEA":
        case "GUINEA-BISSAU":
        case "KAMERUN":
        case "KAP VERDE":
        case "KENIA":
            la = `${name}`
            break;
        default:
            la = `Es gibt keine Informationen`;
            break;
    }
    return la;
};

///////////////////
// Funktionen Stadt
// und Land 
// zusammenführen
///////////////////
// Pfeil Funktion mit Block
const einOrt = (stand) => {
    let verbinden = `<div>`;
    for (let v = 0; v < stand.length; v++) {
        verbinden += `<p>${eineStadt(daten[v].stadt)} ${einLand(daten[v].land)}</p>`;
    }
    verbinden += `</div>`;
    return verbinden;
};

///////////////////
// Funktion
// ausgeben
///////////////////
// Pfeil Funktion ohne Block
const ausgabe = (a) => (e.innerHTML += einOrt(a));


