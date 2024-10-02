import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from './CommonColors';

const CommonStyles = StyleSheet.create({
    flex_1: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    horizonatl_center: {
        alignItems: "center"
    },
    vertical_center: {
        justifyContent: "center"
    },
    row: {
        flexDirection: "row"
    },
    row_center: {
        flexDirection: "row",
        alignItems: 'center'
    },
    row_justify_center: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    row_between: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    row_around: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    row_between_center: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    row_around_center: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    heading_10_black: {
        fontSize: 10,
        color: BLACK,
        fontWeight: 'bold'
    },
    heading_12_black: {
        fontSize: 12,
        color: BLACK,
        fontWeight: 'bold'
    },
    heading_12_white: {
        fontSize: 12,
        color: WHITE,
        fontWeight: 'bold'
    },
    heading_14_black: {
        fontSize: 14,
        color: BLACK,
        fontWeight: 'bold'
    },
    heading_14_white: {
        fontSize: 14,
        color: WHITE,
        fontWeight: 'bold'
    },
    heading_16_black: {
        fontSize: 16,
        color: BLACK,
        fontWeight: 'bold'
    },
    heading_18_black: {
        fontSize: 18,
        color: BLACK,
        fontWeight: 'bold'
    },
    heading_20_black: {
        fontSize: 20,
        color: BLACK,
        fontWeight: 'bold'
    },


    //font paragraph
    paragraph_10_black: {
        fontSize: 10,
        color: BLACK,
    },
    paragraph_10_white: {
        fontSize: 10,
        color: WHITE,
    },
    paragraph_12_black: {
        fontSize: 12,
        color: BLACK,
    },
    paragraph_12_white: {
        fontSize: 12,
        color: WHITE,
    },
    paragraph_14_black: {
        fontSize: 14,
        color: BLACK,
    },
    paragraph_16_black: {
        fontSize: 16,
        color: BLACK,
    },
    paragraph_18_black: {
        fontSize: 18,
        color: BLACK,
    },
    paragraph_20_black: {
        fontSize: 20,
        color: BLACK,
    }

});
export default CommonStyles;
