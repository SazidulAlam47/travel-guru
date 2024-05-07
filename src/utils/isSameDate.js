const isSameDate = (firstDate, secondDate) => {
    if (firstDate.getDate() === secondDate.getDate() && firstDate.getMonth() === secondDate.getMonth() && firstDate.getFullYear() === secondDate.getFullYear()) {
        return true;
    }
    return false;
}

export default isSameDate;