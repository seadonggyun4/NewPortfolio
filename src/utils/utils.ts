 // 랜덤값을 만들어주는 함수
 export const getRandom = (min:number, max:number) => {
    return Math.random() * (max - min) + min;
}