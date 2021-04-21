import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
  padding: 10px;
  color: black;
`;
const RestaurantCard = styled(Card)`
  box-shadow: 5px 5px 5px;
  background-color: white;
  padding: 10px;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 10px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iqaZwJ7VYRZySDa_WMfsFwHaEc%26pid%3DApi&f=1",
    ],
    address = "1234 street street",
    isOpenNow = true,
    rating = 4,
    isClosedTEmporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={1}>
      <Title>{name}</Title>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
    </RestaurantCard>
  );
};
