import DS from 'ember-data';

var attr = DS.attr;

var Skill = DS.Model.extend({
  title: attr(),
  description: attr(),
  lessons: DS.hasMany('lesson')
});

Skill.reopenClass({
  FIXTURES: [
    {id: 1, title: "3.NF.A.3.D", description: "Compare two fractions with the same numerator or the same denominator by reasoning about their size. Recognize that comparisons are valid only when the two fractions refer to the same whole. Record the results of comparisons with the symbols >, =, or <, and justify the conclusions, e.g., by using a visual fraction model."},
    {id: 2, title: "3.NF.A.3.C", description: "Express whole numbers as fractions, and recognize fractions that are equivalent to whole numbers. Examples: Express 3 in the form 3 = 3/1; recognize that 6/1 = 6; locate 4/4 and 1 at the same point of a number line diagram."},
    {id: 3, title: "3.NF.A.3.B", description: "Recognize and generate simple equivalent fractions, e.g., 1/2 = 2/4, 4/6 = 2/3. Explain why the fractions are equivalent, e.g., by using a visual fraction model."},
    {id: 4, title: "3.NF.A.3", description: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line."},
    {id: 5, title: "3.NF.A.2.B", description: "Represent a fraction a/b on a number line diagram by marking off a lengths 1/b from 0. Recognize that the resulting interval has size a/b and that its endpoint locates the number a/b on the number line."},
    {id: 6, title: "3.NF.A.2.A", description: "Represent a fraction 1/b on a number line diagram by defining the interval from 0 to 1 as the whole and partitioning it into b equal parts. Recognize that each part has size 1/b and that the endpoint of the part based at 0 locates the number 1/b on the number line."},
    {id: 7, title: "3.NF.A.2", description: "Understand a fraction as a number on the number line; represent fractions on a number line diagram."},
    {id: 8, title: "3.NF.A.1", description: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b."},
  ]
});

export default Skill;
