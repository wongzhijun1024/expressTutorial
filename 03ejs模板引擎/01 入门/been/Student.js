function Student(Name,Age){

    this.name=Name;
    this.age=Age;
    this.setName=function(Name){
        this.name=Name;
    }
    this.getName=function(){
        return this.name;
    }

    this.setAge=function(Age){
        this.age=Age;
    }
    this.getAge=function(){
        return this.age;
    }
}

module.exports=Student;