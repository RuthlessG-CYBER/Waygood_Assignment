import collages from "@/constants/data";
import { FlatList, Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="flex justify-between items-center top-3">
        <Text className="text-2xl font-bold">Top Universities</Text>
      </View>
      <FlatList
        data={collages}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 10, marginTop: 20 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/details/${item.id}`)}
            className="p-4 m-2 border border-gray-200 rounded-xl"
          >
            <Text className="text-lg font-bold">{item.university}</Text>
            <Text className="text-sm text-gray-500">{item.country}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
