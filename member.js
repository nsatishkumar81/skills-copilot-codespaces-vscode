function skillsMember() {
    let member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        displaySkills: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            }, this);
        }
    };
    member.displaySkills();
}