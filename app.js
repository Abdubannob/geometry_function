const geometry = {
    circumtance: function (r) {
        return 2 * Math.PI * r
    },
    diametr: function (d) {
        return 2 * d
    },
    radius: function (r) {
        return r / 2
    },
}
const RightTriangle = {

    righttriangle: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        return Math.pow(a, 2) + Math.pow(b, 2)
    }
}
const square = {
    perimetr: function (a) {
        return 4 * a
    },
    area: function (a) {
        return Math.pow(a, 2)
    },
    c: function (a) {
        return Math.sqrt(2 * a)
    }
}
const Rectangle = {

    perimetr: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        return 2 * a + 2 * b
    },
    area: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        return a * b
    },

}
const ScaleneTriangle = {
    perimetr: function () {
        let a = Number(document.querySelector('#inp1').value)
        let b = Number(document.querySelector('#inp2').value)
        let c = Number(document.querySelector('#inp3').value)
        return a + b + c
    },
    area: function () {
        let b = Number(document.querySelector('#inp1').value)
        let h = Number(document.querySelector('#inp2').value)
        return 1 / 2 * b * h
    }
}
const EquilateralTriangle = {
    perimetr: function (a) {
        return 3 * a
    },
    height: function (a) {
        return (Math.sqrt(3) / 2) * a
    },
    area: function (a) {
  
        return (Math.sqrt(3) / 4) * Math.pow(a, 2)
    }

}
const Paralellogram = {
    perimetr: function (a, b) {
        
        return 2 * a + 2 * b
    },
    area: function (b, h) {
       
        return b * h
    }
}
const Hexagon = {
    perimetr: function (a) {
        return 6 * a
    },
    area: function (a, r) {
       
        return 1 / 2 * 6 * a * r
    }
}
const Pentagon = {
    perimetr: function (a) {
        return 5 * a
    },
    area: function (a, r) {
       return 1 / 2 * 5 * a * r
    }
}
const Sphere = {
    area: function (r) {
        return 4 * Math.PI * Math.pow(r, 2)
    },
    Volume: function (r) {
        return 4 / 3 * Math.PI * Math.pow(r, 3)
    }
}
const Cylinder = {
    area: function () {
        let r = Number(document.getElementById("inp1").value)
        let h = Number(document.getElementById("inp2").value)
       
        return 2* Math.PI * Math.pow(r, 2) + 2* Math.PI * r * h
    },
    Volume: function(){
        let r = Number(document.getElementById("inp1").value)
        let h = Number(document.getElementById("inp2").value)
        return  Math.PI * Math.pow(r, 2) * h
    }
}

const Trapezoid = {
    Area: function (){

        let a = Number(document.getElementById("inp1").value)
        let b = Number(document.getElementById("inp2").value)
        let h = Number(document.getElementById("inp3").value)
       
        return (1/2) * (a+b) *h
    },
    perimetr: function(){
        let a = Number(document.getElementById("inp1").value)
        let b = Number(document.getElementById("inp2").value)
        let c = Number(document.getElementById("inp3").value)
        let d = Number(document.getElementById("inp4").value)
        return a+b+c+d
    }
}

const Cuboid = {
  Area: function (){
    let a = Number(document.getElementById("inp1").value)
    let b = Number(document.getElementById("inp2").value)
    let h = Number(document.getElementById("inp3").value)
    return 2*a*h + 2*b*h + 2 * b *a
  },
  Volume: function(){
    let a = Number(document.getElementById("inp1").value)
    let b = Number(document.getElementById("inp2").value)
    let h = Number(document.getElementById("inp3").value)
    return b*a*h
  }

}
const Circle ={
    Area: function(){
        let r = Number(document.getElementById("inp1").value)
        return Math.PI *Math.pow(r, 2)
    }
}

document.querySelector('.lines').onclick = function () {
    if (document.querySelector('section').classList.contains('hidopt')) {
        document.querySelector('span').style.color = 'black'
        document.querySelector('section').classList.remove('hidopt')
    }
    else {
        document.querySelector('section').classList.add('hidopt')
        document.querySelector('span').style.color = 'white'
    }
}

