import { Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../../shared/store/user-store";
import { HomeView } from "../../../viewModels/Home/Home.view";
import { useHomeViewModel } from "../../../viewModels/Home/useHome.ViewModel";

export default function Home() {

    const viewModel = useHomeViewModel()
    return (
        <HomeView {...viewModel}/>
    )
}