import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({companyLogo, companyName, jobTitle, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
          <Image
            style={styles.logoImage} 
            source={{uri: checkImageURL(companyLogo) ? companyLogo : "https://cdn-icons-png.flaticon.com/512/2399/2399888.png"}}
          />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          >
          </Image>
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>


    </View>
  )
}

export default Company