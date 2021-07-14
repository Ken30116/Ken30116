var video=document.querySelector(".video");
        var juice=document.querySelector(".green-juice");
        var btn=document.getElementById("play-pause")

        function togglePlayPause(){
            if(video.paused){
                btn.className="pause";
                video.play();
            }
            else{
                btn.className="play";
                video.pause();
            }
        }

        btn.onclick=function(){
            togglePlayPause();
        }
       
        video.addEventListener("timeupdate",function(){
            var juicePose=video.currentTime/video.duration;
            juice.style.width=juicePose*100+"%";
            if(juicePose==1){
            btn.className="play";
            video.pause();
            }           
        })

        