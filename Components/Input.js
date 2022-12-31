import { useState} from "react";
import {
  StyleSheet,
  TextInput,

} from "react-native";

const Input =(props)=>{
  
  const [isFocused, setIsFocused]=useState(false)

return (  <TextInput
              {...props}
              style={{...styles.input,
              backgroundColor:isFocused?"#ffffff":"#f6f6f6",
              borderColor:isFocused?"#FF6C00": "#BDBDBD",}}
              onFocus={()=>setIsFocused(true)}
              onBlur={()=>setIsFocused(false)}
            
            />)
}
const styles = StyleSheet.create({
  input: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    backgroundColor: "#f6f6f6",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 8,
  },

});

export default Input