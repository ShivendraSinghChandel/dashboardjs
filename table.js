async function fun(){
    let fet = await fetch("http://localhost:3000/student");
    let re=await fet.json();
    let s=document.getElementById("display_table");
    let p=re.map((e)=>
`
<tr>
<td>${e.id}</td>
<td>${e.namee}</td>
<td>${e.email}</td>
<td>${e.address}</td>
<td><button onclick="mydelete(${e.id})"><i class="fa-solid fa-trash-can"></i></button></td>
<td><button onclick="myedit(${e.id})"><i class="fa-solid fa-pen-to-square"></i></button></td>
</tr>
`).join(" ")
s.innerHTML=p;
}
fun();

function add(){
    let fdata={
        id:document.getElementById('id').value,
        namee:document.getElementById('stu_name').value,
        email:document.getElementById('stu_email').value,
        address:document.getElementById('stu_address').value
    }

    fetch("http://localhost:3000/student",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then((res)=>alert("Data stored"));
    
}

function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:"DELETE"
    })
    .then((res)=>alert("Data is deleted"))
}

let dupid=0;
function myedit(id){
    dupid=id;
    document.getElementById('editform').style.display="block";
}

function editdata(){
    let editfdata={
        id:document.getElementById('eid').value,
        namee:document.getElementById('ename').value,
        email:document.getElementById('eemail').value,
        address:document.getElementById('eaddress').value 
    }
    fetch(`http://localhost:3000/student/${dupid}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(editfdata)
    })
    .then((res)=>alert("Data is edited"));
}

function hideform(){
    document.getElementById('editform').style.display="none";
}