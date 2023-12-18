import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}>
      <Text>PopularJobCard</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard