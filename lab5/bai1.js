        var person = {
            name: "Hải",
            age: 21,
            greet: function () {
                console.log("Hello, my name is " + this.name);
            }
        };

        console.log(person.greet());