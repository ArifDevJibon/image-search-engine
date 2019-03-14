import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    formSubmitHandler = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui category search">

                <div className="ui icon input massive">
                    <form onSubmit={this.formSubmitHandler}>
                        <input
                            className="prompt"
                            type="text"
                            placeholder="Search image..."
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                        <i className="search icon"></i>
                    </form>

                </div>

                <div className="results"></div>
            </div>
        )
    }
}

export default SearchBar;