class MyMoment {
    constructor(date) {
        this.date = new Date(date);
    }
    get day_type() {
        let check = this.date.getDay();
        return check === 0 || check === 6 ? 'weekend' : 'weekday'
    }

    get today() {
        return new Date()
    }

    get formatDate() {
        const year = this.date.getFullYear();
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        let month_name;
        switch (month) {
            case 1:
                month_name = 'Jan'
                break;
            case 2:
                month_name = 'Feb'
                break;
            case 3:
                month_name = 'Mar'
                break;
            case 4:
                month_name = 'Apr'
                break;
            case 5:
                month_name = 'May'
                break;
            case 6:
                month_name = 'Jun'
                break;
            case 7:
                month_name = 'Jul'
                break;
            case 8:
                month_name = 'Aug'
                break;
            case 9:
                month_name = 'Sep'
                break;
            case 10:
                month_name = 'Oct'
                break;
            case 11:
                month_name = 'Nov'
                break;
            case 12:
                month_name = 'Dec'
                break;
            default:
                break;
        }
        return `${day} ${month_name}`
    }
    get dateNum() {
        return this.date.getTime()
    }



}

export default MyMoment