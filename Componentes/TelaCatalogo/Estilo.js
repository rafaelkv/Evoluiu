import { StyleSheet } from "react-native-web";

const Estilo = StyleSheet.create({
    container: {
        backgroundColor: '#5E0040',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,        
        marginBottom: 10,        
        width: 380,
        height:200,
        flexDirection: 'row',
        justifyContent: 'center'

    },
    titulo: {
        color: '#000000',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        
        
    },
    textoCardzin: {
        flexDirection: 'column',
    },

    subtitulo: {
        color: '#000000',
        fontSize: 18,
        textAlign: 'justify',
    },
    titulocard: {
        color: '#fff',
        fontSize:18,
        marginBottom: 10,
        marginRight: 10,
        width: "100%"
    },
    subtitulocard: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'justify',
        position: 'abosulute',
        marginTop:  55,
    },
    CardImg: {
        margin:10,
        height: "99%",
        width: 35,
        position:'abosulute',
        marginTop: 0,
        width: "38% "

    }
});

export default Estilo;