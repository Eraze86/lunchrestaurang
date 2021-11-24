
const d = new Date();

let weekday

//kopplar ihop d och weekday till day
let day = d.getDay(weekday);
let p = document.getElementById("p");
// kopplar day med switch, för att samla ihop det.
switch (day){
    case 1:
        p.innerText = "Idag är det Tåndag och vi bjuder på smarriga köttbullar med potatismos"
    break;    
    case 2:
        p.innerText = "Idag är det Tisdag och vi serveras saftig Panerad spätta med remoluadsås och potatismos"
    break;    
    case 3:
        p.innerText = "Onsdag bjuder på mör Högrevsgryta med rödbetor"
    break;    
    case 4:
        p.innerText = "Idag välkomnar i Torsdag med klassisk ärtsoppa"
    break;    
    case 5:
        p.innerText = "När fredag kommer är pizza en självklarhet"
    break;    
    default:
        p.innerText = "Tyvärr har vi stängt idag men välkommen på måndag";

};