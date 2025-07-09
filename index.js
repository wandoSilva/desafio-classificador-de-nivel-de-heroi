let nome
let xp

xp = 1500

switch (xp) {
    case xp < 1000:
        nome = "Ferro"
        break;
    case xp >= 1000:case xp <= 2000:
        nome = "Bronze"
        break;
    case xp >= 2001:case xp <= 5000:
        nome = "Prata"
        break;
    case xp >= 5001:case xp <= 7000:
        nome = "Ouro"
        break;
    case xp >= 7001:case xp <= 8000:
        nome = "Platina"
        break;
    case xp >= 8001:case xp <= 9000:
        nome = "Ascendente"
        break;
    case xp >= 9001:case xp <= 10000:
        nome = "Imortal"
        break;
    default:
        nome = "Radiante"
        break;
}

console.log(nome)