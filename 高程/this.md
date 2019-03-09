# this
```
var color = 'green';
    var test4399 = {
      color: 'blue',
      getColor: function () {
        var color = "red";
        alert(this.color);
        // alert(color); //这边指向的是red

      }
    }

    var getColor = test4399.getColor;
    // getColor();//这边this指向window,所以是green
    test4399.getColor(); //这边this指向window,所以是green
```
