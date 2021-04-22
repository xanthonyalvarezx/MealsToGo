import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;
const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  padding: ${(props) => props.theme.space[3]};
`;
const ListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <ListContainer>
          <RestaurantInfoCard />
        </ListContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
