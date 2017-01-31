function studentsint(){
  var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ]
  for (var num = 0; num < students.length; num++){
    console.log(students[num].first_name, students[num].last_name);
  }
}

function studentsintruct(){
  var users = {
   'Students': [
       {first_name:  'Michael', last_name : 'Jordan'},
       {first_name : 'John', last_name : 'Rosales'},
       {first_name : 'Mark', last_name : 'Guillen'},
       {first_name : 'KB', last_name : 'Tonel'}
    ],
   'Instructors': [
       {first_name : 'Michael', last_name : 'Choi'},
       {first_name : 'Martin', last_name : 'Puryear'}
    ]
   }
  console.log("Students");
  for (var num = 0; num < users.Students.length; num++){
    console.log(num+1+"-", users.Students[num].first_name, users.Students[num].last_name+' -', users.Students[num].first_name.length+users.Students[num].last_name.length);
  }
  console.log("Instructors");
  for (var num = 0; num < users.Instructors.length; num++){
    console.log(num+1+"-", users.Instructors[num].first_name, users.Instructors[num].last_name+' -', users.Instructors[num].first_name.length+users.Instructors[num].last_name.length);
  }
 }
studentsintruct();
