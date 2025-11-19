
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

// console.log(wayOfKings);

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
        this.head;

    }



    append(value) {

        console.log('value appended: '+value);

        // console.log(this.pointer);

        if (this.pointer.nextNode == null) {

            this.pointer.nextNode = new node(value);

            this.pointer = this.pointer.nextNode;

            // console.log('done!');
            // console.log(this);
            // console.log(this.pointer);
           

        } else {

            console.log('else, activate!!!!');

            console.log(this.pointer);
            console.log(this.pointer.nextNode);
            
            

            while (this.pointer.nextNode != null) {

                console.log(this.pointer.nextNode);

                this.pointer = this.pointer.nextNode;

            }

            console.log(this.pointer);
            console.log(this.pointer.nextNode);

            this.pointer.nextNode = new node(value);

            this.pointer = this.pointer.nextNode;

            console.log('done!');
            console.log(this);
            console.log(this.pointer);
            console.log(this.pointer.nextNode);

        }

    };

    prepend(value) {

        console.log('value prepended: '+value);

        // console.log(this.pointer);  

        if (!this.head) {

            console.log('Empty list. Creating head');
        
            this.head = new node(value);

            this.pointer = this.head;
           

        } else {

            this.head = new node(value, this.head);

            this.pointer = this.head;

        }

    }

    size() {

        if (!this.head) {
            return 0;
        }
        
        this.pointer = this.head
        
        console.log(this.pointer);

        let nodeCount = 1; 

        while (this.pointer.nextNode != null) {

            console.log(this.pointer.nextNode);

            this.pointer = this.pointer.nextNode;

            nodeCount += 1;

        }

        return nodeCount;

    }

    returnHead() {
        return this.head;
    }

    tail() {

        if (!this.head) {
            return 'Empty list';
        }

        while (this.pointer.nextNode != null) {

        console.log(this.pointer.nextNode);

        this.pointer = this.pointer.nextNode;

        }

        return this.pointer;
        
    }

};

let lannisters = new linkedList('House Lannister', null);

lannisters.prepend('Joanna');
lannisters.append('Cersei');
lannisters.append('Jaime');
lannisters.prepend('Tywin');
lannisters.append('Tyrion');

// console.log(lannisters.head);
// console.log(lannisters.head.nextNode);
// console.log(lannisters.head.nextNode.nextNode);
// console.log(lannisters.head.nextNode.nextNode.nextNode);
// console.log(lannisters.head.nextNode.nextNode.nextNode.nextNode);

// console.log(lannisters.size());
console.log(lannisters.tail());


// console.log(lannisters);



