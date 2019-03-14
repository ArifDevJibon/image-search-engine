import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './Images';

class App extends React.Component {

    state = { images: [] };

    onSubmitHandler = async (term) => {

        const response = await axios.get('https://api.unsplash.com/search/photos', {  // location and configure object
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 67bc3795f205d3b50e29069003ec5bf9d9117ed8956dafd9007171bfa99fc211'
            }
        })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div style={{ margin: '50px auto', textAlign: 'center' }}>
                <SearchBar onSubmit={this.onSubmitHandler} />
                <ImageList images={this.state.images} />
            </div>
        );
    };
};

export default App;