function handlerButton() {
    let screen = document.querySelector('.screen')
    let input1 = Number(document.getElementById('inp1').value)
    
    let select = document.getElementById('select')
    let sel = document.getElementById('sel')


    if (select.value === 'RightTriangle') {

        if (sel.value === 'righttriangle') {
            screen.textContent = RightTriangle.righttriangle()
        }
    }


    if (select.value === 'ScaleneTriangle') {
        // let input1 = Number(document.getElementById('inp1').value)
        //      let input2 = Number(document.getElementById('inp2').value)
        // let input3 = Number(document.getElementById('inp3').value)


        if (sel.value === 'perimetr') {
            screen.textContent = ScaleneTriangle.perimetr()
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = a + b + c '
        }
        else if (sel.value === 'area') {
            screen.textContent = ScaleneTriangle.area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = 1/2 bh '
          
        }

    }


    if (select.value === 'EquilateralTriangle') {

        if (sel.value === 'perimetr') {
            screen.textContent = EquilateralTriangle.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 3 * a'
        }
        else if (sel.value === 'height') {
            screen.textContent = EquilateralTriangle.height(input1)
            document.querySelector('.box1').textContent = 'h = '
            document.querySelector('.formula').innerHTML = 'h = √3/2 * a'
        }
        else {
            screen.textContent = EquilateralTriangle.area(input1)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = 'A = √3/4 * a <sup> 2 </sup>'
        }

    }

    if (select.value === 'square') {
        
        if (sel.value === 'perimetr') {
            screen.textContent = square.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 4a'
        }
        else if (sel.value === 'area') {
            screen.textContent = square.area(input1)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = 'A = a <sup>2</sup> '

        }
        else {
            screen.textContent = square.c(input1)
            document.querySelector('.box1').textContent = 'C = '
            document.querySelector('.formula').innerHTML = 'C = √2*a '
        }


    }
    if(select.value === 'Rectangle'){
        
        // img.setAttribute( "src", "./images/rec.PNG")

        if(sel.value === 'perimetr'){
            screen.textContent = Rectangle.perimetr()
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 2a + 2b'
        }
        else{
            screen.textContent = Rectangle.area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = ab'
        }
    }
    if (select.value === 'Paralellogram') {
        let input2 = Number(document.getElementById('inp2').value)
        if (sel.value === 'perimetr') {
            screen.textContent = Paralellogram.perimetr(input1, input2)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 2a + 2b '
        }
        else if (sel.value === 'area') {
            screen.textContent = Paralellogram.area(input1, input2)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = bh '

        }
        


    }
    if(select.value === 'Hexagon'){
        let input2 = Number(document.querySelector('#inp2').value)
        if(sel.value === 'perimetr'){
            screen.textContent = Hexagon.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').textContent = 'P = 6a'
        }
        else if(sel.value === 'area'){
            screen.textContent = Hexagon.area(input1, input2)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').textContent = 'A = 1/2 * 6ar '
        }
    }
    if(select.value === 'Pentagon'){
        let input2 = Number(document.querySelector('#inp2').value)
        if(sel.value=== 'perimetr'){
            screen.textContent = Pentagon.perimetr(input1)
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').innerHTML = 'P = 5a'
        }
        else{
            screen.textContent = Pentagon.area(input1, input2)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = 'A = 1/2 * 5ar '
        }
    }
    if(select.value === 'Sphere'){
        if (sel.value === "area"){
            screen.textContent = Sphere.area(input1)
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = 'A = 4*π * r <sup>2</sup> '
        }
        else if(sel.value === 'Volume'){
            screen.textContent = Sphere.Volume(input1)
            document.querySelector('.box1').textContent = 'V = '
            document.querySelector('.formula').innerHTML = 'V = (4/3)*π * r <sup>3</sup> '
        }
    }
    if(select.value === 'Cylinder'){
    
        if(sel.value === 'area'){
           screen.textContent = Cylinder.area()
           document.querySelector('.box1').textContent = 'A = '
           document.querySelector('.formula').innerHTML = 'A = 2 π * r <sup>2</sup> + 2 π * r * h'
        }
        if(sel.value === 'Volume'){
            screen.textContent = Cylinder.Volume()
            document.querySelector('.box1').textContent = 'V = '
            document.querySelector('.formula').innerHTML = 'V = π  r <sup>2</sup> h'
         }
     
    }
    if(select.value === "Circle"){
        if(sel.value === "area"){
            screen.textContent = Circle.Area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = `A = π * r <sup>2</sup>`
        }
    }
    if(select.value === "Trapezoid"){
        if(sel.value === "area"){
            screen.textContent = Trapezoid.Area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = `A = 1/2 * (a+b)*h`
        }
        else if (sel.value === "perimetr"){
            screen.textContent = Trapezoid.perimetr()
            document.querySelector('.box1').textContent = 'P = '
            document.querySelector('.formula').innerHTML = `P = a+b+c+d`
        }
    }
    if(select.value === "Cuboid"){
        if(sel.value === "area"){
            screen.textContent = Cuboid.Area()
            document.querySelector('.box1').textContent = 'A = '
            document.querySelector('.formula').innerHTML = `A = 2ah + 2bh + 2ba`
        }
        else if(sel.value === "Volume"){
            screen.textContent = Cuboid.Volume()
            document.querySelector('.box1').textContent = 'V = '
            document.querySelector('.formula').innerHTML = `V = 2ah + 2bh + 2ba`
        }
    }
}

