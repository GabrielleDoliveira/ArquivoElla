var nome = ["julia","julia2","julia3","julia4","julia5","julia6","julia7" ] , etnia = ["Branca","preta","parda","indigena","amarela"];


For(let i = 0, i<2, i++) {
    let pessoa = [];
    pessoa[i] = nome[Math.trunc(Math.random()*7)];
    pessoa[i+1] = Math.trunc(Math.random()*50);
    pessoa[i+2] = etnia[Math.trunc(Math.random()*6)];
    console.log(pessoa)
}