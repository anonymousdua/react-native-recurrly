import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up">Create An Account</Link>
    </View>
  );
};

export default SignIn;
