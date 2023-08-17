const alas=document.getElementById("alas")
const tinggi=document.getElementById("tinggi")
const hitungLuas=document.getElementById("hitungLuas")
const hasilLuasID=document.getElementById("hasilLuasID")

const sisi_satu=document.getElementById("sisi_satu")
const sisi_dua=document.getElementById("sisi_dua")
const sisi_tiga=document.getElementById("sisi_tiga")
const hitungKeliling=document.getElementById("hitungKeliling")
const hasilKeliling=document.getElementById("hasilKeliling")

const reset=document.getElementById("reset")
document.getElementById("luas").style.display="none"
document.getElementById("keliling").style.display = "none"

function luas(){
    const luas=document.getElementById("luas")
    const keliling=document.getElementById("keliling")
    luas.style.display="block"
    keliling.style.display="none"
}

function keliling(){
    const keliling=document.getElementById("keliling")
    const luas=document.getElementById("luas")
    keliling.style.display="block"
    luas.style.display="none"
}

hitungLuas.addEventListener("click",function(){
   if(alas.value=="" || tinggi.value==""){
    alert("Masukkan nilai alas / tinggi")
   }else{
        let luas=0.5*Number(alas.value)*Number(tinggi.value)
        
        const p1=document.createElement("p")
        const node = document.createTextNode("L = 1/2 x a x t")
        
        const p2=document.createElement("p")
        const node2=document.createTextNode(`L = 1/2 x ${alas.value} x ${tinggi.value}`)

        const p3=document.createElement("p")
        const node3=document.createTextNode(`L = ${luas}`)
        p1.appendChild(node)
        p2.appendChild(node2)
        p3.appendChild(node3)

        hasilLuasID.appendChild(p1)
        hasilLuasID.appendChild(p2)
        hasilLuasID.appendChild(p3)
   }
})

hitungKeliling.addEventListener("click",function(){
    if(sisi_satu.value==="" || sisi_dua.value==="" || sisi_tiga.value===""){
        alert("masukkan nilai sisi-sisi")
    }else{
        let keliling_hitung=Number(sisi_satu.value)+Number(sisi_dua.value)+Number(sisi_tiga.value)
        
        const p1=document.createElement("p")
        const node = document.createTextNode("K = S1 + S2 + S3")
        
        const p2=document.createElement("p")
        const node2=document.createTextNode(`K = ${sisi_satu.value} + ${sisi_dua.value} + ${sisi_tiga.value}`)

        const p3=document.createElement("p")
        const node3=document.createTextNode(`K = ${keliling_hitung}`)
        p1.appendChild(node)
        p2.appendChild(node2)
        p3.appendChild(node3)

        hasilKeliling.appendChild(p1)
        hasilKeliling.appendChild(p2)
        hasilKeliling.appendChild(p3)
    }
})


reset.addEventListener("click",function(){
    alas.value=""
    alas.innerHTML=alas
    tinggi.value=""
    tinggi.innerHTML=tinggi

    sisi_satu.value=""
    sisi_satu.innerHTML=sisi_satu
    sisi_dua.value=""
    sisi_dua.innerHTML=sisi_dua
    sisi_tiga.value=""
    sisi_tiga.innerHTML=sisi_tiga

    hasilKeliling.innerHTML=""
    hasilLuasID.innerHTML=""
})
