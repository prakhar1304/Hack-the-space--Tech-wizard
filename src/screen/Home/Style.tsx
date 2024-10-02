import { StyleSheet } from "react-native";
import { WHITE } from "../../common/CommonColors";

const Style = StyleSheet.create({
    main: {
        marginHorizontal: 10,
        marginTop: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#0e1320',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#1b1f2a',
      },
      balanceText: {
        color: '#FFFFFF',
        fontSize: 16,
      },
      profileButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
      },
      profileImage: {
        width: '100%',
        height: '100%',
      },
      tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#14191f',
      },
      activeTab: {
        borderBottomColor: '#007bff',
        borderBottomWidth: 2,
      },
      tabText: {
        color: '#b1b8c7',
        fontSize: 16,
      },
      contentContainer: {
        padding: 20,
      },
      nftCard: {
        backgroundColor: '#1b1f2a',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
      },
      nftImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
      },
      nftDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      nftTitle: {
        color: '#FFFFFF',
        fontSize: 16,
      },
      nftTimer: {
        color: '#b1b8c7',
      },
      nftPrice: {
        color: '#FFFFFF',
      },
      trendingSection: {
        marginTop: 20,
      },
      trendingTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 10,
      },
      collectionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      collectionImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
      collectionName: {
        color: '#FFFFFF',
        marginLeft: 10,
        fontSize: 16,
      },
      collectionPrice: {
        color: '#1dbf73',
        marginLeft: 'auto',
      },
      bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#1b1f2a',
      },
      tabIcon: {
        color: '#b1b8c7',
        fontSize: 20,
      },
})

export default Style