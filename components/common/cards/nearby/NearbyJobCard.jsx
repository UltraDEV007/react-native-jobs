import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { checkImageURL } from "../../../../utils";
import styles from "./nearbyjobcard.style";

// Nearby Job Card
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      {/* Job Logo */}
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            checkImageURL(job.employer_logo)
              ? {
                  uri: job.employer_logo,
                }
              : require("../../../../assets/images/job.jpg")
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Job Info */}
      <View style={styles.textContainer}>
        {/* Job Title */}
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>

        {/* Job Type */}
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
