import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import {checkImageURL} from '../../../../utils/index'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
        source={{uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://cdn-icons-png.flaticon.com/512/1694/1694787.png'}}
        resizeMethod='contain'
        style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard