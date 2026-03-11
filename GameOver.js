import React from "react";
import {View,Text,Button} from "react-native";
import { shareScore } from "../utils/share";

export default function GameOver({score}){

return(

<View>

<Text>Game Over</Text>

<Text>Score: {score}</Text>

<Button
title="Share Score"
onPress={()=>shareScore(score)}
/>

</View>

)

}
