import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>
          Products
      </Text>
    </View>
    <ScrollView>
    <Text style={styles.produkText}>
        List Produk
    </Text>

    <View contentContainerStyle={styleProduk.row}>
    {[1,2,3,4,5,6,,8,9,10].map(item => (
          <View key={item} style={styleProduk.card}>
      <Image source={require('../assets/images/tumpeng.jpg')} style={styleProduk.gambarProduk}/>
      <View>
      <Text style={styleProduk.namaProduk}>
        Nama Produk
      </Text>
      <Text style={styleProduk.tanggalProduk}>
         25/04/2024
      </Text>
      </View>
      <TouchableOpacity onPress={() => {
            console.log('Buy')
        }}
        style={styleProduk.btnBuy}>
        <Text style={styleProduk.btnBuyText}>
            Buy
        </Text>
      </TouchableOpacity>
    </View>
    ))}
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 20,
        color: '#62617f',
      },
    title: {
        height: 50,
        backgroundColor: 'white',
        elevation: 10,
    },
    produkText:{
        color: '#62617f',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 20,
    }
})

const styleProduk = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    card: {
        height: 80,
        padding: 7,
        marginVertical: 5,
        marginHorizontal: 24,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
      },
    gambarProduk: {
        width: '20%',
        height: '100%',
        borderRadius: 5,
    },
    namaProduk: {
        color : 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 12,
        marginVertical: 0.5,
        flexDirection: 'row',
    },
    tanggalProduk: {
        color : 'black',
        fontSize: 12,
        marginHorizontal: 12,
        marginVertical: 0.5,
        flexDirection: 'row',
    },
    btnBuy: {
        backgroundColor: '#614ecf',
        marginHorizontal: 65,
        marginTop: 18,
        width: '18%',
        height: '45%',
        borderRadius: 17,
        justifyContent:'center',
        alignItems: 'center',
    },
    btnBuyText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
    }

})
