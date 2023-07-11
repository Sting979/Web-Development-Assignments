//Resume in JSON

let cv = [
    [
        {"Basic Information":{ 
        "Personal Information" : {
        "Identity": {
        "First Name" : "Keval",
        "Last Name" : "Vaishnav",
        "Gendre" : "Male"
        },
        "DoB" : "07/03/1998",
        "Native Language" : "Gujarati"
    },
    "Contact Information" : {
    "Mobile No" : 8200078306,
    "email Id" : "cd4399529@gmail.com",
    "Address" : [{"House No/ Area":"Sector-5A" }, {"Landmark" : "Nr. G2 Circle"},{"City":"Gandhinagar"}, {"State": "Gujarat"}, {"Country":"India"}
    ],
    "PIN code" : 382006
    }
    }
    },
    {"Educational Information":{
        "Bachelors" : {
            "College Name" : "LD College of Enginnering",
            "University Name":"Gujarat Technological University",
            "Branch Name" : "Mechnaical Engineering",
            "CPI": [{"Obtained": 8.23}, {"Maximum":10}],
            "Degree Name" : "Bachelor of Engineering"
        },
        
            "Higher Secondary Certificate": {
            "School Name" : "St. Xavier's High School",
            "Board": "GSHSEB/State",
            "Subject": "Science",
            "Group":"A",
            "Percentage": 91.5
        },
             "Secondary School Certificate" : {
                "School Name" : "SSSVHS",
                "Board": "GSHSEB/State",
                "Percentage": 92  
        }
        }
    },
    {"Employment Information" : [{
        "Company Name" : "L&T Power",
        "Industry" : "Thermal",
        "Position" : "Project Engineer",
        "Joining Date" : "30/12/2019",
        "Current Employment":"Yes"
    },
    {
        "Company Name" : "Siemens Energy",
        "Industry" : "Oil&Gas",
        "Position" : "GET",
        "Joining Date" : "14/10/2019",
        "Current Employment":"No",
        "End Date" : "30/12/2019"
    }
    ]
    }    
    ],
    {
        "Skills" : ["Project Management", "Project Coordination", "Contract Review","Cost Optimization","Vendor Development","Coding","Proofreading"]
    }
]

console.log(cv[1])

// For loop on JSON
//1
console.log("For")
console.log("method1")
let set1=[1,2,3,4,5,6,["a","b","c","d"],7,"@","*"]
let obj1={"A":1,"B":2,"C":3}
let text1="JSONobject"
let keys=(Object.keys(obj1))
for(i=0;i<set1.length;i++)
{
    console.log(set1[i])
}

for(i=0;i<keys.length;i++)
{
    console.log(obj1[keys[i]])
}

//2
console.log("method2")
let j=4
for(;j<set1.length;)
{
    console.log(set1[j])
    j++
}
j=0
for(;j<keys.length;)
{
    console.log(obj1[keys[j]])
    j++
}

// For in loop on JSON
console.log("For in")
for (a in obj1)
{
console.log(obj1[a])
}

for (let b in obj1)
{
console.log(obj1[b])
}
// For of loop 
console.log("For of")
for (c of set1)
{console.log(c)}
for (c of keys)
{console.log(obj1[c])}
for (c of text1)
{console.log(c)}
// For Each loop
console.log("For Each")

keys.forEach(myFunction)

function myFunction(item){
console.log(obj1[item])    
}


//Summary
console.log("For loop can be directly applied on arrays")
console.log("For in loop can be directly applied on objects")
console.log("For of loop can be directly applied on arrays and text")
console.log("For Each loop can be directly applied on arrays")

