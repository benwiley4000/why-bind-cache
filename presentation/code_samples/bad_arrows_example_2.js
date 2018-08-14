class Base {
  method = () => {
    console.log('I am a base class "method"!');
  };
}

class Derived extends Base {
  method = () => {
    super.method(); // ERROR!!
    // ...
  };
}

new Derived().method();
