import { createContext, useState } from "react"

const DATABASE_ID = "69370211002502533a02"
const TABLE_ID = "6937041900158bb8abb7"

export const BooksContext = createContext()

export function BooksProvider({children}) {
  const [books, setBooks] = useState([])

  async function fetchBooks() {
    try {

    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchBookById(id) {
    try {

  
      return response 
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createBook(data) {
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteBook(id) {
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <BooksContext.Provider 
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}