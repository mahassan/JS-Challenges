const library = [
    {
        title: 'Indstractable',
        author: 'Nir Eyal',
        status: {
            own: false,
            reading: true,
            read: false
        }
    },
    {
        title: 'What\'s your dream?',
        author: 'Simon squibb',
        status: {
            own: false,
            reading: true,
            read: false
        }
    },
    {
        title: 'Diary of CEO',
        author: 'Steven Barlett',
        status: {
            own: false,
            reading: true,
            read: false
        }
    }
]
//console.log(library) //to read if read prop is false;
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
//console.log(library) //to read if read prop change to true

const {title: firstBook} = library[0]
console.log(firstBook)