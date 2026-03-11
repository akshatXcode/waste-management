async function submitReport(){

const location=document.getElementById("location").value;
const type=document.getElementById("type").value;

await fetch("/report",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({location,type})
});

loadReports();
}

async function loadReports(){

const res=await fetch("/reports");
const data=await res.json();

const list=document.getElementById("list");
list.innerHTML="";

data.forEach(r=>{
const li=document.createElement("li");
li.innerText=r.location+" - "+r.type;
list.appendChild(li);
});

}

loadReports();
