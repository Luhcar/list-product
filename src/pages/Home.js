import { View, Text, SafeAreaView, StyleSheet, Image, YellowBox, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Products
        </Text>
      </View>

      <ScrollView >
        <View>
        <TouchableOpacity onPress={() => {
            console.log('Add')
        }}
        style={styleProduk.btnAdd}>
          <Text style={styleProduk.btnText}>
            Add Products +
          </Text>
        </TouchableOpacity>
        </View>


        <View style={styleProduk.row}>
          {[1,2,3,4,5,6,7,8,9,10].map(item => (
            <View key={item} style={styleProduk.card}> 
              <Image source={require('../assets/images/tumpeng.jpg')} style={styleProduk.gambarProduk} />
              <Text style={styleProduk.namaProduk}>Nama Produk</Text>
            </View>
          ))}
        </View>
      </ScrollView>
        



      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    title: {
      height: 50,
      backgroundColor: 'white',
      elevation: 10,
    },
    titleText: {
      color: '#62617f',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginHorizontal: 20,
    }

})

const styleProduk = StyleSheet.create({
    btnAdd: {
      backgroundColor: '#614ecf',
      width: 140,
      height: 35,
      marginTop: 30,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnText: {
      color: 'white',
      fontSize: 15,
      fontWeight: '500'
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-between',
      marginHorizontal: 20,
   },
   card: {
      borderRadius: 10,
      width: 150,
      height: 200,
      backgroundColor: 'white',
      padding: 15,
      marginTop: 15,
   },
   gambarProduk: {
      width: '100%',
      height: 130,
      borderRadius: 10,
      marginBottom: 5,
   },
   namaProduk: {
      color: 'black',
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 14,
      fontWeight: 'bold',
    },
  
})


export default Home

