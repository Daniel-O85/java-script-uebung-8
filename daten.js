/********************************
 * Array mit Jason
 * Inhalt Daten mit Ländern und
 * den dazugehörigen Hauptstädten
 *********************************/

const daten = [
    {
        land: "Ägypten",
        stadt: "Kairo"
    },
    {
        land: "Algerien",
        stadt: "Algier"
    },
    {
        land: "Angola",
        stadt: "Luanda"
    },
    {
        land: "Äquatorialguinea",
        stadt: "Malabo"
    },
    {
        land: "Äthiopien",
        stadt: "Addis Abeba"
    },
    {
        land: "Benin",
        stadt: "Porto-Novo"
    },
    {
        land: "Botswana",
        stadt: "Gaborone"
    },
    {
        land: "Burkina Faso",
        stadt: "Ouagadougou"
    },
    {
        land: "Burundi",
        stadt: "Gitega"
    },
    {
        land: "Elfenbeinküste",
        stadt: "Yamoussoukro"
    },
    {
        land: "Eritrea",
        stadt: "Asmara"
    },
    {
        land: "Dschibuti",
        stadt: "Dschibuti-Stadt"
    },
    {
        land: "Gabun",
        stadt: "Libreville"
    },
    {
        land: "Gambia",
        stadt: "Banjul"
    },
    {
        land: "Ghana",
        stadt: "Accra"
    },
    {
        land: "Guinea",
        stadt: "Conakry"
    },
    {
        land: "Guinea-Bissau",
        stadt: "Bissau"
    },
    {
        land: "Kamerun",
        stadt: "Yaoundé"
    },
    {
        land: "Kap Verde",
        stadt: "Praia"
    },
    {
        land: "Kenia",
        stadt: "Nairobi"
    },
    {
        land: "Rom",
        stadt: "Itanlien"
    }
];

////////////////////
// Html Ausgabe
/////////////////////
const e = document.getElementById("ergebnis");

ausgabe(daten);