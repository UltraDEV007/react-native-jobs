import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

// About
const About = ({ info }) => {
  return (
    <View style={styles.container}>
      {/* Head Text */}
      <Text style={styles.headText}>About the job:</Text>

      {/* Body Text */}
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
