export const haveAchivement = (totalMedals,MAX_MEDALS_ACTIVE = 10) =>{
    return totalMedals < MAX_MEDALS_ACTIVE  ? 'opacity-50' : 'opacity-100'
}
