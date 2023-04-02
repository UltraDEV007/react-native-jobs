import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

// Nearby Jobs
const Nearbyjobs = () => {
  // use router
  const router = useRouter();
  // fetch search data
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  // keep track of first api request
  const [first, setFirst] = useState(true);

  // refetch api data
  const fetch = () => {
    refetch();
    setFirst(false);
  };

  return (
    <View style={styles.container}>
      {/* Nearby Job Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>

        {/* Show all */}
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* Nearby Job Content */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          // Loader
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          // first error in fetching data
          first ? (
            // refetch data
            fetch()
          ) : (
            // something went wrong
            <Text>Something went wrong</Text>
          )
        ) : (
          // show nearby job card
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
