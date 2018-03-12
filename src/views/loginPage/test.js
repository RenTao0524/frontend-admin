// export function test (x, y) {
//   console.log(x + y)
// }

var test1 = function (x, y) {
  return x + y
}

var test2 = function (x, y) {
  return x + y
}

export const cart = {
  _wheels: 4,
  
  get wheels () {
    return this._wheels;
  },
  
  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}

// export default {
//   f: function (x, y) {
//     console.log(x + y)
//   }
// }
