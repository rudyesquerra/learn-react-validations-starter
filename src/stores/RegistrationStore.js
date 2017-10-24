class RegistrationStore{
  costructor(){
    this.fields={
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    return this.errors
  }

  validate(){
    this.errors={}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')

  }

  validatePresence(fieldName){
    if(this.fieldName[fieldName] === ""){
      this.addError(fieldName, 'is Required')
    }
  }

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}

const store = new RegistrationStore()
export default store
