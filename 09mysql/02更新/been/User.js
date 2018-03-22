function User(id,name,passwd) {

    this.id=id;
    this.name=name;
    this.passwd=passwd;

    this.setId=function (Id) {
        this.id=Id;
    }
    this.getId=function ( ) {
        return this.id;
    }

    this.setName=function(Name) {
        this.name=Name;
    }
    this.getName=function(){
        return this.name;
    }

    this.setPasswd=function(passwd) {
        this.passwd=passwd;
    }
    this.getPasswd=function(){
        return this.passwd;
    }
}

module.exports=User