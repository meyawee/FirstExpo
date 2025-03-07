import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@/constants/Login ';
import { useRouter,useLocalSearchParams } from 'expo-router';


export default function Contact() {
    const router = useRouter(); //use Router
    const {name, major, email} = useLocalSearchParams(); //useLocalSearchParams

  return (
    <View style={Login.container}>
      <Text>contact page</Text>
      <Text>Name : {name}</Text>
      <Text>Name : {major}</Text>
      <Text>Name : {email}</Text>
      <Button title="Back"onPress={()=> router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({})