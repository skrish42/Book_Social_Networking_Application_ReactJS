import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'

class Book extends Component {
  static propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string,
      imageLinks: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array,
      shelf: PropTypes.string.isRequired,
    }),
    onChangeShelf: PropTypes.func.isRequired,
  }

  render () {
    const { book, onChangeShelf } = this.props;
    return (
      <>
      <NavBar />
      <li>
        <div className='mt-5'></div>
        <div className="book text-black m-5" style={{marginTop: '4vh', color: 'black'}}>
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
            <div className="book-shelf-changer">
              <select id={book.id} value={book.shelf} onChange={onChangeShelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading" className='text-black'>Currently Reading</option>
                <option value="wantToRead " className='text-black'>Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors.map((author) => (
            <div key={author} className="book-authors">{author}</div>
          ))}
        </div>
      </li>
      </>
    )
  }
}

export default Book