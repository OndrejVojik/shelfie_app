import { createContext, use, useEffect, useState } from "react"
import { databases, client } from "../lib/appwrite"
import { ID, Permission, Query, Role } from "appwrite"
import { useUser } from "../hooks/useUser"

const DATABASE_ID = "69370211002502533a02"
const TABLE_ID = "6937041900158bb8abb7"

export const BooksContext = createContext()

export function BooksProvider({children}) {
  const [books, setBooks] = useState([])
  const { user } = useUser()

  async function fetchBooks() {
    try {
        const response = await databases.listDocuments( DATABASE_ID, TABLE_ID, [Query.equal("userId", user.$id)] )
        setBooks(response.documents)
        console.log(response.documents)

    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchBookById(id) {
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createBook(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        {
          ...data,
          userId: user.$id
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
      console.log("Book created successfully!")
    } catch (error) {
      console.log("Create book error:", error.message)
      throw error
    }
  }


  async function deleteBook(id) {
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    let unsubscribe

    if (user) {
      fetchBooks()
      
      const channel = `databases.${DATABASE_ID}.collections.${TABLE_ID}.documents`
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response
        if (events[0].includes("create")) {
          setBooks(prevBooks => [payload, ...prevBooks])
        }
      })
    } else {
      setBooks([])
    }

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [user])

  return (
    <BooksContext.Provider 
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}