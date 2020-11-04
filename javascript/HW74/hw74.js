(function() {
    'use strict';

    class student {

        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }



    }

    function printStudents(ffll, ...students) {

        students.forEach(students => {

            if (ffll) {
                console.log(students.firstName, students.lastName);
            } else {
                console.log(students.lastName, students.firstName);
            }
        });
    } // const severalStudents = ['Dave', 'John', 'Joe'];


    function copy(student) {

        let { firstName, lastName, ...rest } = student;

        [firstName, lastName] = [lastName, firstName];

        return {
            firstName,
            lastName,

        };

    }


    const classA = [new student('Dave', 'Smith ', 22, 95), new student('John', 'Doe', 19, 88), new student('Harry', 'Nelson', 20, 99)];
    printStudents(false, classA[0], classA[2]);

    console.log(copy(classA[0]));
})();