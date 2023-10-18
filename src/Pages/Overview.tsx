import Navbar from "../components/Navbar";
import PhotoAlbum from "react-photo-album";
import "./Overview.css";

const photos = [
  { src: "../src/Photos/DSC00343.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00351.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00363.jpeg", width: 7008, height: 4672 },
  { src: "../src/Photos/DSC00365.jpeg", width: 7008, height: 4672 },
  { src: "../src/Photos/DSC00375.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00384.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00391.jpeg", width: 4672, height: 7008 },
  { src: "../src/Photos/DSC00396.jpeg", width: 7008, height: 4672 },
];

export default function Overview() {
  return (
    <>
      <Navbar />
      <div className="gallery">
        <PhotoAlbum
          breakpoints={[200, 400, 200]}
          layout="rows"
          photos={photos}
        />
      </div>
    </>
  );
}
