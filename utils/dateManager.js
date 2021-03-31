class DateManager{
    date = this.__update();
    day = this.date.getDate();
    month = this.date.getMonth() + 1;
    year = this.date.getUTCFullYear();
    hours = this.date.getHours();
    minutes = this.date.getMinutes();
    seconds = this.date.getSeconds();

    __update(){
        return new Date();
    }

    dateForDB = () => {
        this.__update();
        let todayDate = `${this.year}-${this.month}-${this.day}`;
        return todayDate;
    }

    timestampForDB = () => {
        this.__update();
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        return `${this.dateForDB()} ${time}`;
    }

    usDateToBrDate = (usDate) => {
        let splitedDate = usDate.split("-"); 
        return `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0].substring(0,4)}`;
    }

    usTimestampToBrTimestamp = (usTimeStamp) => {
        let splitedTimestamp = usTimeStamp.split(" ");
        return `${this.usDateToBrDate(splitedTimestamp[0])} ${splitedTimestamp[1]}`;
    }

    //TODO checar se vai ser realmente necessario o use de __addZero, caso não remover do projeto.
    __addZero = (datePiece) => {
        return datePiece < 10 ? '0' + datePiece : datePiece;
    }
}

module.exports = new DateManager;