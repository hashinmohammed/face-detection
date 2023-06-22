import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import NewPost from "./components/NewPost";
import './index.css'

function App() {
  const [file, setFile] = useState();
  const [image,setImage]=useState()
  // create fake url
  useEffect(()=>{
    const getImage=()=>{
      const img=new Image()
      img.src=URL.createObjectURL(file)
      img.onload=()=>{
        setImage({
          url:img.src,
          width:(img.width),
          height:(img.height)
        })
      }
      
    }
    file && getImage()
    
  },[file])
  console.log(image );
  return (
    <div>
    <Navbar />
    {image ? (
      <NewPost image={image} />
    ) : (
      <div className="newPostCard">
        <div className="addPost">
          <img
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
            alt=""
            className="avatar"
          />
          <div className="postForm">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="postInput"
            />
            <label htmlFor="file">
              <img
                className="addImg"
                src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png"
                alt=""
              />
              <img
                className="addImg"
                src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                alt=""
              />
              <img
                className="addImg"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                alt=""
              />
              <button>Send</button>
            </label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              id="file"
              style={{ display: "none" }}
              type="file"
            />
          </div>
        </div>
      </div>
    )}
  </div>

  );
}

export default App;
