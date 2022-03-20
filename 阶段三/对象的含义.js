let da = 1

var jd = 'jjd';

let user = {
 da: 'xx',
 age: 12,
 show: function () {
  console.log(this.da); // xx
  function render() {
   console.log(da); // 1
  }
  render();
 }
}

user.show()