// import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
// import { UserProfile, Hero, About, AddBooks, AllBooks, SingleBook, ChatMessage, Chats, Contact,Book,Search,BookShelf } from '../components'
// import "C:/Users/Dell/Downloads/Book-Bridge-Website-main/src/App.css"
// import * as BooksAPI from '../utils/BooksAPI'

// // const OtherPageRoute = () => {

// //   return (
// //     <>
// //         <Router>
// //             <Routes>
// //                 <Route path="/" element={<Hero/>} />
//             // <Route path="/all" element={<AllBooks/>} />
//                // <Route path="/book/:id" element={<SingleBook/>} />
//                // <Route path="/addbooks" element={<AddBooks/>} />
  //              // <Route path="/profile" element={<UserProfile/>} />
    //            // <Route path="/about" element={<About/>} />
      //          // <Route path="/chat" element={<Chats/>} />
        //        // <Route path="/chat/:participant" element={<ChatMessage/>} />
          //      // <Route path="/contact" element={<Contact/>} />
// //                 <Route path="/books" element={<Book/>}/>

// //             </Routes>
// //         </Router>
// //     </>
// //   )
// // }

// // export default OtherPageRoute


// class OtherPageRoute extends React.Component {
//   state = {
//     Books: []
//   }

//   componentDidMount() {
//     BooksAPI.getAll().then((books) => {
//       this.setState({Books: books})
//     });
//   }

//   changeShelf = (event) => {
//     BooksAPI.update({id: event.target.id}, event.target.value).then((response) => {
//        BooksAPI.getAll().then((books) => {
//         this.setState({Books: books})
//       });
//     });
//   }

//   function Home() {
//     return <div className="list-books">
//     <div className="list-books-title">
//       <h1>MyReads</h1>
//     </div>
//     <div className="list-books-content">
//       <div>
//         <BookShelf title='Currently Reading' books={Books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={this.changeShelf} />
//         <BookShelf title='Want to Read' books={Books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={this.changeShelf} />
//         <BookShelf title='Read' books={Books.filter((book) => book.shelf === 'read')} onChangeShelf={this.changeShelf} />
//       </div>
//     </div>
//     <div className="open-search">
//       <Link to='/search'>Add a book</Link>
//     </div>
//   </div>;
//   }

//   render() {
//     const { Books } = this.state;
//     return (
//       <div className="app">
//         <Router>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/' render={()=>(
//           <div className="list-books">
//             <div className="list-books-title">
//               <h1>MyReads</h1>
//             </div>
//             <div className="list-books-content">
//               <div>
//                 <BookShelf title='Currently Reading' books={Books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={this.changeShelf} />
//                 <BookShelf title='Want to Read' books={Books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={this.changeShelf} />
//                 <BookShelf title='Read' books={Books.filter((book) => book.shelf === 'read')} onChangeShelf={this.changeShelf} />
//               </div>
//             </div>
//             <div className="open-search">
//               <Link to='/search'>Add a book</Link>
//             </div>
//           </div>
//         )}
//         />
//         <Route path='/search' render={({history})=>(
//           <Search onShelfSelect={(event)=>{
//             this.changeShelf(event)
//             history.push('/')
//           }}/>
//         )}
//         />
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

// export default OtherPageRoute

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProfile, Hero, About, AddBooks, AllBooks, SingleBook, ChatMessage, Chats, Contact,Book,Search,BookShelf } from '../components'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI'

// Import your components as needed

function Home({ Books, changeShelf }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' books={Books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={changeShelf} />
          <BookShelf title='Want to Read' books={Books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={changeShelf} />
          <BookShelf title='Read' books={Books.filter((book) => book.shelf === 'read')} onChangeShelf={changeShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

function SearchPage({ changeShelf }) {
  return (
    <Search onShelfSelect={(event) => changeShelf(event)} />
  );
}

class OtherPageRoute extends React.Component {
  state = {
    Books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ Books: books });
    });
  }

  changeShelf = (event) => {
    BooksAPI.update({ id: event.target.id }, event.target.value).then((response) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ Books: books });
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/all" element={<AllBooks/>} />
            <Route path="/book/:id" element={<SingleBook/>} />
            <Route path="/addbooks" element={<AddBooks/>} />
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/chat" element={<Chats/>} />
            <Route path="/chat/:participant" element={<ChatMessage/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/books" element={<Home Books={this.state.Books} changeShelf={this.changeShelf} />} />
            <Route path='/search' element={<SearchPage changeShelf={this.changeShelf} />} />
            {/* Define your other routes here */}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default OtherPageRoute;
