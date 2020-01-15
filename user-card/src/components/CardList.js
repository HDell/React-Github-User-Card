import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {

    render() {
        return (
            <div>
                {this.props.cards.map((data) => (
                    <Card key={data["id"]} img={data["avatar_url"]} name={data["name"]} username={data["login"]} location={data["location"]} address={data["html_url"]} followers={data["followers"]} following={data["following"]} bio={data["bio"]} />
                ))}
            </div>
        );
    }
}

export default CardList;