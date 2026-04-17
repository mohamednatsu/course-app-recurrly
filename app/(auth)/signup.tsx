import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>Signup Page</Text>
      <Link href={"/(auth)/login"} className="text-primary mt-4">
        Already have an account? Login
      </Link>
    </View>
  );
};

export default Signup;
