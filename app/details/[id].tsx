import { View, Text, Image, StatusBar } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import collages from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Details() {
  const { id } = useLocalSearchParams();

  const collage = collages.find((item) => item.id === Number(id));

  if (!collage) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Data not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-row justify-between items-center mb-4">
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => router.back()}
        />
      </View>
      <Image
        source={{ uri: collage.image }}
        className="h-56 w-full rounded-xl mb-4 mt-3"
      />

      <Text className="text-2xl font-bold">{collage.university}</Text>
      <Text className="text-gray-500 mb-4">{collage.country}</Text>

      <Text className="text-base text-gray-700">
        {collage.detailed_description}
      </Text>
    </SafeAreaView>
  );
}
