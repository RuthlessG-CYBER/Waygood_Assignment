import { StatusBar, Text, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(screens)");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        className="bg-red-500 h-44 w-44 rounded-2xl items-center justify-center"
      >
        <Text className="text-white font-bold text-lg">WayGood</Text>
      </View>
    </View>
  );
}
