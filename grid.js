$(function() {

  $("#grid").jsGrid({
    width: "100%",
    height: "400px",
    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
    data: friends,
    fields: [
      { name: "Done", type: "checkbox", width: 20, title: "Done" },
      { name: "Name", type: "text", width: 150 },
      { name: "CompleteBy", type: "date", width: 50 },
      countries,
      { type: "control" }
    ]
  })  
})

var friends = [
  {
    Name: "John Adams",
    CompleteBy: "3-6-1993",
    Country: 1,
    Cool: false,
  }
];

var countries = {
  name: "Country",
  type: "select",
  items: [
    { Name: "", Id: 0 },
    { Name: "United States", Id: 1 },
    { Name: "France", Id: 2 },
    { Name: "United Kingdom", Id: 3 },
    { Name: "Spain", Id: 4 },
    { Name: "Mexico", Id: 5 }
  ],
  valueField: "Id",
  textField: "Name"
}