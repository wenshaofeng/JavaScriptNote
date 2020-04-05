(function() {

  console.log(typeof foo); // function pointer
  console.log(foo()); // function pointer
  console.log(typeof bar); // undefined

  var foo = 'hello',
      bar = function() {
          return 'world';
      };

  function foo() {
      return 'hello';
  }

  function foo() {
    return 'baby';
}

}())
