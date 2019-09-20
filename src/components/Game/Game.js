import React, { Component } from 'react';
import './Game.css';
import Nav from '../Nav';
import Footer from '../Footer';
import Jumbo from '../Jumbo';
import Card from '../Card';
import Grid from '../Grid';
import dogs from '../dogs.json';


class Game extends Component {
    state = {
        dogs,
        score: 0,
        topScore: 0,
        goal: 12,
        message: "How's your memory?"
    };

    handleClick = id => {
        let doubleClicked = false;
        let update = {
            dogs: [...this.state.dogs],
            score: this.state.score,
            topScore: this.state.topScore
        };

        update.dogs.forEach(dog => {
            //stopped here started the if function to id if you double clikced the dog image
            if (dog.id === id) {
                if (dog.clicked) {
                    doubleClicked = true;
                };
                //updating the scores
                dog.clicked = true;
                update.score++;
                if (update.score > update.topScore) {
                    update.topScore = update.score;
                };
            };
        });

        //resetting game
        if (doubleClicked) {
            update.dogs.forEach(
                dog => dogs.clicked = false
            )
            update.score = 0;
        };

        //randomize
        update.dogs = update.dogs.sort(() => 0.5 - Math.random());

        this.setState({ dogs: update.dogs, score: update.score, topScore: update.topScore });
    };

    render() {
        return (
            <div>
                <Nav
                    message={this.state.message}
                    score={this.state.score}
                    topScore={this.state.topScore} />
                <Jumbo />
                <Grid shake={!this.state.score && this.state.topScore}>
                    {this.state.dogs.map(
                        dog => (
                            <Card handleImageClick={() => this.handleClick(dog.id)} key={dog.id} id={dog.id} image={dog.image} />
                        )
                    )}
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Game;