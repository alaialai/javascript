# 贪吃蛇

## Q:在小蛇吃到食物后发现，小蛇的身体没有变长

A：通过打log和调试工具发现snake.body已经按照要求在最前面增加一格，但是body[0]==body[1],即body[0].x会随着body[1].x值得变化而变化，所以一直显示不了。所以想到了会不会是unshif函数出现问题。问题就是在这里，我这边直接是unshift了一个对象

~~~js
var obj = this.body[0];
this.body.unshift(obj);
~~~

导致了上面所示情况的发生。
