import Navbar from "../components/Navbar";
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
        <a href="/CraterGallery">
          <img
            id="photo1"
            className=".img-fluid mx-auto d-block"
            src="../src/Photos/DSC00309.jpeg"
          ></img>
        </a>
        <img
          id="photo2"
          className=".img-fluid"
          src="../src/Photos/DSC00236.jpeg"
        ></img>
      </div>
    </>
  );
}
