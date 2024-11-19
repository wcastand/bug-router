import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native"

function Test() {
  const router = useRouter()
  return (<View>
    <Text>Test</Text>
    <Button onPress={() => router.push("/deep")} title="Go to deep" />
  </View>)
}

export default Test