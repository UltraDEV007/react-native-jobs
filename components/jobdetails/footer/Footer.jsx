import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import { icons } from "../../../constants";
import styles from "./footer.style";

// Footer
const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      {/* Like Button */}
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      {/* Apply for Job */}
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
