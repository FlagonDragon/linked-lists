import './styles.css';

console.log('wasss cookin?!');

class Book {

    constructor(title, author, pages, read) {   

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
    }


    info() {
        if (this.read == 'yes') {
            return `${this.title} by ${this.author}, ${this.pages} pages, already read.`
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
        };
    };
};

const wayOfKings = new Book('The Way of Kings', 'Brandon Sanderson', '1007', 'No');

console.log(wayOfKings);

class node {

    constructor(value = null, nextNode = null) {

        this.value = value
        this.nextNode = nextNode

    }
};

class linkedList {

    constructor(title, pointer = null) {

        this.title = title
        this.pointer = pointer

    }



    append(value) {

        console.log('value appended: '+value);

        console.log(this.pointer);  

        if (this.pointer == null) {

            this.pointer = new node(value);

            console.log('done!');
            console.log(this);
            console.log(this.pointer);
           

        } else {

            console.log('else, activate!!!!');
            

            if (this.pointer.nextNode != null) {

                console.log(this.pointer.nextNode);

                this.pointer = this.pointer.nextNode;

            }

            this.pointer.nextNode = new node(value);

            this.pointer = this.pointer.nextNode;

            console.log('done!');
            console.log(this);
            console.log(this.pointer);
            console.log(this.pointer.nextNode);

        }

    };

};

let lannisters = new linkedList('House Lannister', null);

lannisters.append('Tywin');
lannisters.append('Joanna');

// console.log(lannisters);



