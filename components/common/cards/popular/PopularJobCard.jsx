import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { checkImageURL } from "../../../../utils";
import styles from "./popularjobcard.style";

// Popular Job Card
const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      {/* Job Icon */}
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={
            checkImageURL(item.employer_logo)
              ? {
                  uri: item.employer_logo,
                }
              : require("../../../../assets/images/job.jpg")
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Company Name */}
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      {/* Job Title */}
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>

        {/* Job Country */}
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
