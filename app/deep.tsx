import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native"

function Deep() {
  const router = useRouter()

  const press = () => {
    if(router.canDismiss()) router.dismissAll()
      router.push("/test")
  }
  return (<View>
    <Text>Deep</Text>
    <Button onPress={press} title="Go to index" />
  </View>)
}

export default Deep