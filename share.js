import * as Sharing from "expo-sharing";

export const shareScore = async(score)=>{

await Sharing.shareAsync(
`🔥 I scored ${score} points in Swipe Challenge Game`
);

}
