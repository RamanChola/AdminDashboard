import { Link, useHistory, useLocation } from "react-router-dom";
import "./product.scss";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
import { updateMovie } from "../../context/movieContext/apiCalls";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Product() {
  const history = useHistory();
  const location = useLocation();
  const movieInfo = location.movie;
  const [movie, setMovie] = useState(movieInfo);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(null);
  const { dispatch } = useContext(MovieContext);

  console.log(movieInfo);
  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    console.log(items);
    items.forEach((item) => {
      if (item.file) {
        const fileName = new Date().getTime() + item.label + item.file.name;
        const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is" + progress + "% done.");
            setProgress(progress);
          },
          (err) => console.log(err),
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              setMovie((prev) => {
                return { ...prev, [item.label]: url };
              });
              setUploaded((prev) => prev + 1);
            });
          }
        );
      } else {
        setUploaded(1);
      }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
      { file: imgTitle, label: "imgTitle" },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //make actions using movie, setapis and push update to backend
    updateMovie(movie, dispatch);
    history.push("/movies");
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movieInfo.img} alt="" className="productInfoImg" />
            <span className="productName">{movieInfo.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movieInfo._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movieInfo.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movieInfo.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movieInfo.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder={movieInfo.title}
            />
            <label>Description</label>
            <input
              type="text"
              name="desc"
              onChange={handleChange}
              placeholder={movieInfo.desc}
            />
            <label>Year</label>
            <input
              type="text"
              name="year"
              onChange={handleChange}
              placeholder={movieInfo.year}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              onChange={handleChange}
              placeholder={movieInfo.genre}
            />
            <label>Limit</label>
            <input
              type="text"
              name="limit"
              onChange={handleChange}
              placeholder={movieInfo.limit}
            />
            <label>Trailer</label>
            <input
              type="file"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
              placeholder={movieInfo.trailer}
            />
            <label>Video</label>
            <input
              type="file"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
              placeholder={movieInfo.video}
            />
            <label>Image Title</label>
            <input
              type="file"
              name="imgTitle"
              onChange={(e) => setImgTitle(e.target.files[0])}
              placeholder={movieInfo.imgTitle}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movieInfo.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish style={{ cursor: "pointer" }} />
              </label>
              <input
                type="file"
                id="file"
                name="image"
                onChange={(e) => setImg(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <div className="progress">
              {progress && <LinearProgressWithLabel value={progress} />}
            </div>
            <div>
              {uploaded >= 1 ? (
                <button
                  className="productButton"
                  onClick={handleSubmit}
                  style={{ pointerEvents: progress < 100 && "none" }}
                >
                  Create
                </button>
              ) : (
                <button className="productButton" onClick={handleUpload}>
                  Upload
                </button>
              )}
            </div>
            <div
              style={{
                marginTop: "100px",
                pointerEvents: progress === 100 && "none",
                display: progress === 100 && "none",
              }}
            >
              <p>if no files are present click here</p>
              <button className="productButton" onClick={handleSubmit}>
                update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
