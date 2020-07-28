function calcular() {

    const total = document.getElementById('total').value
    const brancos = document.getElementById('brancos').value
    const nulos = document.getElementById('nulos').value
    const val = document.getElementById('val').value

    const percent_brancos = Math.round(brancos/total * 100)
    const percent_nulos = Math.round(nulos/total * 100)
    const percent_val = Math.round(val/total * 100)

    document.getElementById('brancos').value = `${brancos} são ${percent_brancos} % do total`
    document.getElementById('nulos').value = `${nulos} são ${percent_nulos} % do total`
    document.getElementById('val').value = `${val} são ${percent_val} % do total`

}


