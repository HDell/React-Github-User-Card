import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img}/>
                <div className="card-info">
                    <h3 className="name">{this.props.name}</h3>
                    <p className="username">{this.props.username}</p>
                    <p>Location: {this.props.location}</p>
                    <p>Profile:
                        <a href={this.props.address}>{this.props.address}</a>
                    </p>
                    <p>Followers: {this.props.followers}</p>
                    <p>Following: {this.props.following}</p>
                    <p>Bio: {this.props.bio}</p>
                </div>
            </div>
        );
    }
}

export default Card;