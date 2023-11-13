import Navbar from "../components/Navbar";
import PhotoAlbum from "react-photo-album";
import "./Home.css";

const photos = [
  { src: "../src/Photos/DSC00203.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00236.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00545.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00270.jpeg", width: 7008, height: 4672 },
  { src: "../src/Photos/DSC00278.jpeg", width: 7008, height: 4672 },
  { src: "../src/Photos/DSC00281.jpeg", width: 7008, height: 4672 },
  { src: "../src/Photos/DSC00309.jpeg", width: 7008, height: 4672 },
  { src: "../src/Photos/DSC00311.jpeg", width: 7008, height: 4672 },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="body">
        <img
          id="photo1"
          src="../src/Photos/DSC00203.jpeg"
          width="600"
          height="800"
        ></img>
      </div>
    </>
  );
}
