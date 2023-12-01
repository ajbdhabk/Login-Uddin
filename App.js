// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "./src/screens/LogIn/LogIn";
import Register from "./src/screens/Resgister/Register";
import Forgotpassword from "./src/screens/Forgotpassword/Forgotpassword";
import ResetConfirmation from "./src/screens/Forgotpassword/ResetConfirmation";
import Confirmation from "./src/screens/Forgotpassword/Confirmation";
import Home from "./src/screens/Homescreen/Home";
import LandingPage from "./src/screens/Landingpage/LandingPage"; // Updated import path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot Password" component={Forgotpassword} />
        <Stack.Screen name="Reset Confirmation" component={ResetConfirmation} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
