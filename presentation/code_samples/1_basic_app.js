class App extends Component {
 constructor(props) {
  super(props);
  this.state = {
   count: 0,
   bgColor: randomBgColor()
  };
 }

 componentDidMount() {
  this.interval =
   setInterval(() => {
    this.setState(
     ({count}) => ({
      count: count + 1
     })
    );
   }, 1000);
 }

 componentWillUnmount() {
  clearInterval(
   this.interval
  );
 }

 changeColor() {
  this.setState({
   bgColor: randomBgColor()
  });
 }

 render() {
  const {
   count,
   bgColor
  } = this.state;
  return (
   <div style={{
    width: '100%',
    minHeight: 400,
    border:
     `2px solid ${black}`,
    backgroundColor: bgColor
   }}>
    <h1>
     Current count: {count}
    </h1>
    <MyButton
     onClick={
      this.changeColor
       .bind(this)
     }
    >
     New background color
    </MyButton>
   </div>
  );
 }
}

render(<App />);

function randomIntensity() {
 // random color
 // in lighter range
 return 128 + Math.floor(
  Math.random() * 128
 );
}

function randomBgColor() {
 let colorString = 'rgb(';
 for (let i=0; i<3; i++) {
  colorString +=
   randomIntensity();
  if (i < 2) {
   colorString += ',';
  }
 }
 colorString += ')';
 return colorString;
}

const fourBillion =
 4000000000;
const doBigMath = false;

class MyButton
 extends Component {
 render() {
  if (doBigMath) {
   // count to 4 billion
   for (let i=0;
    i<fourBillion; i++);
  }
  const {
   onClick,
   children
  } = this.props;
  return (
   <button
    style={{
     fontFamily: 'courier',
     padding: 10,
     fontSize: 16,
     borderRadius: 6,
     backgroundColor: white
    }}
    onClick={onClick}
   >
    {children}
   </button>
  );
 }
}
