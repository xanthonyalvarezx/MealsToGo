import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
  padding: 10px;
  color: red;
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
    <Card elevation={1} style={styles.card}>
      <Title>{name}</Title>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.4,
  },
  cover: {
    padding: 15,
    backgroundColor: "white",
  },
});
