const ajax = new XMLHttpRequest();

ajax.open("GET", "https://api.hnpwa.com/v0/news/1.json", false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);

document.getElementById('root').innerHTML = ``;
console.log(newsFeed);