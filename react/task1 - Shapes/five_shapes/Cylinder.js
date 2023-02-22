
function Cylinder(props){
    var rad = props.r;
    var hgt = props.h;
    var pi = 3.141592653589793238;
    var par1 = (2*pi*rad*hgt);
    var par2 = (2*pi*(rad^2));

    return ("Area of Cylinder: "+(par1+par2).toPrecision(7));
}

export default Cylinder;