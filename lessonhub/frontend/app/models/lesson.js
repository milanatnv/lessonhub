import DS from 'ember-data';

var attr = DS.attr;

var Lesson = DS.Model.extend({
  title: attr(),
  skills: DS.hasMany('skill')
});

Lesson.reopenClass({
  FIXTURES: [
    {id: 1, skill_ids: [ 5 ], title: "Know number names and the count sequence"},
    {id: 2, skill_ids: [ 4, 2, 1 ], title: "Count to tell number of objects"},
    {id: 3, skill_ids: [ 3 ], title: "Compare numbers"},
    {id: 4, skill_ids: [ 5, 6 ], title: "Identify and describe shapes"},
    {id: 5, skill_ids: [ 5 ], title: "Classify objects and count the number of objecs in categories"},
    {id: 6, skill_ids: [ 6, 7, 8, 5 ], title: "Analyze, compare, create, and compose shapes"},
    {id: 7, skill_ids: [ 7, 1, 3 ], title: "Describe and compare measurable attributes"},
    {id: 8, skill_ids: [ 8, 5 ], title: "Represent and solve problems involving addition and subtraction"},
    {id: 9, skill_ids: [ 3 ], title: "Add and subtract within 20"},
    {id: 10, skill_ids: [ 2 ], title: "Understand and apply properties of operations and the relationship between addition and subtract on"},
    {id: 11, skill_ids: [ 1, 2 ], title: "Work with numbers 11–19 to gain foundations for place value"},
    {id: 12, skill_ids: [ 7 ], title: "Understand addition as putting together and adding to, and understand subtraction as taking apart and taking from"},
  ]
});

export default Lesson;
