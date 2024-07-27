import { Text, View } from "react-native";
import AsmaulHusna from "./components/asmaulHusna";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-center mt-20">walang</Text>
      <SafeAreaView>
        <AsmaulHusna></AsmaulHusna>
      </SafeAreaView>
    </View>
  );
}

export default Index;
