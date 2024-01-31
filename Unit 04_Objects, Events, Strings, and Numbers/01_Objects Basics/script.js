const building = {
    Name: "Someting Hotel",
    Location: "Indiana",
    Created: "1950",


    Identify: function () {
        return this.Name + " " + this.Location + " " + this.Created;
    }
};

console.log(building.Name);
console.log(building.Location);
console.log(building.Created);
console.log(building.Identify());

building.Name = "Something Hotel"
building.Location = "Indiana"
building.Created = "1950"
console.log(building.Name);
console.log(building.Location);
console.log(building.Created);
console.log(building.Identify());