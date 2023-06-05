var person = {
    firstname: "Hai",
    lastname: "Ngoc",
    setLastName: function(_lastname) {
        this.lastname = _lastname;
    },
    setFirstName: function(_firstname) {
        this.firstname = _firstname;
    },
    getFullName: function() {
        return `${this.lastname} ${this.firstname}`;
    },
};

person.setLastName("Anh");
person.setFirstName("Thơ");
console.log(person.getFullName());