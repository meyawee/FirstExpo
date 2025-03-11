import { StyleSheet, Text, View,Button } from 'react-native';
import { useRouter } from 'expo-router'
import React from 'react';
import Login from '@/constants/Login ';
import { Link,useLocalSearchParams } from 'expo-router'


export default function Contact() {
    const router = useRouter();
    const {username, password, fullname, email, tel}=useLocalSearchParams();
  return (
    <View style={Login.container}>
      <Text> UserName:{username} </Text>
      <Text> Password:{password} </Text>
      <Text> Fullname:{fullname} </Text>
      <Text> Email:{email} </Text>
      <Text> Tel:{tel} </Text>
        <Button  title="Click Back" onPress={()=>router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({})