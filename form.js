const d = new Date();
s = document.getElementById("DATE");
s.innerText= "Bonjour Mr/Mdm la date  d'ajourd'hui est  "+d.getDate()+ "/"+(d.getMonth()+1)+ "/"+d.getFullYear();
document.getElementById("p1").innerText =+d.getFullYear();
function validate(){

 FormName();
 FormLast();
 FormAge();
 FormCode();
 FormEmail();
 FormPass();
 FormVerifi();
}
function FormAge(){

  let  dateN = document.getElementById("age").value;
  let  err = document.getElementById("ldatenaiss");
  var x = new Date().getFullYear() - new Date(dateN).getFullYear();
  if(x < 18){
      err.innerText = "enter birth date!";
  }else{
   return true;
  }

}
function FormName(){
  let name=document.getElementById( 'name').value;
  nm=document.getElementById( 'lname');   
  if (name == "" || name.length<2 ){  
     
    nm.innerText="Name  can't be blank ";

  }else{
    nm.innerText=" ";
  }

}
function FormLast(){
  
  let last=document.getElementById(   'last').value;  
  ls=document.getElementById(   'llast'); 
  if (last.length <3){  
     
    ls.innerText="last name  can't be blank ";
 
       
  } else{
    return true;
  }
  
}
function FormCode(){
  
  let codepostal=document.getElementById('codepostal').value; 
  cp=document.getElementById('lcodepostal'); 
  if(codepostal.length<5){  

    cp.innerText="Codepostal be at least  5 characters long. ";
   } else{
    return true;
   }

}
function FormPass(){
  
  let password=document.getElementById('password').value; 
  pd=document.getElementById('lpassword'); 
  
  if(password.length<7){  
 
   pd.innerText="Password must be at least 6 characters long."; 
  }else{
   return true;
  }


}
function FormEmail(){
  em = document.getElementById("email").value;
  regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
  testemail = regEmail.test(em);
  if(!testemail){
      document.getElementById("lemail").innerHTML = "non valider";
  }
  else{
      document.getElementById("lemail").innerHTML = "valider";
  }

}
function FormVerifi(){
  
  let verification=document.getElementById('  verification ').value; 
  let vf=document.getElementById('  lverification '); 

     if(verification == ""){  
 
      vf.innerText="verification of password must be at least 6 characters long."; 

     }else{
       return true;
     }


}
function FormGender(){


          let value =document.querySelector ('input[name="gender"]:checked');
      
          if (value!= null) {
              alert(value);
         
          }
          else {
          return true;
          }
       

}
