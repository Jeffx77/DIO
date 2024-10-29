
function switchTheme(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    const player = document.getElementById("music");

    // Verifica o tema atual e troca a música
    if (document.body.classList.contains('dark-theme')) {
        player.src = "music/inverted-world.mpeg"; // Define a música para o tema escuro
    } else if (document.body.classList.contains('light-theme')) {
        player.src = "music/assets_musics_normal-world.mpeg"; // Define a música para o tema claro
    }
}