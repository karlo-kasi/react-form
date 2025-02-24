import { useState } from 'react'
import './App.css'
import initialArticles from "./data/articles"

function App() {

  const [articles, setArticle] = useState(initialArticles);

  const [newArticle, setNewArticle] = useState("");

  const addArticle = (e) => {
    e.preventDefault()
    const article = newArticle.trim()
    setArticle([...articles, article])
    setNewArticle("")

  }

  const removeArticle = (indiceElementoArray) => {

    const arrayClone = articles.filter((_, index) => index !== indiceElementoArray)
    return setArticle(arrayClone)

  }

  return (
    <>
      <div className="container mt-5">
        <h1>Lista Articoli</h1>
        <ul className="list-group">
          {articles.map((element, index) => {
            return (
              <li key={index} className='list-group-item'>
                {element}

                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => removeArticle(index)}
                >
                  X
                </button>
              </li>
            )
          })}
        </ul>

        {/* //form per il nuovo items  */}
        <form onSubmit={addArticle}>
          <input
            type="text"
            className="form-control"
            placeholder="Aggiungi il titolo dell'articolo?"
            value={newArticle}
            onChange={(e) => setNewArticle(e.target.value)}
          />

          <button className="btn btn-primary mt-3">Aggiungi</button>
        </form>
      </div>

    </>
  )
}

export default App
