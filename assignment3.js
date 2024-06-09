let button_element= document.getElementsByClassName("btn")[0];
        let video_status=document.getElementsByTagName("video")[0];
        
        button_element.addEventListener("click",function (){
            if(button_element.innerHTML=="Play"){
                button_element.innerHTML="Pause";
                video_status.play();
            }
            else{
                button_element.innerHTML="Play";
                video_status.pause();
            }
        })