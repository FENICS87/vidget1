'use strict';
let v1 = vidget();
let v2 = vidget();
let v3 = vidget();

function vidget(){
    let slider = document.createElement("div");
    slider.classList.add('slider');
    let thumb = document.createElement("div");
    thumb.classList.add('thumb');
    slider.append(thumb);
    document.body.append(slider); 

    thumb.onmousedown = function(){
        slider.width = slider.getBoundingClientRect().width;
        slider.x = slider.getBoundingClientRect().x;
        let shiftX = event.clientX - thumb.getBoundingClientRect().x;

        document.addEventListener("mousemove", mouseMove);
        function mouseMove(event){ 
            thumb.style.left = (event.clientX - slider.x - shiftX < 0)? 0 +"px":
            (event.clientX - slider.x - shiftX > slider.width - thumb.offsetWidth) ? slider.width - thumb.offsetWidth  +"px":
            event.clientX - slider.x - shiftX + 'px';
        }

        document.addEventListener("mouseup", mouseUp);
        function mouseUp(){
            document.removeEventListener("mousemove", mouseMove);
        }

        return false;
    }
}



      
        /*<div id="slider" class="slider">
          <div class="thumb"></div>
        </div>
        <script>
          var slider = new Slider({
            elem: document.getElementById('slider')
          });
      
          function Slider(options) {
            var elem = options.elem;
            var thumbElem = elem.querySelector('.thumb');
      
            var sliderCoords, thumbCoords, shiftX, shiftY;
      
          
            elem.onmousedown = function(event) {
             // if (event.target.closest('.thumb')) {
                startDrag(event.clientX, event.clientY);
                //return false; // disable selection start (cursor change)
            //  }
            }
      
            function startDrag(startClientX, startClientY) {
              thumbCoords = thumbElem.getBoundingClientRect();
              shiftX = startClientX - thumbCoords.left;
              shiftY = startClientY - thumbCoords.top;
      
              sliderCoords = elem.getBoundingClientRect();
      
              document.addEventListener('mousemove', onDocumentMouseMove);
              document.addEventListener('mouseup', onDocumentMouseUp);
            }
      
      
      
            function moveTo(clientX) {
              // вычесть координату родителя, т.к. position: relative
              var newLeft = clientX - shiftX - sliderCoords.left;
      
              // курсор ушёл вне слайдера
              if (newLeft < 0) {
                newLeft = 0;
              }
              var rightEdge = elem.offsetWidth - thumbElem.offsetWidth;
              if (newLeft > rightEdge) {
                newLeft = rightEdge;
              }
      
              thumbElem.style.left = newLeft + 'px';
            }
      
      
            function onDocumentMouseMove(e) {
              moveTo(e.clientX);
            }
      
            function onDocumentMouseUp() {
              endDrag();
            }
      
      
            function endDrag() {
              document.removeEventListener('mousemove', onDocumentMouseMove);
            }
      
          }
        </script>*/



/*
let element = document.querySelector('input');
let currentNumber = 1;
class Counter {
    
    constructor(el, endNumber, sec) {

        this.el = el;

        this.endNumber = +endNumber;

        this.sec = sec / (+endNumber);
    }

    _currentTimer(currentNumber) {

        //console.log(this.sec);

        if (currentNumber === this.endNumber) {

            this.el.innerHTML = currentNumber;

            return;

        }

        this.el.innerHTML = this.currentNumber++;

        console.log(this.sec);

        setTimeout(this._currentTimer, this.sec);

    };

    start() {

        //this.currentNumber = 1; 

        let starts = this._currentTimer.bind(this);

        setTimeout(starts(), this.sec);   

    }

};

let counter = new Counter(element, element.value, 10000);

counter.start();





/*
let currentNumber = 1; 
let element = document.querySelector('input');
debugger
class Counter {

    constructor(el, endNumber, sec) {

        this.el = el;

        this.endNumber = +endNumber;

        this.sec = sec / (+endNumber);

    }

    _currentTimer() {

        console.log(this.sec);

        if (this.currentNumber === this.endNumber) {

            this.el.innerHTML = this.currentNumber;

            return;

        }

        this.el.innerHTML = currentNumber++;

        console.log(this.sec);

        setTimeout(this._currentTimer, this.sec);

    };

    start() {

        

        let starts = this._currentTimer.bind(this);

        setTimeout(starts, this.sec);   

    }

};

let counter = new Counter(element, element.value, 10000);

counter.start();




/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    return `Hi ${this.name}`;
}


let user = new Person('Igor', 33);
let admin = new Person('Vlad', 23);
//console.log(user.greeting())


function Teacher(name, lastName, age, subjects) {
    Person.call(this, name, age);
    this.lastName = lastName;
    this.subjects = subjects;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    console.log(`Hi ${this.name} my subjects is ${this.subjects}???????`)
    return Person.prototype.greeting.call(this);
}

/////////
Person.prototype.greeting = function () {
    return `!!!!! ${this.name}`;
}

let t = new Teacher('Igor 1', 'Nepipenko', 33, ['ts', 'js', 'angular'])

console.log(t.greeting());
//console.log(t);




/*
//let text = document.querySelector("#text");
document.addEventListener("mousemove", text1(consol, 3000));

function text1(fn, ms){
    let time =false;
    let zzz;
    return function work(...event){     
        if(time){
            zzz = event;
             return;   
        } 
        time =true;
       zzz = null;
        setTimeout(()=>{fn.apply(this, event);
        time=false;
         ///console.log(zzz);
        if(!zzz) return;
        work.call(this, ...zzz);
    }, ms);      
    }
}   

function consol(event){
    console.log(event.clientX, event.clientY);
    
}


*/















