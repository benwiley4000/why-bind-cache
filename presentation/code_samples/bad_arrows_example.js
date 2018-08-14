class Base {
  method = () => {
    console.log('I am a base class "method"!');
  };
}

class Derived extends Base {
  method() {
    console.log('I am a derived class method!');
    console.log('Wait....');
    console.log('No one can hear me!');
    console.log('What\'s going on?? help!!!!');
  }
}

new Derived().method();
// 'I am a base class "method"!'
