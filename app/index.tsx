import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link
        href={"/onboarding"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Onboarding Page
      </Link>
      <Link
        href={"/(auth)/signup"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Signup Page
      </Link>
      <Link
        href={"/(auth)/login"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Login Page
      </Link>

      <Link
        href={"/subscriptions/123"}
        className="mt-4 rounded bg-green-500 text-black p-4"
      >
        Go to Subscriptions Details
      </Link>
    </View>
  );
}
