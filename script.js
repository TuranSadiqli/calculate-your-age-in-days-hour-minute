let check=0;
let check2=0;
let check3=0;
function ageInDays(){
    if(check>0){
        window.alert("yeniden hesablamaq üçün sil-ə basın!")
    }else{
        
    let birthdate=prompt("neçənci ildə dogulubsuz?")
    
    let birthmonth=prompt("neçənci ayda dogulubsuz?")
    
    let birthday=prompt("ayin neçəsi dogulubsuz?")
    let date=new Date();
    let ageindays=((date.getFullYear()-(birthdate)-1)*365)+((12-(birthmonth-date.getMonth()))*31)+(31-(birthday-date.getDay()));
    let h1=document.createElement('h1');
    let textAsnwer=document.createTextNode("həyatının "+ageindays+"ci/cu gününü yaşayırsan");
    h1.setAttribute('id',"ageindays");
    h1.appendChild(textAsnwer);
    document.getElementById("result").appendChild(h1);
    check++;
    }
}
function ageInHours(){
    if(check2>0){
        window.alert("yeniden hesablamaq üçün sil-ə basın!")
    }else{
        
    let birthdate=prompt("neçənci ildə dogulubsuz?")
    
    let birthmonth=prompt("neçənci ayda dogulubsuz?")
    
    let birthday=prompt("ayin neçəsi dogulubsuz?")
    let date=new Date();
    let ageinhours=(((date.getFullYear()-(birthdate)-1)*365)+((12-(birthmonth-date.getMonth()))*31)+(31-(birthday-date.getDay())))*24;
    let h1=document.createElement('h1');
    let textAsnwer=document.createTextNode("həyatının "+ageinhours+"ci/cu saatını yaşayırsan");
    h1.setAttribute('id',"ageinhours");
    h1.appendChild(textAsnwer);
    document.getElementById("result2").appendChild(h1);
    check2++;
    }
}
function ageInMinutes(){
    if(check3>0){
        window.alert("yeniden hesablamaq üçün sil-ə basın!")
    }else{
        
    let birthdate=prompt("neçənci ildə doğulmusuz");
    
    let birthmonth=prompt("neçənçi ayda doğulmusuz");
    
    let birthday=prompt("ayin neçəsi doğulmusuz");
    let date=new Date();
    let ageinminutes=((((date.getFullYear()-(birthdate)-1)*365)+((12-(birthmonth-date.getMonth()))*31)+(31-(birthday-date.getDay())))*24)*60;
    let h1=document.createElement('h1');
    let textAsnwer=document.createTextNode("həyatının "+ageinminutes+"ci/cu dəqiqəsini yaşayırsan");
    h1.setAttribute('id',"ageinminutes");
    h1.appendChild(textAsnwer);
    document.getElementById("result3").appendChild(h1);
    check3++;
    }
}

function reset(){
    check=0;
    document.getElementById("ageindays").remove();
}
function reset2(){
    check2=0;
    document.getElementById("ageinhours").remove();
}
function reset3(){
    check3=0;
    document.getElementById("ageinminutes").remove();
}