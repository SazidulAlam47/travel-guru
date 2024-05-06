const formatDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedDate = day + ' ' + months[monthIndex] + ', ' + year;
    return formattedDate;
}

export default formatDate;