import { Stack } from "expo-router";

export default function CameraLayout() {
    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="modal" options={{
                presentation: 'transparentModal',
                animation: 'fade',
                headerShown: false
            }}/>
        </Stack>
    )
}