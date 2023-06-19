import { StyleSheet } from "react-native-web";

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: '#440404',
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 80,
        marginTop: 20,
        padding: 20,
        width: 250
    },
    titulo: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Estilo;