Various Exercizes Javascript

1. Crea una funzione range che prende come primo parametro un numero, che rappresenta il primo numero di un range desiderato di numeri , il secondo parametro è un numero che rappresenta la fine (incluso ) del range di numeri. (Esempio: start: 3 end: 6 output: 3,4,5,6 ).
Se il secondo argomento viene omesso, creare una closure che abbia come parametro end e ritorni il range che ci si aspetta. ( Fare anche un controllo affinchè i parametri siano di tipo number).

2. Dato questo array: 

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

a.Utilizzare un metodo degli array per rimuovere l'ultimo elemento dall'array.
b.Utilizzare un metodo degli array per assicurarsi che l'elemento sia stato rimosso e che quindi la lunghezza dell'array sia diminuito di uno.
c.Utilizzare un metodo degli array che aggiunga alla fine dell'array le stringhe "to" e "Program".
d.Cambia la stringa "easily" con la stringa "right" accedendo all'indice dell'array e riassegnandone il valore 
e.Utilizzare un metodo degli array per rimuovere il primo elemento dell'array.
f.Utilizzare un metodo degli array per aggiungere la stringa "Programming" all'inizio dell'array.
g.Utilizzare un metodo degli array per rimuovere gli elementi "get" "easily" "the""first""time", e rimpiazzarli con una sola stringa "know".
h.Fai il console.log di secretMessage utilizzando un metodo degli array che crea una stringa, come valore di ritorno, composta da tutti gli elementi dell’array concatenati dal valore del separatore passato come parametro del metodo.
3. Scrivere una funzione che prenda come parametro un array di numeri e restituisca il secondo valore più grande presente nell'array. ( Usare sia il ciclo foreach che un altro metodo degli array ): 

const arr = [ 5, 9, 3, 13, 43, 2, 21 ]; 


4. Scrivere una funzione che permetta di trasformare l'oggetto fornito in quello richiesto, quindi rimuovendo i giorni in cui il negozio è chiuso e trasformando le date in formato ISO, in solo orari.

Oggetto fornito: 
const store = {
    id: 21,
    name: 'Negozio per animali',
    location: {
        city: 'Roma',
        address: 'Via boh 10',
        cap: '00100'
    },
    availability: {
        monday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T12:00:00'
        },
        tuesday: {
            start: '2021-06-29T10:00:00',
            end: '2021-06-29T15:00:00'
        },
        wednesday: null,
        thursday: null,
        friday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T18:00:00'
        },
        saturday: null,
        sunday: {
            start: '2021-06-29T09:00:00',
            end: '2021-06-29T12:00:00'
        }
    }
};

Oggetto da far vedere in output una volta eseguita la funzione da voi creata: 

const store = {
    id: 21,
    name: 'Negozio per animali',
    location: {
        city: 'Roma',
        address: 'Via boh 10',
        cap: '00100'
    },
    availability: {
        monday: {
            start: '9',
            end: '12'
        },
        tuesday: {
            start: '10',
            end: '15'
        },
        friday: {
            start: '9',
            end: '18'
        },
        sunday: {
            start: '9',
            end: '12'
        }
    }
};
5. Implementare la funzione memoize che, data in input la funzione per il calcolo del fattoriale, restituisce una closure che accetta come argomento un numero su cui eseguire la funzione per il calcolo del fattoriale, verifica se il risultato è già presente all'interno della variabile cache, se è presente restituisce immediatamente il risultato memorizzato precedentemente, altrimenti esegue la funzione passata come argomento e memorizza il risultato all'interno della variabile cache, così da servire il risultato cachato precedentemente qualora venga richiesto il fattoriale per lo stesso numero.
6. (Bonus) Scrivere una funzione che date due stringhe controlli che l'una sia l'anagramma dell'altra.
7. Dato l'array di oggetti 
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

Stampa in console utilizzando i metodi degli array(filter, map, find, forEach, some every e reduce): 
a) gli oggetti che hanno un prezzo superiore a 100€
b) gli oggetti che hanno un prezzo inferiore a 500€
c) Se è vero o falso che alcuni oggetti costano meno o uguale a €500
d) Se è vero o falso che ogni oggetto costa meno di €100
e) Il prezzo di ogni oggetto
f) La somma di tutti i prezzi 

8. Ripetere l'esercizio numero 1 con il for loop
9. Fai un clone dell'Array items e modifica il nome del primo oggetto da "Bike" a "Scooter" (possibilmente senza cambiare il nome nell'array items)
10. Definire un oggetto che contiene;
nome:
cognome:
eta:
città:
che ha come funzione fullName() che restituisce il nome e cognome


11. Scrivere una funzione che prende come parametro una stringa ma il risultato stampato deve essere l'inverso di quella stringa