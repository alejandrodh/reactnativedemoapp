import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Toptext extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }
    componentDidMount(){
        AsyncStorage.setItem('misDatos', this.state.counter)
        .then(function(){
        })
        .catch(e=>console.log(e))
    }

    touch(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    componentDidUpdate(){
        AsyncStorage.setItem('misDatos', String(this.state.counter))      
    }

    render(){
        return(
            <React.Fragment>
                <Text>El contador está en: {this.state.counter}</Text>
                <TouchableOpacity style={styles.textContainer} onPress={ () => this.touch()}>   
                    <Text style={styles.text}>Hola mundo</Text>
                </TouchableOpacity>
            </React.Fragment>
        )   
    }
}

//Declaramos los estilos
const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  text: {
      color: '#000',
      paddingHorizontal: 20,
      paddingVertical: 10,
  },
})

export default Toptext;