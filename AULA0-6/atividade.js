let horas, minutos, titulos

titulos = prompt("qual é o titulo do filme?")
minutos = parseFloat(prompt("Quanto de duração o filme possui em minutos?"))

horas = minutos/60
horas = Math.floor(horas)
minutos = minutos - (horas*60)

document.write(`O Filme ${titulos} possui a duração de exatamente ${horas}h:${minutos}m`)

