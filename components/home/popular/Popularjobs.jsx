import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'

import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const {data, isLoading, error} = useFetch('search', {
    query: "react developer",
    num_pages: 1,
    page: 1
  })
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={data}
            key={data.job_id}
            renderItem={({item})=> (
              <PopularJobCard item={item}/>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            />
        )}
      </View>
    </View>
  )
}

export default Popularjobs