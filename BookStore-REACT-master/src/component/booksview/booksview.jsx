import React from 'react';
import './booksview.css';
import { Link } from 'react-router-dom';
import images from '../../images';

const BooksView = ({ books }) => {
    const createStars = () => {
        let stars = [];
        let randomNumber = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < randomNumber; i++) {
          stars.push(
            <li className="list-inline-item">
              <i className="fa fa-star"></i>
            </li>
          );
        }
        return stars;
      };
    return (
        <section className="most-books">
            <div className="container" id="Scicence">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Most<b> Bought Books</b></h2>
                    </div>
                    <div className="books">
                        {(books.slice(0,10)).map((books) => (
                            <div className="book" key={books.id}>
                                <Link to={`./bookdetails/${books.id}`}><img src={images[(books.id)]} alt='book' loading="lazy"/></Link>
                                <div className="thumb-content">
                                    <h5>{books.name}</h5>
                                    <p className="item-price">
                                        <span>{books.price}</span>  <span>{createStars()}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>);
}

export default BooksView;

