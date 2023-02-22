

export default function Cone(props) {
    var ra = props.r;
    var len = props.l;
    var A = ((3.141592653589793238 * ra ) * (ra+(Math.sqrt((len*len)+(ra*ra)))));
  return (
    "Area of Cone: "+A.toPrecision(7)
  )
}
