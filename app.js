//slice value copy
var students=['ali','hasan','faizan','umer','saleem'];
failed=students.slice(2,3);
window.console.log(students);
window.console.log(failed);
//another one
var semifinal=['Pakistan','India','New zealand','England'];
window.console.log(semifinal);
var Meraj_support = semifinal.slice(2,3);
window.console.log(Meraj_support);
//splice value cut
var avafruits=['apple','banana','orange','mango'];
fav=avafruits.splice(1,1);
window.console.log(avafruits);
window.console.log(fav);
//splice value adding
var subject=['maths','english','physics','chemistry'];
window.console.log(subject);
subject.splice(2,0,'urdu');
window.console.log(subject);
//shift remove first value
var whole=[-1,0,1,2,3,4,5,6,7,8,9];
window.console.log(whole);
whole.shift();
window.console.log(whole);
//unshift add first value
var fullname=['Kariz','Ali']
window.console.log(fullname);
fullname.unshift('Syed')
window.console.log(fullname);
//push add last value
var method=['observation','experiment','hypothesis','theory'];
window.console.log(method);
method.push('law')
window.console.log(method);
//pop remove last value
var money=[20000,30000,50000];
window.console.log(money);
money.pop();
window.console.log(money);
//for loop
for (i=0; i<100; i++){
    counting=i+1;
    window.console.log(counting)
};