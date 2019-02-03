var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.gender = "male";

console.log(person);


var avatar = new Object();
Object.defineProperty(avatar,"do",{writable:false,value:"go1"});
console.log(avatar.do);
avatar.do="nothing";
console.log(avatar.do);

const hero = new Object();
hero.name = "SuperMan";
//change readonly
//Object.defineProperty(hero,"name",{writable:false,value:"BatMan"});
//change 无法删除
Object.defineProperty(hero,"name",{configurable:false});
console.log(hero);
delete hero.name;
console.log(hero);

//configurable一经更改无法重新定义
// Object.defineProperty(hero,"name",{configurable:true});
// hero.name="BatMan";
// delete hero.name;
// console.log(hero);

const book = {
     _year:2004,
     edition:1,
};
//getter() setter()
Object.defineProperty(book,"year",{
    get:function(){
        return this._year;
    },
    set:function(newValue){
        if(newValue > 2005){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition);

const furnitures = {
      _desk:1,
      _logo:"logo"
};
Object.defineProperty(furnitures,"desk",{
      get:function () {
          return this._desk;
      },
      set:function (desk) {
          return this._desk = desk;
      }
});

Object.defineProperty(furnitures,"logo",{
      get:function(){
          return this._logo;
      },
      set:function (logo) {
          return this._logo = logo;
      }
});
console.log(furnitures._desk);
furnitures.desk = 3;
furnitures.logo = "IKEA";
console.log(furnitures.logo);

//定义多个属性
let book1 = {};
Object.defineProperties(book1,{
    _year:{
      writable: false,
      value:2004
    },
    edition:{
      writable:true,
      value:1
    },

    year:{
      get:function() {
         return this._year;
      },
      set:function(newValue){
        if(newValue > 2004){
          this._year = newValue;
          this.edition += newValue - 2004;
        }
      }
    }
});

let hero1 = {};
Object.defineProperties(hero1,{
    _name:{
      value:"Wayne"
    },
    fight:{
      value:"do"
    },
    name:{
        get:function () {
            return this._name;
        },
        set:function(newName){
            return this._name = newName;
        }
    }
});

console.log(hero1.name);

let descriptor = Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);


let desHero = Object.getOwnPropertyDescriptor(hero1,"_name");
console.log(desHero);
console.log(desHero.value);

