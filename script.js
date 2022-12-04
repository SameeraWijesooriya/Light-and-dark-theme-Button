let mode=0;
function changeMode(){
    switch(mode){
        case 0:
            mode=1
            document.body.style.backgroundColor="#131459";
            document.getElementById("main-cont").style.borderColor="#F5F5F8 ";
            document.getElementById("phone1").style.borderColor="#F5F5F8 ";
            document.getElementById("phone2").style.borderColor="#F5F5F8 ";
            document.getElementById("phone3").style.borderColor="#F5F5F8 ";
            document.getElementById("phone").style.color="#F5F5F8 ";
            document.getElementById("main-cont").style.color="#F5F5F8 ";
            break
        case 1:
                mode=0
                document.body.style.backgroundColor="#F5F5F8";
                document.getElementById("main-cont").style.borderColor="#131459";
                document.getElementById("phone1").style.borderColor="#131459";
                document.getElementById("phone2").style.borderColor="#131459";
                document.getElementById("phone3").style.borderColor="#131459";
                document.getElementById("phone").style.color="#131459";
                document.getElementById("main-cont").style.color="#131459";
            break    
    }
}