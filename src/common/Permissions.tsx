import { PermissionsAndroid, Platform } from "react-native";

export async function requestExternalStoragePermission() {
    try {
        let isPermitedWriteExternalStorage = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        const isPermitedReadExternalStorage = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

        if (Platform.OS === 'android') {
            if (!isPermitedWriteExternalStorage) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                    title: "Storage permission needed",
                    message: 'Storage permission needed.',
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Don't allow",
                    buttonPositive: "Allow"
                }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true;
                } else {
                    console.log("Permission denied");
                    return false;
                }
            } else if (!isPermitedReadExternalStorage) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                    title: "Storage permission needed",
                    message: 'Storage permission needed.',
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Don't allow",
                    buttonPositive: "Allow"
                }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true;
                } else {
                    console.log("Permission denied");
                    return false;
                }
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}


export async function requestNotificationPermission() {
    try {
        if (Platform.OS === 'android') {
            const currentStatus = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
            if (currentStatus) {
                console.log('Notification permission already granted');
                return true;
            }

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS, {
                title: 'Notification Permission',
                message: 'This app needs notification permission to send you notifications.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: "Don't Allow",
                buttonPositive: 'Allow',
            });

            console.log("Granted:", granted)

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Notification permission granted');
                return true;
            } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
                // Alert.alert(
                //     'Permission Required',
                //     'You have denied the notification permission permanently. Please enable it from the settings.',
                //     [
                //         { text: 'Cancel', style: 'cancel' },
                //         { text: 'Open Settings', onPress: () => Linking.openSettings() },
                //     ],
                //     { cancelable: false }
                // );
                return true;
            } else {
                console.log('Notification permission denied');
                return false;
            }
        }
        return true;
    } catch (err) {
        console.warn(err);
        return false;
    }
}