/*
const input = document.querySelector('input');
input.addEventListener('input', debounce(300));

function debounce( ms) {
    let timerId;
    function handler(event) {
        console.log(this)
        console.log(event.target.value);
    }
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            return handler.call(this, ...args);
            }, ms);
        };
}
        
      /*  function handler(event) {
            console.log(this)
            console.log(event.target.value);
        }
        
     */  





/*
function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}
*/










/*
function sum(a, b) {
    return a + b;
}


function getUserWithAge(user, age) {
    user.age = age;
    return user;
}

const fn1 = logDecorator(sum);
const fn2 = logDecorator(getUserWithAge);

const mySum = fn1(1, 22);
fn2({name: 'Igor'}, 22);

console.log(mySum * 3);

function logDecorator(fn) {
    return function (...args) {
        const result = fn.call(this, ...args);
        const fnName = fn.name;
        const strArgs = args.map((arg) => JSON.stringify(arg)).join(', ');
        const strResult = JSON.stringify(result);
        console.log(`Call:  ${fnName}(${strArgs}) => ${strResult}`);
        return result;
    };
}
/*
function sum(a, b) {
    return a + b;
}


function getUserWithAge(user, age) {
    user.age = age;
    return user;
}

const fn1 = logDecorator(sum);
const fn2 = logDecorator(getUserWithAge);

 console.log(fn1(5, 8));
 console.log(fn2("igor", 40));

function logDecorator(fn){
    return function(...arg){
        let result = fn( ...arg);
       //const strArgs = args.map((arg) => JSON.stringify(arg)).join(', ');
        let arg1 = arg.map(value => JSON.stringify(value)).join(', ') ;
      //  let name = fn.name;
        return (arg1)+" ==>"+ result;
    }
}
*/












/*
console.log(zero());
console.log(zero(1));
console.log(zero(1)(2));
console.log(zero(1)(2)(3));
console.log(zero(1)(2)(3)(4));


function zero(x = 0, ...arg){
    let summ = x + [...arg].reduce((summa, value)=>summa + value, 0);
    function zero(y = 0, ...arg){
        summ += y + [...arg].reduce((summa, value)=>summa + value, 0);
        return zero;
    }
    zero.toString = ()=>{
        return summ;
    }
    return zero;
}
  
   // return ([...arg].length===0)? summ += 0: summ += zero(); 
   
    //console.log(summ);

 


/*Object.defineProperty(user, 'age', {
    get(){
        return "hello " + this.name +": "+ age;
    }
});


/*function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get(){
            let date = new Date().getFullYear();
            return date - this.birthday.getFullYear();
        }
        });
  }
  
  let john = new User("John", new Date(1992, 6, 1));
  
  alert( john.birthday ); // доступен как день рождения
  alert( john.age );      // ...так и возраст

/*let user = {
    name: "igor",
    age: 25,
    get ful(){
      return  (this.name +" "+ this.age);
    },
    set ful(value){
          [this.name, this.age] = value.split(" ");
    }
};
console.log(user.ful);
user.ful="vasia 20";
console.log(user.ful);
console.log(user.name);
console.log(user.age);*/


/*function calc (arg1, arg2){
  let count0 = arg1 + arg2;
  let count1 = arg1 - arg2;
  let count2 = arg1 * arg2;
  let count3 = arg1 / arg2;
    function reset(arg1, arg2){
         count0 = arg1 + arg2;
         count1 = arg1 - arg2;
         count2 = arg1 * arg2;
         count3 = arg1 / arg2;
        return `+= ${count0}; -= ${count1}; *= ${count2}; /= ${count3};`
    } 
    function zzz(arg1, arg2){
        if(!((arg1===undefined)||(arg2===undefined))){
            return reset(arg1, arg2);
        }
      return `+= ${count0}; -= ${count1}; *= ${count2}; /= ${count3};`
    }
    return zzz;
}

let a1 = calc(0, 1)
//let a2 = calc();
console.log(a1());
console.log(a1(7, 8));
console.log(a1(9,10));
console.log(a1());
//console.log(a2());*/