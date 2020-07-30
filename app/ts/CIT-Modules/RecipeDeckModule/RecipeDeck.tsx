/* eslint-disable prettier/prettier */
/**
 * @providesModule  RecipeDeck
 * @flow
 */

import React from 'react';
import RecipeCard from '../RecipeCardModule/RecipeCard';
import styles from './RecipeDeckStyle';

import {
  View,
  ScrollView,
  Text,
} from 'react-native';

interface Props {
  cards: Array<RecipeCard>,
  title: String,
}

interface State {
  cards: Array<RecipeCard>,
}

export default class RecipeDeck extends React.Component<Props, State> {

  title: String;

  constructor(props: any){
    super(props);
    this.state = {
      cards: this.props.cards,
    };
    
    this.title = this.props.title;
  }

  /* TODO: Need to figure out how to get the decks overlapping each other with a
            3d perspective to it to the right.*/
  render(): React.ReactElement {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>
            {this.title}
          </Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}
                    horizontal={true}>
          {this.state.cards}
        </ScrollView>
      </View>
    );
  }
}
