import { Slot } from "expo-router";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Loading from "@/components/loading";

export default function Layout() {
  const [loadingFont] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <>
        { loadingFont ? <Slot /> : <Loading />}
    </>
  )
}