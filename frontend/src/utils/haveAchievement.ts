const haveAchivement = (totalMedals: number, MAX_MEDALS_ACTIVE = 10) => {
    return totalMedals < MAX_MEDALS_ACTIVE ? false : 'opacity-100'
}

export default haveAchivement