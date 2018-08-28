$(function() {

  $("#grid").jsGrid({
    width: "100%",
    height: "400px",
    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
    data: gridElements,
    fields: [
      { name: "Done", type: "checkbox", width: 20, title: "Done" },
      { name: "Task", type: "text", width: 150 },
      { name: "CompleteBy", type: "date", width: 50, title: "Complete By" },
      project,
      { type: "control" }
    ]
  })  
})

var gridElements = [
  {
    Task: "Make a Todo list",
    CompleteBy: "3-6-1993",
    Project: 1,
    Done: false,
  }
];

var project = {
  name: "Project",
  type: "select",
  items: [
    { Name: "", Id: 0 },
    { Name: "Work", Id: 1 },
    { Name: "Home", Id: 2 },
    { Name: "Volunteering", Id: 3 },
    { Name: "Self Improvement", Id: 4 },
    { Name: "Community", Id: 5 }
  ],
  valueField: "Id",
  textField: "Name"
}