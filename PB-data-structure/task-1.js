// Target array
const people = []

// Source data
const ages = [18, 27, 31, 44]
const bornIn = [2000, 1993, 1989, 1976]
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"]
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"]
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"]
const jobs = ["Software Engineer", "Doctor", "Teacher", "Pilot"]

// Your code here!

console.log(people)

for (let i = 0; i < ages.length; i++) {
  people.push({
    age: ages[i],
    bornIn: bornIn[i],
    fullName: `${firstNames[i]} ${lastNames[i]}`,
    location: cities[i],
    job: jobs[i],
  })
}

console.log(people)