document.querySelector('#select').onclick = function () {


    if (document.querySelector('#select').value === "RightTriangle") {
        document.getElementById('img').src = "./images/right.PNG"
        let html = `
        <option class="opt1" value="righttriangle">RightTriangle</option>
    `
        document.querySelector('#sel').innerHTML = html
        let scls = `
    <p>a:</p>
    <input type="number" id="inp1">
    <p id="bb">b:</p>
    <input type="number" id="inp2">
    `
        document.querySelector('.opt').innerHTML = scls

    }

    else if (document.querySelector('#select').value === "ScaleneTriangle") {
        document.getElementById('img').src = "./images/sca.PNG"
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">Area</option>`
        document.querySelector('#sel').innerHTML = html
        let scls = `
        <p id="sc">a:</p>
        <input type="number" id="inp1">
        <p class="cst" id="bb">b:</p>
        <input type="number" id="inp2">
        <p class="sc" id="pp">c:</p>
        <input type="number" id="inp3">
    
        `
        document.querySelector('.opt').innerHTML = scls
       
    }
    else if (document.querySelector('#select').value === "EquilateralTriangle") {
        document.getElementById('img').src = "./images/equal.PNG"
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="height">height</option>
        <option  class="opt3" value="area">area</option>`
        document.querySelector('#sel').innerHTML = html
        let slc = `
       <p>a:</p>
       <input type="number" id="inp1">
       `
        document.querySelector('.opt').innerHTML = slc
    }
    else if (document.querySelector('#select').value === "square") {
        document.getElementById('img').src = "./images/squ.PNG"
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">area</option>
        <option  class="opt3" value="c">CC</option>`
        document.querySelector('#sel').innerHTML = html
        let slc = `
        <p>a</p>
        <input type="number" id="inp1">
        `
        document.querySelector('.opt').innerHTML = slc
    }
    else if (document.querySelector('#select').value === "Rectangle") {
        document.getElementById('img').src = "./images/rec.PNG"
        let scls = `
        <p>a:</p>
        <input type="number" id="inp1">
        <p id="bb">b:</p>
        <input type="number" id="inp2">
        `
        document.querySelector('.opt').innerHTML = scls
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">area</option>
            `
        document.querySelector('#sel').innerHTML = html
    }

    else if (document.querySelector('#select').value === "Paralellogram") {
        document.getElementById('img').src = "./images/paralelogram.PNG"
        let scls = `
        <p>b:</p>
        <input type="number" id="inp1">
        <p id="bb">h:</p>
        <input type="number" id="inp2">
        `
        document.querySelector('.opt').innerHTML = scls
        let html = `
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">area</option>
            `
        document.querySelector('#sel').innerHTML = html
    }
    else if (document.querySelector('#select').value === "Sphere") {
        document.getElementById('img').src = "./images/sph.PNG"
        let scls = `
        <p>r:</p>
        <input type="number" id="inp1">
        `
        let html = `
        <option class="opt1" value="area">Area</option>
        <option class="opt2" value="Volume">Volume</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    }
    else if (document.querySelector('#select').value === "Cylinder"){
        document.getElementById('img').src = "./images/cylinder.PNG"
        let scls = `
        <p>r:</p>
        <input type="number" id="inp1">
        <p id="bb">h:</p>
        <input type="number" id="inp2">
        `
        let html = `
        <option class="opt1" value="area">Area</option>
        <option class="opt2" value="Volume">Volume</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    } 
    else if (document.querySelector('#select').value === "Hexagon"){
        document.getElementById('img').src = "./images/hexagon.PNG"
        let scls = `
        <p>a:</p>
        <input type="number" id="inp1">
        <p class="xg" id="bb">r:</p>
        <input type="number" id="inp2">
        `
        let html = `
        <option class="opt1" value="area">Area</option>
        <option class="opt2" value="perimetr">Perimetr</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    }
    else if (document.querySelector('#select').value === "Pentagon"){
        document.getElementById('img').src = "./images/pentagon.PNG"
        let scls = `
        <p>a:</p>
        <input type="number" id="inp1">
        <p class="pg" id="bb">r:</p>
        <input type="number" id="inp2">
        `
        let html = `
        <option class="opt1" value="area">Area</option>
        <option class="opt2" value="perimetr">Perimetr</option>
            `
        document.querySelector('.opt').innerHTML = scls
        document.querySelector('#sel').innerHTML = html
    }

    else if(document.querySelector('#select').value === "Circle"){
        document.getElementById('img').src = "./images/circle.PNG"
        let src =`
        <option class="opt2" value="area">Area</option>
        `
        document.getElementById('sel').innerHTML = src
        let opt = `
        <p>r:</p>
          <input type="number" id="inp1">
         
      `
      document.getElementById("opt").innerHTML = opt
    }
    else if(document.querySelector('#select').value  === "Trapezoid" ){
        document.getElementById('img').src = "./images/tra.PNG"
        let sel = document.getElementById('sel')
        let src =`
        <option class="opt1" value="perimetr">Perimetr</option>
        <option class="opt2" value="area">Area</option>
        `
        document.getElementById('sel').innerHTML = src

        if(sel.value === "perimetr"){
    
            let opt = `
            <p>a:</p>
              <input type="number" id="inp1">
              <p id="bb">b:</p>
              <input type="number" id="inp2">
              <p id="tr" >c:</p>
              <input type="number" id="inp3">
              <p id="bd">d:</p>
              <input type="number" id="inp4">
          `
          document.getElementById("opt").innerHTML = opt
        }
        
       

    }
    else if(document.querySelector('#select').value  === "Cuboid"){
        document.getElementById('img').src = "./images/cuboid.PNG"
        let src =`
        <option class="opt1" value="Volume">Volume</option>
        <option class="opt2" value="area">Area</option>
        `
        document.getElementById('sel').innerHTML = src
        let opt = `
        <p>a:</p>
          <input type="number" id="inp1">
          <p id="bb">b:</p>
          <input type="number" id="inp2">
          <p>h:</p>
          <input type="number" id="inp3">
      `
      document.getElementById("opt").innerHTML = opt
    }
  

}

