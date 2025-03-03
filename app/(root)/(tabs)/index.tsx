import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View className="flex justify-center items-center h-full">
      <Text className="text-2xl">Welcom to RelSate Application.</Text>
      <Link href="/sign-in"> Sign In </Link>
      <Link href="/profile"> Profile </Link>
      <Link href="/explore"> Explore </Link>
      <Link href="/properties/1"></Link>

    </View>
  );
}
