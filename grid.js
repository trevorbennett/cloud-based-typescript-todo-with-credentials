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
      { name: "Name", type: "text", width: 100 },
      { name: "Age", type: "number", width: 50 },
      countries,
      { name: "Cool", type: "checkbox", width: 40, title: "Is Cool", sorting: false },
      { type: "control" }
    ]
  })  
})

var friends = [
  {
    Name: "John Adams",
    Age: 36,
    Country: 1,
    Cool: false,
  },
  {
    Name: "Alexander Hamilton",
    Age: 27,
    Country: 1,
    Cool: true,
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