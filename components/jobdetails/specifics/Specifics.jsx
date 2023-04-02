import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

// Specifics
const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      {/* title */}
      <Text style={styles.title}>{title}:</Text>

      {/* content */}
      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            {/* dot */}
            <View style={styles.pointDot} />
            {/* item */}
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
