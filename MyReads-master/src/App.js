import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Bookshelf from './components/Bookshelf'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    Books: []
  }

  handleClick() {
    window.location.href = 'http://localhost:3000/';
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    });
  }

  changeShelf = (event) => {
    BooksAPI.update({id: event.target.id}, event.target.value).then((response) => {
       BooksAPI.getAll().then((books) => {
        this.setState({Books: books})
      });
    });
  }



  render() {
    const { Books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <div className="list-books">
            <div className="list-books-title">

            <div className="flex-fill">

            <button onClick={this.handleClick}>Home</button>
            <h1>Your Personalised Shelves</h1>
          </div>

            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title='Currently Reading' books={Books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={this.changeShelf} />
                <Bookshelf title='Want to Read' books={Books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={this.changeShelf} />
                <Bookshelf title='Read' books={Books.filter((book) => book.shelf === 'read')} onChangeShelf={this.changeShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
        />
        <Route path='/search' render={({history})=>(
          <Search onShelfSelect={(event)=>{
            this.changeShelf(event)
            history.push('/')
          }}/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
