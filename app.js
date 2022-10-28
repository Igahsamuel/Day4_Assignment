// Exercise Level 1
// Declare an empty array;
const emptyArray = [];
// Declare an array with more than 5 number of elements
const elements = ['firstName', 'lastName', 21, 'isMarried', 'nigeria'];
// Find the length of the string
console.log(elements.length);
// Get the first item, the middle item and the last item of the array
console.log(elements[0], elements[2], elements[elements.length -1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['myName', true, 23, ['fruits', 'oranges'], {location: 'lagos', country: 'nigeria'}];
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Orancle', 'Amazon'];
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]);
// print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const notInvolved = itCompanies.slice(0, 6);
console.log(`${notInvolved} and ${itCompanies[itCompanies.length -1]} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Google')){
    console.log(itCompanies[itCompanies.indexOf('Google')])
}else{
    console.log('a company is not found')
}


// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice((itCompanies.length -3)))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));
// Remove the first IT company from the array
console.log(itCompanies.splice(0, 1))
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1));
// Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.length -1))
// Remove all IT companies
console.log(itCompanies.splice())

// Exercise level 2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(" "))
console.log(text.split(" ").length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart)
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)
// remove 'Honey' if you are allergic to honey
console.log(shoppingCart.splice(4, 1))
console.log(shoppingCart)
// modify Tea to 'Green Tea'
console.log(shoppingCart.splice(3, 1, 'Green Tea'));
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}else{
    console.log(countries.push('Ethiopia'))
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

  if(webTechs.includes('Sass')){
    console.log('Sass is a css preprocess')
  }else{
    let add = webTechs.push('Sass')
    console.log(webTechs)
  }

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: level 3
// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
let arrange = ages.sort()
let min = arrange[0]
let max = arrange[ages.length - 1]
console.log(min)
console.log(max)

// Find the median age(one middle item or two middle items divided by two)
const medianAge = ages.slice(4, 6)
let imela = (medianAge[0] + medianAge[1])/2
console.log(imela)

// Find the average age(all items divided by number of items)
let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/ages.length
console.log(average)

// Find the range of the ages(max minus min)
console.log(max - min)

// Compare the value of (min - average) and (max - average), use abs() method
let value1 = min - average;
let value2 = max - average;
if(value1 > value2){
    console.log((value1))
}else{
    console.log(value2)
}
// Slice the first ten countries from the countries array
console.log(countries.slice(1, countries.length -1))

// Find the middle country(ies) in the countries array
console.log(countries.slice(4, 6));

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const chineke = Math.ceil(countries.length / 2);
const king = countries.splice(0, chineke);
const king2 = countries.splice(-1);
if(king.length % 2 === 0){
    console.log('One more Country for the first half')
}else{
    console.log('it is even')
}