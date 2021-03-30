    class Mobile {
    constructor() {
        this.battery = 0;
        this.status = false;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
    }
    checkStatus() {
        return this.status;
    }
    switchStatus() {
        this.status = true;
    }
    chargeBattery() {
        this.battery = 2;
    }
    setMessage(message) {
        if (this.status) {
            this.changeBattery();
            this.message = message;
        }
    }
    getMessage() {
        if (this.status) {
            this.changeBattery();
            return this.message;
        }
    }
    sendMessage(message, obj) {
        if (this.battery) {
            this.changeBattery();
            obj.setMessage(message);
            obj.inbox.push(message);
            this.outbox.push(message);
        }
    }
    changeBattery() {
        if(this.battery > 0) {
            this.battery--
        } else this.status = false;
    }

    }

    let iphone = new Mobile();
    iphone.chargeBattery();
    let android = new Mobile();
    android.chargeBattery();
    iphone.switchStatus();
    android.switchStatus();

    iphone.sendMessage('Hello', android);
    let a = android.getMessage();
    console.log(a);
    console.log(iphone.outbox);

    iphone.sendMessage('Hello11', android);
    console.log(android.inbox);
    console.log(iphone.changeBattery());