document.getElementById('sel').onclick = function(){
    let select = document.getElementById("select").value
    let sel = document.getElementById('sel').value
    if(select === "Trapezoid"){
        if(sel === "area"){
            document.getElementById('inp4').style.display = "none"
            document.getElementById('bd').style.display = "none"
            document.getElementById('tr').textContent = "h:"
        }
        if(sel === "perimetr"){
            document.getElementById('inp4').style.display = "inline-block"
            document.getElementById('bd').style.display = "inline-block"
            document.getElementById('tr').textContent = "c:"
        }
    }
    if(select === "ScaleneTriangle"){
        if (sel === 'area'){
            document.getElementById('inp3').style.display = 'none'
            document.querySelector('.sc').style.display = 'none'
            document.getElementById('sc').textContent = 'b:'
            document.querySelector('.cst').textContent = 'h:'
        }
        if (sel === 'perimetr'){
            document.getElementById('inp3').style.display = 'inline-block'
            document.querySelector('.sc').style.display = 'inline-block'
            document.getElementById('sc').textContent = 'a:'
            document.querySelector('.cst').textContent = 'b:'
        }
    }
    if(select === "Hexagon"){
        if (sel === 'perimetr'){
            document.getElementById('inp2').style.display = 'none'
            document.querySelector('.xg').textContent =""
        }
         if (sel === 'area'){
            document.getElementById('inp2').style.display = 'inline-block'
            document.querySelector('.xg').textContent ="r:"
        }
    }
    if(select === "Pentagon"){
        if (sel === 'perimetr'){
            document.getElementById('inp2').style.display = 'none'
            document.querySelector('.pg').textContent =""
        }
         if (sel === 'area'){
            document.getElementById('inp2').style.display = 'inline-block'
            document.querySelector('.pg').textContent ="r:"
        }
    }
}

onkeydown = function(e){
    if(e.key ==="Enter" ){
        handlerButton()
    }
}