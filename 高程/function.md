# 函数的定义
## 函数声明
  ```
    function sum (num1, num2) {
      return num1 + num2;
    }
  ```
## 函数表达式
  ```
    var sum = function(num1, num2) {
      return num1 + num2;
    };
   ```
## 两者的区别
  解析器会通过函数声明读取并将函数声明添加到执行环境中。而函数表达式相当于将一个匿名函数赋值给一个定义的变量。
# 构造函数
## 使用new操作符
  1. 创建一个新对象
  2. 将构造函数的作用域赋给对象（因此this就指向了这个新对象）
  3. 执行构造函数中的代码（为这个新对象添加）
  4. 返回新对象
## 检测对象类型——instanceof
## 构造函数与其他函数的唯一区别： 调用方式不同
  任何函数通过new操作符来调用，就可以作为构造函数。
  ```
    //被当做构造函数使用
    var person = new Person("Nicholas", 29, ""engineer);
    person.sayName();//nichoas
    
    //作为普通函数调用
    Person("greg", 27, "doctor")
    window.sayName();//greg
   ```
## 构造函数的问题
  每个方法都要在每个实例上重新创建一遍。（因为函数是对象，每定义一个函数就是实例化一个对象）不同实例上的同名函数不相等。
#原型模式
每个函数都有一个prototype（原型）属性，这个属性是一个指针，指向函数的原型对象。
我理解的原型：每个函数都会有一个prototype属性，构造函数也是函数所以也会有prototype属性。构造函数的prototype属性会指向函数的原型对象。所有的原型对象都会自动拥有一个constructor（构造函数）的属性，这个属性会指向构造函数。而通过构造函数生成的实例，该实例会包含一个指针：[[prototype]]。这个指针会指向原型对象。所以同个构造函数生成的实例的属性和方法是同一个。即原型对象对实例共享了它的属性和方法。

## 函数的name属性
### 函数声明
 writable = false: numberable = false; configurable = true
  ```
    function nameTest() {
      nameTest.name = "change"; //函数的name属性writable = false
      alert(nameTest.name); // "nameTest"
      console.log(nameTest);
    }

    function test() {
      this.testProp(nameTest);
    }

    function testProp(obj) {
      this.testWrite(obj);
      this.testNum(obj);
      this.testConfig(obj);
    }

    //测试属性的提炼
    function testWrite(obj) {
      obj.name = "change";
      console.log("writable", obj.name); // "obj.name" 函数的name属性writable = false
    }

    function testNum(obj) {
      for (var propName in obj) {
        console.log("numberable", propName); // 空 表示numberable = false
      }
    }

    function testConfig(obj) {
      delete nameTest.name;
      console.log("configurable", nameTest.name); //空 表示configurable = true
      // 将configurable属性置false
      // Object.defineProperty(obj, "name", {
      //   configurable: false
      // })
      // delete obj.name;
      // console.log(obj.name); //"obj.name"
      // Object.defineProperty(obj, "name", {
      //   configurable: true //Uncaught TypeError: Cannot redefine property: name 所有属性都会报这个错误
      // })
    }
   ```
   #### 将函数声明赋给一个变量
   结果与没赋值之前一样，表明“函数时对象，函数名是指针”
    
   ```
   function nameTest() {
    nameTest.name = "change"; //函数的name属性writable = false
    alert(nameTest.name); // "nameTest"
    console.log(nameTest);
  }

  var nameTest3 = nameTest;

  function test() {
    this.testProp(nameTest3);
  }
  ```
  #### 当给函数声明执行之后赋给一个变量
  此变量等于函数声明返回的值
    
  ### 函数表达式
  writable = false: numberable = false; configurable = true
  ```
   var nameTest2 = function () {};

    function test() {
      this.testProp(nameTest2);
    }

    function testProp(obj) {
      this.testWrite(obj);
      this.testNum(obj);
      this.testConfig(obj);
    }

    //测试属性的提炼
    function testWrite(obj) {
      obj.name = "change";
      console.log("writable", obj.name); // "obj.name" 函数的name属性writable = false
    }

    function testNum(obj) {
      for (var propName in obj) {
        console.log("numberable", propName); // 空 表示numberable = false
      }
    }

    function testConfig(obj) {
      delete nameTest.name;
      console.log("configurable", nameTest.name); //空 表示configurable = true
      // 将configurable属性置false
      // Object.defineProperty(obj, "name", {
      //   configurable: false
      // })
      // delete obj.name;
      // console.log(obj.name); //"obj.name"
      // Object.defineProperty(obj, "name", {
      //   configurable: true //Uncaught TypeError: Cannot redefine property: name 所有属性都会报这个错误
      // })
    }
  ```
#### 将函数表达式再次赋给一个变量
因为函数名为writable说以仍为nameTest2
```
var nameTest2 = function () {};

var nameTest4 = nameTest2;

function test() {
  this.testProp(nameTest4);
}
```
  
  
