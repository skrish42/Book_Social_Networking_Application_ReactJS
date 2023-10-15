import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/Users/kicha/Downloads/BookStore-REACT-master/src/component/app.css";
import "./custom.css";
import { Modal, Button } from "react-bootstrap"; // Adjust the import path as needed

const Libmangemnt = () => {
  const libraryCenters = [
    {
      id: 1,
      name: "The Anna Centenary Library",
      books: [
        { id: 1, name: "பொன்னியின் செல்வன், முழுத்தொகுப்பு" },
        { id: 2, name: "சில நேரங்களில் சில மனிதர்கள்" },
        { id: 3, name: "Kallikaattu Ithigaasam" },
        { id: 4, name: "ஒரு மனிதன் ஒரு வீடு ஒரு உலகம்" },
        { id: 5, name: "Karuvachi Kaaviyam" },
        { id: 6, name: "சிவகாமியின் சபதம்" },
        // Add more books for this center
      ],
    },
    {
      id: 2,
      name: "The Serfoji Sarasvati Mahal Library",
      books: [
        { id: 1, name: "மோகமுள்" },
        { id: 2, name: "கற்றதும்... பெற்றதும்..." },
        { id: 3, name: "நேர் நேர் தேமா" },
        { id: 4, name: "தோட்டியின் மகன்" },
        { id: 5, name: "தனிமையின் நூறு ஆண்டுகள்" },
        { id: 6, name: "The Oath of the Vayuputras" },
        // Add more books for this center
      ],
    },
    {
      id: 3,
      name: "Connemara Public Library",
      books: [
        { id: 1, name: "வாடிவாசல்" },
        { id: 2, name: "Think Like a Rocket Scientist" },
        { id: 3, name: "Rise: 3 Practical Steps for Advancing Your Career" },
        { id: 4, name: "Edge: Turning Adversity into Advantage" },
        { id: 5, name: "Invaluable: Master the 10 Skills " },
        { id: 6, name: "Hack Your Bureaucracy" },
        // Add more books for this center
      ],
    },
    {
      id: 4,
      name: "The Nilgiri Library",
      books: [
        { id: 1, name: "வெட்டுப்புலி" },
        { id: 2, name: "என் இனிய இயந்திரா" },
        { id: 3, name: "Word Power Made Easy" },
        { id: 4, name: "Red Dragon" },
        { id: 5, name: "யேசு கதைகள்" },
        { id: 6, name: "Kurathi Mudukku" },
        // Add more books for this center
      ],
    },
    {
      id: 5,
      name: "Kalaignar Centenary Library",
      books: [
        { id: 1, name: "Our Lady of Perpetual Hunger: A Memoir" },
        { id: 2, name: "Make It Messy: My Perfectly Imperfect Life" },
        { id: 3, name: "Picnic in Provence: A Memoir with Recipes" },
        { id: 4, name: "Mastering the Art of Soviet Cooking" },
        { id: 5, name: "A Mess of Greens" },
        { id: 6, name: "Lunch in Paris: A Love Story" },
        // Add more books for this center
      ],
    },
    {
      id: 6,
      name: "Adyar Library & Research Centre",
      books: [
        { id: 1, name: "Tender at the Bone: Growing Up at the Table" },
        { id: 2, name: "Eat a Peach" },
        { id: 3, name: "Memories of Philippine Kitchens" },
        { id: 4, name: "Notes from a Young Black Chef" },
        { id: 5, name: "97 Orchard: An Edible History " },
        { id: 6, name: "An Onion in My Pocket: My Life with Vegetables" },
        // Add more books for this center
      ],
    },
    {
      id: 7,
      name: " The National Library of India, Kolkata",
      books: [
        { id: 1, name: "வாடிவாசல்" },
        { id: 2, name: "Think Like a Rocket Scientist" },
        { id: 3, name: "Rise: 3 Practical Steps for Advancing Your Career" },
        { id: 4, name: "Edge: Turning Adversity into Advantage" },
        { id: 5, name: "Invaluable: Master the 10 Skills " },
        { id: 6, name: "Hack Your Bureaucracy" },
        // Add more books for this center
      ],
    },
    {
      id: 8,
      name: "Krishnadas Shama Central Library, Goa",
      books: [
        { id: 1, name: "Our Lady of Perpetual Hunger: A Memoir" },
        { id: 2, name: "Make It Messy: My Perfectly Imperfect Life" },
        { id: 3, name: "Picnic in Provence: A Memoir with Recipes" },
        { id: 4, name: "Mastering the Art of Soviet Cooking" },
        { id: 5, name: "A Mess of Greens" },
        { id: 6, name: "Lunch in Paris: A Love Story" },
        // Add more books for this center
      ],
    },
    {
      id: 9,
      name: "Delhi Public Library",
      books: [
        { id: 1, name: "வெட்டுப்புலி" },
        { id: 2, name: "என் இனிய இயந்திரா" },
        { id: 3, name: "Word Power Made Easy" },
        { id: 4, name: "Red Dragon" },
        { id: 5, name: "யேசு கதைகள்" },
        { id: 6, name: "Kurathi Mudukku" },
        // Add more books for this center
      ],
    },
    // Add more library centers here with their respective books
  ];

  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
    setShowModal(true);
  };

  return (
    <>
      

      <div className="container">
        <h3 className="mb-4 mt-4">Check the Books available in any library before visting them in offline !!</h3>
        <div className="row">
          {libraryCenters.map((center) => (
            <div key={center.id} className="col-md-4">
              <div
                className="library-center-card"
                onClick={() => handleCenterClick(center)}
              >
                <img
                  src={`/images1/center${center.id}.jpg`} // Replace with your image file paths
                  alt={`Library Center ${center.id}`}
                  className="center-image"
                />
                <h2 className="library-center-name">{center.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Books at {selectedCenter ? selectedCenter.name : ""}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {selectedCenter &&
                selectedCenter.books.map((book) => (
                  <li key={book.id}>{book.name}</li>
                ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Libmangemnt;
