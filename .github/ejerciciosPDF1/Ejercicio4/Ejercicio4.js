let people = [
    {name:"Bob", id :1}, {name: "jhon", id:2},
    {name:"Alex", id :3}, {name:"jhon", id :4}
]

function duplies(Array){

let result=[];
Array.forEach((n) => {
    result[n.name] = (result[n.name]||0)+1;
  });
  console.log(result);
}

duplies(people)
