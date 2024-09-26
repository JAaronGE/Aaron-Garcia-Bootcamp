let people = [{

    id:1,
    name:"jhon",
    age:28
    },{
    id:2,
    name:"jane",
    age:31
    },{
    id:3,
    name:"Peter",
    age:55    
    }];


function menores35(Array){
        return Array.age<35
    }

let nuevo = people.filter(menores35);

console.log(nuevo);

