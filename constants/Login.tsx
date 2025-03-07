import { StyleSheet } from "react-native";

const Login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
      },
      spacing: {
        height:50,
      },
      logo: {
        width: 200,
        height: 200,
        marginBottom:20,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom:20,
      },
      input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      button: {
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
});

export default Login;