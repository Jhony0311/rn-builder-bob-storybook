import { Dimensions, Platform } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const guidelineBaseWidth = 375;

export const scaleFont = (size: number): number =>
  Platform.OS === "web" ? size : (WINDOW_WIDTH / guidelineBaseWidth) * size;
