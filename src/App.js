import "./styles.css";
import Header from "./components/header";
import Images from "./components/images";

function App() {
  return (
    <>
      <Header />
      <div className="gallery">
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"
          imgALT="Cat Picture 1"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg"
          imgALT="Cat Picture 2"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg"
          imgALT="Cat Picture 3"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg"
          imgALT="Cat Picture 4"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg"
          imgALT="Cat Picture 5"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg"
          imgALT="Cat Picture 6"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/7.jpg"
          imgALT="Cat Picture 7"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/8.jpg"
          imgALT="Cat Picture 8"
        />
        <Images
          imgURL="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg"
          imgALT="Cat Picture 9"
        />
      </div>
    </>
  );
}

export default App;
