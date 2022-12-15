import { AiOutlineCheckSquare } from "react-icons/all";
import {useState} from 'react'
import NavBar from "./NavBar";
import Photo from "./Photo";
import PhotoModal from "./PhotoModal";
function App() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const appProps={
    showPhotoModal,
    setShowPhotoModal
  }
  return (
    <>
    <div className="App">
      <NavBar />
      <AiOutlineCheckSquare />
      Hello World! (DEV BRANCH)
    </div>
    <PhotoModal {...appProps}/>
    <Photo {...appProps}/>
    </>

  );
}

export default App;
