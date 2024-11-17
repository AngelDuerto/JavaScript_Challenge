function createPatiant(name, ssn){
    const PII = {
        name: name,
        ssn: ssn
    };

    return {
        getName: function(){
            return PII.name;
        },
        
        getSSN: function(){
            return PII.ssn
        }
    };
}

const patient2 = createPatiant("John", "123-45-6789")

console.log(patient2.names); 
console.log(patient2.ssn); 
console.log(patient2.getName());
console.log(patient2.getSSN()); 

