# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!([
  {id: 1, email: "mary.smith@baileymiddleschool.com", name: "Mary Smith"},
  {id: 2, email: "walter@jpwynnehighschool.com", name: 'Walter Smith' }
])

Objective.create!([
  {id: 1, title: "CCSS.1", description: "Compare two fractions with the same numerator or the same denominator by reasoning about their size. Recognize that comparisons are valid only when the two fractions refer to the same whole. Record the results of comparisons with the symbols >, =, or <, and justify the conclusions, e.g., by using a visual fraction model."},
  {id: 2, title: "CCSS.2", description: "Express whole numbers as fractions, and recognize fractions that are equivalent to whole numbers. Examples: Express 3 in the form 3 = 3/1; recognize that 6/1 = 6; locate 4/4 and 1 at the same point of a number line diagram."},
  {id: 3, title: "CCSS.3", description: "Recognize and generate simple equivalent fractions, e.g., 1/2 = 2/4, 4/6 = 2/3. Explain why the fractions are equivalent, e.g., by using a visual fraction model."},
  {id: 4, title: "CCSS.4", description: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line."},
  {id: 5, title: "CCSS.5", description: "Represent a fraction a/b on a number line diagram by marking off a lengths 1/b from 0. Recognize that the resulting interval has size a/b and that its endpoint locates the number a/b on the number line."},
  {id: 6, title: "CCSS.6.A", description: "Represent a fraction 1/b on a number line diagram by defining the interval from 0 to 1 as the whole and partitioning it into b equal parts. Recognize that each part has size 1/b and that the endpoint of the part based at 0 locates the number 1/b on the number line."},
  {id: 7, title: "CCSS.6.B", description: "Understand a fraction as a number on the number line; represent fractions on a number line diagram."},
  {id: 8, title: "CCSS.6.C", description: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b."},
])

Skill.create!([
  {id: 1, title: "3.NF.A.3.D", description: "Compare two fractions with the same numerator or the same denominator by reasoning about their size."},
  {id: 2, title: "3.NF.A.3.C", description: "Express whole numbers as fractions, and recognize fractions that are equivalent to whole numbers."},
  {id: 3, title: "3.NF.A.3.B", description: "Recognize and generate simple equivalent fractions."},
  {id: 4, title: "3.NF.A.3", description: "Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line."},
  {id: 5, title: "3.NF.A.2.B", description: "Represent a fraction a/b on a number line diagram by marking off a lengths 1/b from 0."},
  {id: 6, title: "3.NF.A.2.A", description: "Represent a fraction 1/b on a number line diagram by defining the interval from 0 to 1."},
  {id: 7, title: "3.NF.A.2", description: "Understand a fraction as a number on the number line; represent fractions on a number line diagram."},
  {id: 8, title: "3.NF.A.1", description: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned."},
])

Lesson.create!([
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
])

def populate_objectives_with_random_skills
  skill_ids = Skill.pluck(:id)
  Objective.all.each do |objective|
    [objective.pre_requisite_skills, objective.current_skills, objective.growth_skills].each do |group|
      group << Skill.find(skill_ids.sample(1 + Random.rand(skill_ids.max)))
    end
  end
end
populate_objectives_with_random_skills
