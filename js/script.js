
const SHEET_ID = "PASTE_GOOGLE_SHEET_ID";
const ahliAPI = `https://opensheet.elk.sh/${SHEET_ID}/AHLI`;
const bukuAPI = `https://opensheet.elk.sh/${SHEET_ID}/BUKU`;

async function semakAhli(){

let ic=document.getElementById("carianIC").value;

let res=await fetch(ahliAPI);
let data=await res.json();

let jumpa=data.find(a=>a.IC==ic);

if(jumpa){
document.getElementById("keputusan").innerHTML=
`Nama: ${jumpa.Nama}<br>Status: ${jumpa.Status}`;
}else{
document.getElementById("keputusan").innerHTML="Tiada rekod dijumpai";
}
}

async function loadBuku(){

let res=await fetch(bukuAPI);
let data=await res.json();

let list=document.getElementById("listBuku");

data.forEach(b=>{
let li=document.createElement("li");
li.innerHTML=`${b.Tajuk} - ${b.Pengarang} (${b.Status})`;
list.appendChild(li);
});
}

if(document.getElementById("listBuku")){
loadBuku();

document.getElementById("searchBuku").addEventListener("keyup",function(){

let filter=this.value.toLowerCase();
let items=document.querySelectorAll("#listBuku li");

items.forEach(i=>{
i.style.display=i.innerText.toLowerCase().includes(filter)?"":"none";
});

});
}
