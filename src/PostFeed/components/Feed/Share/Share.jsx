import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions, Sync } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { useAuth } from "../../../../contexts/AuthContext";
import img1 from "../FeedPeopleImages/4.jpg"
import {db} from "../../../../firebase";
import {get, ref, set, child} from "firebase/database";
import React,{useState, useEffect} from "react";
import { getStorage, ref as refs, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Share() {
  const { currentUser }=useAuth();
  const storage = getStorage();
  const storageRef = refs(storage, 'some-child');
  const [message, setMessage] = useState(null);

// upload image start
  var file,files=[];
  const upImg = () => {
  var input = document.createElement('input');
  input.type = 'file';
  input.click();
  input.onchange = async (e) => {
  files=e.target.files;
  var reader = new FileReader();
  reader.onload = function(){
  file = reader.result;
  // console.log(file);
  }
  reader.readAsDataURL(files[0]);
  // console.log(file);
  file=files[0]; 
  aux(()=>(console.log("done")));
};
  }
  const aux = ()=>
  {
  const storageRef = refs(storage, 'images/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  console.log("Reached here");
// Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setPostdetails({ ... postdetails, ["post_image"]: downloadURL });
    });
  }
  );
}
//imgupload end

  const [postdetails, setPostdetails] = useState({
    post_id: "",
    post_details: "",
    post_image: "",
    post_video: "",
    post_location: "",
    post_time: "",
    likes: 0,
    comments: [],    
  });

  let name, value;
  const getDetails = (event) => {
    name=event.target.name;
    value=event.target.value;

    setPostdetails({ ... postdetails, [name]: value });
  }

  useEffect(() => {
    const temp=ref(db);
    // currentUser=useAuth();
    get(child(temp, `login_details/${currentUser.uid}`)).then((snapshot) => {
      if (snapshot.exists()){
        setMessage("Hey what's on your mind "+snapshot.val().name+"?");
      }
    }).catch((error) => {
      console.error(error);
    });
    console.log(message);
    }, [] );
  return (
    <React.Fragment>

      <div className="searchBar " >
        <Search className="searchIcon" />
        <input
          placeholder="Search for Posts"
          className="searchInput"
        />
      </div>

      <div className="share">
        <div className="shareWrapper">

          {message && <div className="shareTop">
            <div className="shareProfileImg">
              <img src={img1} alt="" />
            </div>
            <div className="shareInput">
              <input placeholder={message} name="post_details" value={postdetails.post_details} onChange={getDetails}/>
            </div>
          </div>
          }
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText" onClick={upImg}>Photo or Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText" >Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
