function carregar() {
var msg = window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data=new Date()
var hora= 6
//var hora=data.getHours()
msg.innerHTML = `Agora são ${hora} horas<p>`

if(hora >5 && hora <12){
    img.src= 'FotoManha.jpg'
    document.body.style.backgroundColor='#FFFACD	'
}
else if(hora>12 && hora <18){
    img.src='FotoTarde.jpg'
    document.body.style.backgroundColor='#CD5C5C'

}
else{
    img.src='FotoNoite.jpg'
    document.body.style.backgroundColor='#51484F'
    
}

}

