import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

import styles from "./popularjobs.style";

// Popular Jobs
const Popularjobs = () => {
  // use router
  const router = useRouter();

  // fetch search data from api
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  // keep track of first api request
  const [first, setFirst] = useState(true);

  // refecth api data
  const fetch = () => {
    refetch();
    setFirst(false);
  };

  // keep track of current selected job
  const [selectedJob, setSelectedJob] = useState("");

  // handle job card press
  const handleCardPress = (item) => {
    // redirect to job-details route
    router.push(`/job-details/${item.job_id}`);
    // set selected job
    setSelectedJob(item);
  };

  return (
    <View style={styles.container}>
      {/* Popular Jobs Header */}
      <View style={styles.header}>
        {/* Popular Jobs Title */}
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        {/* Show all */}
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* fetching data */}
        {isLoading ? (
          // show loader
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          // error in fetching data
          first ? (
            // refetch data
            fetch()
          ) : (
            // something went wrong
            <Text>Something went wrong</Text>
          )
        ) : (
          // Show popular job card content
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
