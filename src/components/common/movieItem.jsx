import React, { Component } from 'react';

class MovieItem extends Component {
    state = {
        isLiked: false
    }

    handleLike = () => {
        const isLiked = this.state.isLiked ? false : true
        this.setState({ isLiked })
    }

    render() {
        const { _id, title, genre, numberInStock: stock, dailyRentalRate: rate } = this.props.movie;
        return (
            <React.Fragment>
                <tr>
                    <td>{title}</td>
                    <td>{genre.name}</td>
                    <td>{stock}</td>
                    <td>{rate}</td>
                    <td>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <button onClick={this.handleLike} className={this.getLikeButton()}>Like</button>
                            <button onClick={() => {
                                this.props.onDelete(_id);
                            }} className='btn btn-sm btn-danger'>Delete</button>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );
    }

    getLikeButton = () => {
        let classes = "btn btn-sm "
        if (this.state.isLiked) classes += 'btn-secondary'
        return classes;
    }
}

export default MovieItem;