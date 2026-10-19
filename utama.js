// let foto1=document.getElementsByClassName("bali");
// let foto2=document.getElementsByClassName("kyoto");
// let foto3=document.getElementsByClassName("santorini");
// document.getElementById("balib").onclick=function(){
// document.getElementById("gambar").src=foto1.src; 
// document.getElementById("deskripsi").textContent="Bali escape pantai tebing sawah dalam 1 perjalanan";
// document.getElementById("deskripsi_harga").textContent=" Harga mulai dari 2,5 jt saja"
// };
// document.getElementById("kyotob").onclick=function(){
// document.getElementById("gambar").src=foto2.src;  
// document.getElementById("deskripsi").textContent="Kyoto serenity meliputi kuil,gerbang tori dan hutan sambu perjalanan 6 hari"
// document.getElementById("deskripsi_harga").textContent="harga mulai dari 4,8 jt"
// };
// document.getElementById("santorinib").onclick=function(){
// document.getElementById("gambar").src=foto3.src  ; 

// document.getElementById("deskripsi").textContent="santorini sunset merupakan rumah puith diatas tebing dan matahari terbena, di oka"
// document.getElementById("deskripsi_harga").textContent="Harga mulai dari 6,2jt saja"
// };
// document.getElementById("alert").onclick=function(){
//     alert("tiket berhasil dipesan");
// }

function ubahGambar(gambar) {
    let ubah = document.getElementById("gambar");

    if (gambar == "kyoto") {
        ubah.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_GS86_ptRuEhSIEVYG7e4TUssT7Cbzsk9bVyPTVa7w&s=10";
    }
}