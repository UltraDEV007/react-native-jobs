import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import { icons, SIZES } from "../../../constants";
import styles from "./welcome.style";

// Job Types
const jobTypes = ["Full-time", "Part-time", "Contractor"];

// Welcome
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  // use router
  const router = useRouter();
  // current active job type
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      {/* Header */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Shubham</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* Search Input Content */}
      <View style={styles.searchContainer}>
        {/* Search Input */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* Jobs Type Content */}
      <View style={styles.tabsContainer}>
        {/* Show job list */}
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              {/* active job name */}
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
