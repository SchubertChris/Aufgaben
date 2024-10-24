/* let, const, (var wird nicht genutzt) */

let gretting = "Hello World";                   /* let - Variable wird deklariert und kann verändert werden
                                                Greeting bekommt dern value Wert hello world*/
console.log(gretting);                          /* Greeting wird in der Console ausgegeben */
console.log(typeof gretting);                   /* type of gibt mir die Art des Wertes in der console wieder Gut für Überblick
                                                 (String) */

let age = 30;                                   /* let - Variable wird deklariert und kann verändert werden */
console.log(age);                               /* age wird in der Console ausgegeben */

const name = "John";                            /* const - Variable wird deklariert und kann nicht verändert werden im gegensatz zu let */
const firstName = "Marleen";                    /* Camelcase . firtstName lastName smallThenBigForEchOfWords */
const last_Name = "Schmidt";                    /* Snakecase . last_name small_then_underscore_for_each_of_words */                 
console.log(name);                              /* name wird in der Console ausgegeben */

console.log("Hello World", "my name is", name, "and I am", age, "years old"); 
                                                /* Mehrere Werte in der Console ausgeben */
                                                
let num1 = 10;                                  /* let - Variable wird deklariert und kann verändert werden */
console.log(num1);                              /* num1 wird in der Console ausgegeben */

let num2 = 20;                                  /* let - Variable wird deklariert und kann verändert werden */


const fullName = "John Doe";                    /* let - Variable wird deklariert und kann verändert werden */
console.log(fullName);                          /* fullName wird in der Console ausgegeben */

let names = ["John", "Marleen", "Schmidt", "ICH BIN EIN ARRAY"];      
                                                /* [Erstellung eines Arrays] dort kannst du alles definierte reinlegen im prinzip wie eine liste */
console.log(names);                             /* names wird in der Console ausgegeben */
console.log("names array : ", names);           /* names array :  [ 'John', 'Marleen', 'Schmidt', 'ICH BIN EIN ARRAY' ] */

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     /* [Erstellung eines Arrays] dort kannst du alles definierte reinlegen im prinzip wie eine liste */
console.log(list);                              /* list wird in der Console ausgegeben */

                                                /* Objetcs */

const user = {                                  /* [Erstellung eines Objekts] dort kannst du alles definierte reinlegen im prinzip wie eine liste */
  name: "John",                                 /* name: "John" - Key: Value */
  age: 30,                                      /* age: 30 - Key: Value */
};

console.log(user);                              /* user wird in der Console ausgegeben */
