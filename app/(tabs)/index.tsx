import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Uber</Text>
        <TouchableOpacity style={styles.profileCircle}>
          <Ionicons name="person" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <TouchableOpacity style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#555" />
        <Text style={styles.searchText}>Where to?</Text>
      </TouchableOpacity>

      {/* Ride Options */}
      <View style={styles.rideOptions}>
        <TouchableOpacity style={styles.rideCard}>
          <Ionicons name="car" size={28} color="#000" />
          <Text style={styles.rideText}>Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rideCard}>
          <Ionicons name="fast-food" size={28} color="#000" />
          <Text style={styles.rideText}>Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Choose Destination</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
  },
  profileCircle: {
    backgroundColor: "#000",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  searchText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
  },
  rideOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  rideCard: {
    backgroundColor: "#f8f8f8",
    width: "48%",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
  },
  rideText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  confirmButton: {
    backgroundColor: "#000",
    padding: 18,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
