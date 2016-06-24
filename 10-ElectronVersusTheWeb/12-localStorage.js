localStorage.clear(); // totally empty localStorage
localStorage.setItem('type', 'something');

// ...

var type = localStorage.getItem('type');

if(type && type === 'something'){
    // do something

    localStorage.removeItem('type');
}