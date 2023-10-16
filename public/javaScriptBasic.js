document.getElementById('triangleAreaForm').addEventListener(('submit'), function(e){
    e.preventDefault();
    const a = parseFloat(document.getElementById('firstSide').value);
    const b = parseFloat(document.getElementById('secondSide').value);
    const c = parseFloat(document.getElementById('thirdSide').value);
    const s = (a+b+c)/2;
    const triangleArea = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    document.getElementById("result").textContent = `The area of the triagnle is: ${triangleArea}`
console.log(a,b,c,s,triangleArea)
})