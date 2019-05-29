import React from "react";
import GalleryItem from "./GalleryItem";
import apiKey from "./config";
import Loding from "./Loding";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      images: []
    };
  }
  //Fetch the data from the Flickr API using the Fetch API.
  performSearch = () => {
    const { topic } = this.props;
    this.setState({ isLoading: true });
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ images: responseData.photos.photo, isLoading: false });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  componentDidMount() {
    this.performSearch();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.performSearch();
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className="photo-container">
        <h2>{this.props.topic}</h2>
        <ul>
          {isLoading ? (
            <Loding />
          ) : (
            images.map(image => (
              <GalleryItem
                url={`https://farm${image.farm}.staticflickr.com/${
                  image.server
                }/${image.id}_${image.secret}.jpg`}
                key={image.id}
              />
            ))
          )}{" "}
        </ul>
      </div>
    );
  }
}

export default Gallery;
