import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

// Company Styles
const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <View style={styles.logoBox}>
        <Image
          source={
            checkImageURL(companyLogo)
              ? {
                  uri: companyLogo,
                }
              : require("../../../assets/images/job.jpg")
          }
          style={styles.logoImage}
        />
      </View>

      {/* Job Title */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      {/* Company Info */}
      <View style={styles.companyInfoBox}>
        {/* Company Name */}
        <Text style={styles.companyName}>{companyName} / </Text>
        {/* Location */}
        <View style={styles.locationBox}>
          {/* Icon */}
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          {/* Text */}
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
