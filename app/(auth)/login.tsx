import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <Text>login Page</Text>
      <Link href={"/(auth)/signup"} className="text-primary mt-4">
        Create Account
      </Link>
    </View>
  );
};

export default Login;
