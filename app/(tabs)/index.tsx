import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, Button,ScrollView,Alert,TouchableHighlight } from 'react-native';
import Login from "@/constants/Login ";
import About from '@/components/About ';
import { Link, router, useRouter } from 'expo-router';
//import Profile from "@/assets/images/1.jpg";

export default function Index() {
  const router = useRouter();
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cacel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={{flex: 1}}>
    <View style={Login.container}>
     <View style={Login.spacing} /> 
     <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAADr6+vW1tb09PTx8fHn5+e/v7/29va6urr5+fmzs7Pc3Nz8/PzKysrPz89zc3OJiYmnp6dsbGyXl5eCgoKurq55eXljY2NLS0tUVFQ7OzuSkpJdXV1nZ2ckJCQtLS1AQEAzMzOfn58YGBgfHx9XV1eWlpYQEBBOTk5FRUUaGhowpCPBAAAP6klEQVR4nO1d55qqOhQVUbEg2FDHsTv9vP/7XSHJLiGIDuEy8rH+nDMRkr1SdkuAVqtBgwYNGjRo0KBBgwYNGjRo0ECH742rFqFUDA6O43SrlqI8jDdOjNeq5SgP347AsmpBysLAUahakrJwBIZe1aKUAxcIOvOqZSkHW2R4qFqWcrBHhjVdiJPaM9zWnuGo9gyJLv2oWpZy0EaGs6plKQnIsF+1KOVgXHeD3+oDQ79qUUoCrMNT1ZKUBb/mfnerFdTbGLYwPJxWLUhpmEmGYdWClIapZDisWpDSsK/7MmydBMFN1XKUBzmEq6rlKA3KabvoP9RmXfYkwxEvncfD2q5IJrtQBj+ghYusgX1GKHNI3W4PnPEg877ngTKHdF/mFRjWYS9jlzaHXYyJHbUUL7voEjyn8vlKMwwJQxFwqFzOohoZi0HK/kaKfMIwSd1gKucJ16Viw8JfwjDZcfuEP9fVSFkEKnba0cIPZBhqf1cjZRGojDdz2tBaiIjj+MwM1fBsWelBERJDe3pmhkyjAEC1iAzqCgg+XwSivFJnwMuFAjp0xF+QynlCXQp7+HoOo39ZReiMq0EctSrEYPmbhG6kGPZuX+fOD85xVeWJG/+YXkz34KwYlnIiauyHtvLoyqt6NFAflqgjuxfRfR82knjoVa0fm0igQl4sSMHQJZvnFnZ8vrE2J7o3MB+Ph7jDPe+1uzYjh4tDUXznlVXn7OgGxLDtB4PZYhqt5vv15uV0Pr5/Odn4OpxedvtJNF1cZsuBF4Su6/u9GG1AT8CP4bpuGASB5w1Gy+Vydrl8bq9NTY5atUUn6jgt6M/Hbvd9er/B5X9F4XlaNYFc/CvKcF41g1wUZTjKb6JidIpSLCzB6/nfLQVUGIW9oVl+GzfxJesZ9ts93w2umnF22UbRZL97OR3/WWBYlCCNbxCn9Wp7WY6uOj9wY6Ufq32l8btXtPsv6tL83dFhN+YexuSvRiG2PpPE+tw2Pgo2NkUWpL71dhTeZfdBuMJB0XjYibtA9kHcCfTIo51D8r5M40bu/WKBBKUcFQogsTzIv/gu9EbbxUPOA2YNLUmgQ+Z7qtv9ACNTXm4iWEyiCg8IQPgbVSdDuTgphvdMo85yvn26LA0swzvSLwtLSvd/BR6dzZV7DAlUW2rxfwE6QtzAeOtr0YmlptCtKe9432C6OW3sPpi0BrFZukilH0jIT7fbrIqAWN6/YO4HSk0dIFCwJM9f/mH3Sxn191BqEtuEJi7LshmS0/QWFzoRmyRLSTDtmS59mGE4ugxynUKSbtk/2kA25kapyfMlGBCQWfrgGc1tapKYgPsiVieJuVIyXzCHSvYTc7L/GpTvneMWkvotZt/JMmTdhqV40gQX5+SRJoZgRZ3bwRzpVotjmLW2MJbGjW8MQh4K9M7YQo73XQrDeUalYC2IpwMMHxrCNWkh55T8D17580gTN5HVbSAXYQOz9P7omj5e7BhOzX0z74XoN2txDl2GjOGXoRD8u0cmKW2AeU3y6AA1C0SZWnsmgi5DSqajyuhe5NpwYR6mTkYLsNCJbe8aryyGSUb7oLhpr/+i+Tatn24+4UNI71iIM8reMxFZPQyKhvghsAy/UtVkgqXa6DIkw4W+PboU1qxhlwlAfngzlMGEO95dv8/qZ/oRi3FVw4yyF1owL4Kw6RnKUKZbO8XhckA07Surn0VnkIYm42VSbwWxZRJguSmKQY8j0yvuSeu6lr4L02NaGmiebqKbLiqMbyYClp9UETmNiT5AVnIeswUHTeI0QVTM31CEM8oSvZa+WQXFKNrBdO3WUFOLG4ZkbdE5+qP56nj8Y5qu4GiLn6YIkCHOLmyLWGPzeR3mvMR8PsnfqYB2a/gJnLbCx8rDrUx58i1VnJEbKDtDGXFgzZqOHkuI7QnpvvS0RnNIAjEoKnjoZfkGoku/4izCGzC95MgD9iaR3+hRsdAnXnO43WZwY8k2oKGGXfqGu+HCXI/7VQZu4yVnSGwIxKx0uE0xUJvuH8ZDCGNuEpe4OvgzKqrfpjA6A+ajtdVq30jxYZai1sS2XsidhkNq/GiQS3rJeCScCPIJhbgOHorOFPwFt75x1dINW0olAc7YG16kVhBT/KlIXTsisSDrzPiuG+qt4pRPt3o/XDIqgI3q+LbqcAMbpcrZCQEtZ8bHT4R2cOjdGErSsBsuILQf9LvbCzImBEf1nAxYAnkDVfvKTLMJQN3iMXeLHPG4CZgW4ykoFpSCKiXNZhhcMwZ0AWmSgBAhY0iPO8gQPNND537ZFW+JGoLUjDF/KHt2kign8LvJPLt/t7hnmp0Sr6orZ6Cn5V30qoGJCNQ/3rByZ9sTExiG8LNlgK9oRKwPMCN39xFg78fJxgmmRQhtym6hl8mIbs3uVQ0wE3iNb0FY1bA5kBSz6k0uYBUddkhN92096euf4S12S+QAd4CUuJEpRmn6+N3mFlApgjdz2K0WA1dTTAH0XUS7iwZyd2xapNc/cNvtPyIxMq8gr1xmQoMIRScr8LnIhGGXL3A6H3f8cudrPiN+t/DudqolVUwXVH4a6tMxYj9z6QFgURgH3tJ6dbA4alGG2mmy66B0eIbplZpIrT8k1FkMD+oQsZu6i/pEeZvRgaH+16mn22m5iiZINlFrYsaGskj0Pc+2OB+LD17AfZBM7T2N++uMHJLRlKaHrf6c1Hhaf04DU2JHDswCGSZ0hNpssTHMElkxZvV6N648XiLSJcl/h1SaA201C5oCd/ZZCWrpWIyQQlJxMl4rtWfvk/79Dh0zTnRW9TMuYiDrQdrDZMa6UiHc3NnSLUR2d8iJTyy0C826KpGR/CrNyq3TnV8/6+ko1ppDZewP50Pm1eLUXZewSQK2terqW1tUugxp2zns9vzQG82Utr3MttPtERgKNREM5VxI9LaYWS96fteEk/xXeJbdcLY6Z1w5CYS1EWtuIP8rDO+tnVRdUTvzaDKfzOf79e7ldDY7qIDjeh/px0QvQThFoXMZSrxTmfzl6sZwjlBu6Mxb+eAbblpRxJ39kX9Zgg99JfW9VN9JJJtMiUMTR5LizNUNgkZLYQmxSjCdQTbjJ221Q/NzH3EgkUyT2N8Wq+wWw5SmsYd/7UxXwoyLPtmyHC1X2WC0VbcwyaimOCbKFZ0GbSX8VW+Fg8skY51N+TNUa/NVCrF+SZzi422GLX9/u6LfQ3bxu6HR/sisM9nbF0TRpN/1R6bp3lJjmJ8uHXrTTM9Jw3YwGHiBJzRITy20z55v6qeh6OKM1w2k1LgArkceZ/u6UtwAwzvPKnd8b7mYRtHqimi6XVyWIy9w/Xa7Mx7DOVGVEBEKaqSSUPGKMPSynETf5gaVL67rW+gQsX5wVDX3LpEl0TRF0qWApRoV2tinMulmtblX3o25SnFRrPxH/OET6ZfL3CVRPyd2WeJcXGRDxTF1WFVC8pWKfltGhp66zvgMprhVTjBT1uMCPaDAQ+g2FFl5vahYNLABMZDiCW88mSVpnQzXGX154fiBv0WlF0H+F/JgrbJ+SAzKrxLCOhzenBiAgyxO4vXUo34uyGTamQnwToEh7k2O8QKmRNhCFLSmthi26fRpwaySxYn604zXOhkdwdD0Ap4fXmEMpc/F/pWoj2VgGEORfVrZYigkxfkuGZ7J0LLt4XefymRIursG6mqiJqVDrU9RCgnRwtwWQ2GLMPFq0AzUgh/VdYKhwVyIdc3OSsEIJaXC4eR2gIV6omhti6HwsjA0ZwxFUoKWQD5QLKZ0GlQ4lmxjEwy6mCmiw3i4SrNZUq1vLDHskM5NM0xmFU2YoWZhqWOCiS6/i3FEl9zIMw50M0Qmgb8tMfR0QRnDq0czYCEKXifzKHqWoaMV9yesthYMF7uLRXry3hdLDIU1J8uJMYw0p5YqFio1QviAsFVIbaFH72NJOfb6AHVc6hT/YcHiC+NL3IvUFhIF3QkSdl03iOI66eQy/SGXunS62UYNe+GC8s/PdhjK7CDZ/7iboYg4tP09D9kMuSem1l3E+MYYsmgLXkVwsMNQ8glTJWZQKyfCdE0EuWg7LZ87s2fw4WQBOrRa1m7ELizueUt3heiLm4+50z1n4d6dWXUqIb/fZN0n+WBkq6eT4Ifkr+Lvu9OrzWFINU2YujUr/UJfkeNplE07/zYZyi0Z+oDdTYa0QZO5MGVhX1n8IRNYai6m0gfaeYzCEbBsj1qdhd4mheHgK92o6Blu0bY495Shn06cwjIc22EoXQmqIqd6m4Mups9Y5kn4KtT7Guj3prcSpGGIZ83QlIMCKyKmSNF3EakNczoOWhYp1p4kUUTvFtqELk19hhsOw6ifdhcSk13cQ+qWthWGqs9J4p3tiL2JOUOGld4t/DGa7+MMV4ZdFX5WRWBPmwBNI9zXou8FUD4jKaLpMbU8TacHWyYHk55sWBt3/gwrNVkiMHNgSgiGRd84JmvFYWChNpg6Mp/o3VInkSAB5d9kbFamN/Y9KglhKIxRwWeefK3WkJ/oA7WGMT5bFpKh4VGaU+bTUCmGIaETA3wk4QkUfFBcWVvhlQb6iUUIdjF+YsZPzlLmWMX69evGCRHNRTt2WVUOsbhCRxQ8BK2sUSzRSH+hGpkgyrGa8+yo6SMRw9Xq9hkf1gSoFWwcFp7JKXwUYL0On6atIDL7+qNttPX0p5NVOvuhA5LUBqKRIoWqaGaBYc7LjvLeUYkPETz0gCAM18QcXigVLJZQoS9MZoRJoE7z7icHTh55QnCcGIaviHagiaFw4h94ciwNXbHI4QCbnHc/Ne8PNdx3U++swmQVUIp+UTOHybt49cnQ5FVgOF37a2CQCKt/VZih4UBMYgDBL8l7N9iJ3FlMIbTwVEDquH6BOtOvxxSrCaKnvJc5sXsLvyMwvLoVr1sSKsPJ899DN4BHVnPuCWveQ/Y/svddnKG+ea6fkM1xJ7qGm20CD/X+GpqbL4ZsSEpuOyd8DAvP0hSOxRnyaF76g/t0URZoOryENykdLDBseWiGlOdFSedkY4nFP5XwMZZ3GwyvdiixOrsZuJyUYd4HVlT8fC7lQ5BWxjBBnx05o2e2ct9olkzzXUkvbLOxDk149JPcpbyaPsG5JIYk01LxB2SktbDehcRaVPy6wJeSGOLOw1v+taViUxbDViCqPj72giv7kN5jKR8FG7uBW/1XAOclMvwbkFq9pp8+j7GqPUN8JLKumDYMnx7SMFf5uaWSUX+Gn7VnWP8xrD/DacPw6bGqPcN57Rl+1J7hufYMnbr7pSol9sh7ip8Lag/M3oug/xrgHEVtv3iDTwTWNBdFThk81Vde7gc5CmPvXdB/CXQL3crj3H8O9AU/x6qFKQUlfcDjD6H+DMv5gMdfQr/2DNlTH1XLUg7IcaaKd9tLA5xePdY2QhRnJM9Wv7r2x9AJvKD6regGDRo0aNCgQYMGDRo0aNCgQRn4D8y9rLUy29/HAAAAAElFTkSuQmCC'}} style={Login.logo} />
     <Text style={Login.title} >Welcome to Stussy</Text>
     <TextInput style={Login.input} placeholder="Username"/>
     <TextInput style={Login.input} placeholder="Password" secureTextEntry/>
    <TouchableOpacity style={Login.button}>
      <Text style={Login.buttonText}>Login</Text>
    </TouchableOpacity>
    <About></About>
    <Link href="/contact">Click Here</Link>

    <Button  title="Click Test"
    onPress={()=>router.push("/contact?nameMeyawee&major=IT")} />

    <Button  title="Click Params"
    onPress={()=>
       router.push({
        pathname: "/contact",
        params: {
          name: "Meyawee",
          major: "IT",
          email: "123@gmail.com",
        },
       })} />

       <Button  title="Go to User Id"
    onPress={()=>router.push("/user/123")} />

    <Button  title="Go to Profile Id"
    onPress={()=>router.push("/profile")} />
    <Text>&nbsp;</Text>
    <Text style={{alignItems:"center"}}>Use Image</Text>
    <Image source={require("@/assets/images/1.jpg ")}
    style={{
      width:120,
      height:120,
      borderRadius:100,
      marginHorizontal: "auto",
    }}
    resizeMode="cover"
  />
  {/* <Image source={Profile}
    style={{
      width:120,
      height:120,
      borderRadius:100,
      marginHorizontal: "auto",
    }} 
    resizeMode="cover"
  />*/}
     <TouchableHighlight
          underlayColor="white"
          style={{
            backgroundColor: "grey",
            paddingVertical: 10,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
          onPress={() => {
            showAlert();
          }}
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>
     
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

