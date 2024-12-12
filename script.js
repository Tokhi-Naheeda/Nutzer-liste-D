
console.log('test');
const tableElement=document.querySelector('#user-table');
const userBody=document.querySelector('#users');
const ladeMsg=document.querySelector('#lade-msg');
const errorElement=document.querySelector('#error'); 
const spinnerElement=document.querySelector('.spinner'); //runde laden element

spinnerElement.style.display = "block";
ladeMsg.style.display = "block";
tableElement.style.display = "none";
errorElement.style.display = "none";

fetch('./userdata.json').then(response=>{
    console.log(response);
    /*
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      */  
    return response.json();
})
.then(data=>{
    console.log(data)
    const userZahl=data.users.slice(0,10);
    userZahl.forEach(el=>{
        const row=document.createElement('tr');
        row.innerHTML=`<td>${el.id} </td>`
        row.innerHTML+=`<td>${el.firstName} </td>`
        row.innerHTML+=`<td>${el.lastName} </td>`
        row.innerHTML+=`<td>${el.age} </td>`
        row.innerHTML+=`<td>${el.email} </td>`
        userBody.appendChild(row);
        delay();
    })
})
.catch(error =>{
    console.log(error)
    setTimeout(()=>{
    errorElement.innerText='Fehler beim abrufen der Datein !'
    errorElement.style.display = "block";
        spinnerElement.style.display = "none";
        ladeMsg.style.display = "none";
        tableElement.style.display = "none";
    }, 3000);
    })


function delay(){
    setTimeout(()=>{
            spinnerElement.style.display = "none";
            ladeMsg.style.display="none"
            tableElement.style.display = "block";
        },3000);
    }
        

