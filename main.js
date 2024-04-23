let random = Math.floor(Math.random() * 100);


alert(random);



if (random % 3 === 0 && random % 5 === 0) {
    alert(random + "Bu son FizBazz");
} else if (random % 3 === 0) {
    alert(random  + "Bu son Fizz");
}
else if (random % 5 === 0) {
    alert( random  + "Bu son Bazz");
}  if (random % 3 && random % 5) {
    alert(random + "Bu son FizBazz emas")
}