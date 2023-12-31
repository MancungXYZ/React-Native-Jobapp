import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import {checkImageURL} from '../../../../utils/index'

const NearbyjobCard = ({job, handleNavigate, selectedJob}) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => handleNavigate(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
        source={{uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://cdn-icons-png.flaticon.com/512/1694/1694787.png'}}
        resizeMode='contain'
        style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyjobCard