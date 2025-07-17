function test(){
    let a=document.getElementById("name").value;
    let c=document.getElementById("Password").value;
    if(a!='youssef' || c!='97413120'){
       alert('wrong')
       return false
    }
    return true
}
