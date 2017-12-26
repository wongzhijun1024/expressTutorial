function User(name,passwd) {
    this.name=name;
    this.passwd=passwd;

    this.setName=function (Name) {
        this.name=Name;
    }
    this.getName=function () {
      return this.name;
    }

    this.setPasswd=function (Passwd) {
        this.passwd=Passwd;
    }
    this.getPasswd=function () {
        return passwd;
    }
}

module.exports=User;