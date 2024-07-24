import React, { createContext, useContext } from "react";
import { View } from "react-native";
import { useColorScheme } from "react-native";
import { themes } from "@/src/utils/color-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  colorTheme?: "light" | "dark";
}

interface ThemeContextType {
  theme: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export const ThemeProvider = ({ children, colorTheme }: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme }}>
      <View style={themes[theme]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

// Utilisation du contexte dans un composant enfant
export const useTheme = () => useContext(ThemeContext);
