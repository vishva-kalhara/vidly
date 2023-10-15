import React, { Component } from 'react';

class MovieItem extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>Terminator</td>
                    <td>Action</td>
                    <td>4</td>
                    <td>2.5</td>
                    <td>
                        <div style={{ display: 'flex' }}>
                            <button className='btn btn-sm'>Like</button>
                            <button className='btn btn-sm btn-danger'>Delete</button>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default MovieItem;