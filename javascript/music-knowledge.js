window.onload = function () {
    var song_1 = document.getElementById("song-1");
    var play_pause_1 = document.getElementById("play-pause-1");
    var song_2 = document.getElementById("song-2");
    var play_pause_2 = document.getElementById("play-pause-2");
    var song_3_1 = document.getElementById("song-3-1");
    var song_3_2 = document.getElementById("song-3-2");
    var play_pause_3_1 = document.getElementById("play-pause-3-1");
    var play_pause_3_2 = document.getElementById("play-pause-3-2");
    var musicimg1 = document.querySelector(".musicimg1");
    var musicimg2 = document.querySelector(".musicimg2");
    


    play_pause_1.onclick = function () {
        if (song_1.paused) {
            play_pause_1.className = "pause";
            song_1.play();
            musicimg1.style.animation = "musicshow 15s infinite alternate linear";
        } else {
            play_pause_1.className = "play";
            song_1.pause();
            musicimg1.style.animation = "none";
        }
    }


    play_pause_2.onclick = function () {
        if (song_2.paused) {
            play_pause_2.className = "pause";
            song_2.play();
            musicimg2.style.animation = "musicshow 15s infinite alternate linear";
        } else {
            play_pause_2.className = "play";
            song_2.pause();
            musicimg2.style.animation = "none";
        }
    }

    play_pause_3_1.onclick = function () {
        if (song_3_1.paused) {
            play_pause_3_1.className = "pause";
            song_3_1.play();
        } else {
            play_pause_3_1.className = "play";
            song_3_1.pause();
        }
    }

    play_pause_3_2.onclick = function () {
        if (song_3_2.paused) {
            play_pause_3_2.className = "pause";
            song_3_2.play();
        } else {
            play_pause_3_2.className = "play";
            song_3_2.pause();
        }
    }
}