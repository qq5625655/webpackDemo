// main.js
import App from './App';
import Vue from 'vue';
// import router from '../router/index.js'
// import store from '../store/index.js'


function observer (value) {
  if (!value || (typeof value !== 'object')) {
      return;
  }
    
  Object.keys(value).forEach((key) => {
      defineReactive(value, key, value[key]);
  });
}
class Vue1 {
  constructor(options) {
      this._data = options.data;
      observer(this._data);
      /* 新建一个 Watcher 观察者对象，这时候 Dep.target 会指向这个 Watcher 对象 */
      new Watcher();
      /* 在这里模拟 render 的过程，为了触发 test 属性的 get 函数 */
      console.log('render~', this._data);
  }
}


class Dep {
  constructor () {
      /* 用来存放 Watcher 对象的数组 */
      this.subs = [];
  }
  /* 在 subs 中添加一个 Watcher 对象 */
  addSub (sub) {
      this.subs.push(sub);
  }
  /* 通知所有 Watcher 对象更新视图 */
  notify () {
      this.subs.forEach((sub) => {
          sub.update();
      })
  }
}

class Watcher {
  constructor () {
      /* 在 new 一个 Watcher 对象时将该对象赋值给 Dep.target，在 get 中会用到 */
      Dep.target = this;
  }
  /* 更新视图的方法 */
  update () {
      console.log("视图更新啦～");
  }
}
function defineReactive (obj, key, val) {
  /* 一个 Dep 类对象 */
  const dep = new Dep();
   
  Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
          /* 将 Dep.target（即当前的 Watcher 对象存入 dep 的 subs 中） */
          dep.addSub(Dep.target);
          return val;          
      },
      set: function reactiveSetter (newVal) {
          if (newVal === val) return;
          /* 在 set 的时候触发 dep 的 notify 来通知所有的 Watcher 对象更新视图 */
          dep.notify();
      }
  });
}

let o = new Vue1({
  data: {
      test: "I am test.",
      ddd:'i have a pen'
  }
});
o._data.test = "hello,world.";  /* 视图更新啦～ */

// new Vue({
//   el:'#root',
//   // router,
//   // store,
//   components: {App},
//   template:'<App/>'
// })
