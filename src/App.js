import { useState } from "react";
import "./styles.css";

const booksList = {
  JavaScript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  Fiction: [
    {
      name: "The Last Attractor of Chaos",
      rating: "3.5/5"
    },
    {
      name: "Harry Potter and the Goblet of Fire",
      rating: "4.5/5"
    }
  ],
  SelfHelp: [
    {
      name: "Ikigai",
      rating: "4.5/5"
    },
    {
      name: "The Monk who sold his ferrari",
      rating: "5/5"
    }
  ]
};

export default function App() {
  let [genreSelected, setGenre] = useState("JavaScript");

  function genreHandler(inputGenre) {
    setGenre(inputGenre);
  }

  return (
    <div className="App">
      <div id="header">
        <h1> 📚Good Books</h1>
        <p>Checkout my favourite books. Select a genere to get started </p>
        <div>
          {Object.keys(booksList).map((item) => {
            return (
              <button id="btn" onClick={() => genreHandler(item)}>
                {item}
              </button>
            );
          })}
        </div>
        <hr />
      </div>

      <div>
        <ul>
          {booksList[genreSelected].map((book) => {
            return (
              <li id="listItem">
                <div id="bookName">{book.name}</div>
                <div>{book.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
