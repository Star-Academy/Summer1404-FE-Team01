import { BookCardModel } from "../../../models/books.model"

const booksData: BookCardModel[] = [
  {
    id: 100,
    name: "The Midnight Library",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Fantasy"],
    author: "Matt Haig",
    publishData: "2020-08-13",
    price: 1499
  },
  {
    id: 1,
    name: "Dune",
    image: "https://picsum.photos/200/300",
    genre: ["Science Fiction", "Adventure"],
    author: "Frank Herbert",
    publishData: "1965-08-01",
    price: 999
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Classic"],
    author: "Harper Lee",
    publishData: "1960-07-11",
    price: 799
  },
  {
    id: 3,
    name: "1984",
    image: "https://picsum.photos/200/300",
    genre: ["Dystopian", "Science Fiction"],
    author: "George Orwell",
    publishData: "1949-06-08",
    price: 899
  },
  {
    id: 4,
    name: "The Great Gatsby",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Classic"],
    author: "F. Scott Fitzgerald",
    publishData: "1925-04-10",
    price: 699
  },
  {
    id: 5,
    name: "Harry Potter and the Philosopher's Stone",
    image: "https://picsum.photos/200/300",
    genre: ["Fantasy", "Young Adult"],
    author: "J.K. Rowling",
    publishData: "1997-06-26",
    price: 1099
  },
  {
    id: 6,
    name: "The Catcher in the Rye",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Coming-of-age"],
    author: "J.D. Salinger",
    publishData: "1951-07-16",
    price: 849
  },
  {
    id: 7,
    name: "Pride and Prejudice",
    image: "https://picsum.photos/200/300",
    genre: ["Romance", "Classic"],
    author: "Jane Austen",
    publishData: "1813-01-28",
    price: 599
  },
  {
    id: 8,
    name: "The Hobbit",
    image: "https://picsum.photos/200/300",
    genre: ["Fantasy", "Adventure"],
    author: "J.R.R. Tolkien",
    publishData: "1937-09-21",
    price: 949
  },
  {
    id: 9,
    name: "The Da Vinci Code",
    image: "https://picsum.photos/200/300",
    genre: ["Thriller", "Mystery"],
    author: "Dan Brown",
    publishData: "2003-03-18",
    price: 1299
  },
  {
    id: 10,
    name: "The Alchemist",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Philosophy"],
    author: "Paulo Coelho",
    publishData: "1988-01-01",
    price: 1099
  },
  {
    id: 11,
    name: "Brave New World",
    image: "https://picsum.photos/200/300",
    genre: ["Science Fiction", "Dystopian"],
    author: "Aldous Huxley",
    publishData: "1932-01-01",
    price: 899
  },
  {
    id: 12,
    name: "The Hunger Games",
    image: "https://picsum.photos/200/300",
    genre: ["Young Adult", "Science Fiction"],
    author: "Suzanne Collins",
    publishData: "2008-09-14",
    price: 1199
  },
  {
    id: 13,
    name: "The Shining",
    image: "https://picsum.photos/200/300",
    genre: ["Horror", "Thriller"],
    author: "Stephen King",
    publishData: "1977-01-28",
    price: 1299
  },
  {
    id: 14,
    name: "The Girl with the Dragon Tattoo",
    image: "https://picsum.photos/200/300",
    genre: ["Crime", "Mystery"],
    author: "Stieg Larsson",
    publishData: "2005-08-01",
    price: 1399
  },
  {
    id: 15,
    name: "The Hitchhiker's Guide to the Galaxy",
    image: "https://picsum.photos/200/300",
    genre: ["Science Fiction", "Comedy"],
    author: "Douglas Adams",
    publishData: "1979-10-12",
    price: 999
  },
  {
    id: 16,
    name: "The Kite Runner",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Historical"],
    author: "Khaled Hosseini",
    publishData: "2003-05-29",
    price: 1199
  },
  {
    id: 17,
    name: "The Martian",
    image: "https://picsum.photos/200/300",
    genre: ["Science Fiction", "Adventure"],
    author: "Andy Weir",
    publishData: "2011-09-27",
    price: 1299
  },
  {
    id: 18,
    name: "The Handmaid's Tale",
    image: "https://picsum.photos/200/300",
    genre: ["Dystopian", "Speculative Fiction"],
    author: "Margaret Atwood",
    publishData: "1985-06-14",
    price: 1099
  },
  {
    id: 19,
    name: "The Fault in Our Stars",
    image: "https://picsum.photos/200/300",
    genre: ["Young Adult", "Romance"],
    author: "John Green",
    publishData: "2012-01-10",
    price: 999
  },
  {
    id: 20,
    name: "Sapiens: A Brief History of Humankind",
    image: "https://picsum.photos/200/300",
    genre: ["Non-fiction", "History"],
    author: "Yuval Noah Harari",
    publishData: "2011-01-01",
    price: 1599
  },
  {
    id: 21,
    name: "The Lord of the Rings",
    image: "https://picsum.photos/200/300",
    genre: ["Fantasy", "Epic"],
    author: "J.R.R. Tolkien",
    publishData: "1954-07-29",
    price: 1799
  },
  {
    id: 22,
    name: "Becoming",
    image: "https://picsum.photos/200/300",
    genre: ["Non-fiction", "Autobiography"],
    author: "Michelle Obama",
    publishData: "2018-11-13",
    price: 1499
  },
  {
    id: 23,
    name: "One Hundred Years of Solitude",
    image: "https://picsum.photos/200/300",
    genre: ["Magical Realism", "Literary Fiction"],
    author: "Gabriel García Márquez",
    publishData: "1967-05-30",
    price: 1099
  },
  {
    id: 24,
    name: "The Silent Patient",
    image: "https://picsum.photos/200/300",
    genre: ["Thriller", "Mystery"],
    author: "Alex Michaelides",
    publishData: "2019-02-05",
    price: 1399
  },
  {
    id: 25,
    name: "The Catcher in the Rye",
    image: "https://picsum.photos/200/300",
    genre: ["Fiction", "Coming-of-age"],
    author: "J.D. Salinger",
    publishData: "1951-07-16",
    price: 999
  },
  {
    id: 26,
    name: "Educated",
    image: "https://picsum.photos/200/300",
    genre: ["Non-fiction", "Memoir"],
    author: "Tara Westover",
    publishData: "2018-02-20",
    price: 1299
  },
  {
    id: 27,
    name: "The Pillars of the Earth",
    image: "https://picsum.photos/200/300",
    genre: ["Historical Fiction", "Epic"],
    author: "Ken Follett",
    publishData: "1989-10-01",
    price: 1599
  },
  {
    id: 28,
    name: "The Immortal Life of Henrietta Lacks",
    image: "https://picsum.photos/200/300",
    genre: ["Non-fiction", "Science"],
    author: "Rebecca Skloot",
    publishData: "2010-02-02",
    price: 1199
  },
  {
    id: 29,
    name: "The name of the Wind",
    image: "https://picsum.photos/200/300",
    genre: ["Fantasy", "Adventure"],
    author: "Patrick Rothfuss",
    publishData: "2007-03-27",
    price: 1499
  }
]

export default booksData
