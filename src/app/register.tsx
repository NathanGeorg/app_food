import { BtnRegister } from "@/components/button"
import { Input } from "@/components/input"
import { StyleSheet, Text, View } from "react-native"

export default function Register(){
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Register</Text>
            <Input placeholder="E-mail"/>
            <Input placeholder="Password"/>
            <BtnRegister label="Submit"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        padding: 15,
    },
    tittle: {
        fontSize: 30,
        fontWeight: "bold",
    }
})