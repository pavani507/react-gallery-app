import React from "react";
import apiKey from "./config";
import Loading from "./Loading";
import Gallery from "./Gallery";

class GalleryContainer extends React.Component {
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
    const { topic } = this.props;

    if (isLoading) {
      return <Loading />;
    }

    return <Gallery images={images} topic={topic} />;
  }
}

export default GalleryContainer;
