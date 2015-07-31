import Ember from 'ember';
import startApp from '../helpers/start-app';
import keys from '../../utils/keys';

var application;

module('Acceptance: Hub', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('redirects to first skill', function(){
  visit('/hub');
  andThen(function() {
    equal(currentPath(), 'skill.show.index',
         "it redirects to first skill");

    var description = find(".lesson-descr .active").text();
    equal(/Understand a fraction 1\/b as the quantity formed by 1 part when a whole/.test(description), true,
          "description should be shown");

    var title = find("#dropdownMenu2").text();
    equal(/3\.NF\.A\.1/.test(title), true,
          "first skill title should be shown");
  });
});

test('skill section navigation works', function() {
  visit('/hub');

  andThen(function(){
    equal(find('#section-selectors a.active:visible').length, 1,
          "one section selector is active");
    equal(find('a:contains("Skill Groups")').hasClass('active'), true,
          "'Skill Groups' is active initially");

    click('a:contains("Pre-Assessment")');

    andThen(function(){
      equal(find('a:contains("Pre-Assessment")').hasClass('active'), true,
            "'Pre-Assessment' becomes active");
      equal(currentPath(), 'skill.show.pre-assesment',
           "it changes URL to match this section");
    });
  });
});

test('switching skills works', function(){
  visit('/hub');

  andThen(function(){
    click("#hub-sections-next-prev-controls .right");

    andThen(function(){
      var description = find(".lesson-descr .active").text();
      equal(/Understand a fraction as a number on the number line; represent fractions on a number line diagram\./.test(description), true,
            "second skill description should be shown");
        var title = find("#dropdownMenu2").text();
        equal(/3\.NF\.A\.2/.test(title), true,
              "second skill title should be shown");

      click("#hub-sections-next-prev-controls .left");
      andThen(function(){
        var description = find(".lesson-descr .active").text();
        equal(/Understand a fraction 1\/b as the quantity formed by 1 part when a whole/.test(description), true,
              "first skill description should be shown");

        var title = find("#dropdownMenu2").text();
        equal(/3\.NF\.A\.1/.test(title), true,
              "first skill title should be shown");
      });
    });
  });
});

test('skill URLs work', function(){
  visit('/skills/3.NF.A.2.B');
  andThen(function(){
        var title = find("#dropdownMenu2").text();
        equal(/3\.NF\.A\.2\.B/.test(title), true,
              "correct skill title should be shown");
  });
});

test('navigating to another skill when on "Pre-Assessment" page for current skill', function(){
  visit('/hub');

  andThen(function(){
    click("a:contains('Pre-Assessment')");
    click("#hub-sections-next-prev-controls .right");

    andThen(function(){
      var description = find(".lesson-descr .active").text();
      equal(/Understand a fraction as a number on the number line; represent fractions on a number line diagram\./.test(description), true,
            "second skill description should be shown");

      var title = find("#dropdownMenu2").text();
      equal(/3\.NF\.A\.2/.test(title), true,
            "second skill title should be shown");
    });
  });
});

test('skills/lessons dropdown visibilty', function(){
  visit('/hub');

  andThen(function(){
    testDropdownVisibility("hidden");

    click(".dropdown-toggle");

    andThen(function(){
      testDropdownVisibility("visible");

      click(".dropdown-menu .row");

      andThen(function(){
        testDropdownVisibility("visible");

        click(".overlay");

        andThen(function(){
          testDropdownVisibility("hidden");
        });
      });
    });
  });

});

test('skills/lessons dropdown changes skills', function(){
  visit('/hub');

  andThen(function(){
    click(".dropdown-toggle");

    andThen(function(){
      click(".dropdown-menu a:contains('Understand a fraction as a number on the number line; represent fractions on a number line diagram')");
      andThen(function(){
        var description = find(".lesson-descr .active").text();
        equal(/Understand a fraction as a number on the number line; represent fractions on a number line diagram\./.test(description), true,
              "description should be shown");
      });
    });
  });

});

test('skills/lessons dropdown supports switching' +
     'from skills to lessons and vice versa', function(){
  visit('/hub');

  andThen(function(){
    click(".dropdown-toggle");
    equal(find('#lessons-list').hasClass('hidden'), true,
    "lessons list should be hidden");

    click("a:contains('Lesson')");

    andThen(function(){
      equal(find('#lessons-list').hasClass('hidden'), false,
      "lessons list should be shown");
      equal(find('#skills-list').hasClass('hidden'), true,
      "skills list should be hidden");

      click("a:contains('Skill')");

      andThen(function(){
        equal(find('#skills-list').hasClass('hidden'), false,
        "skills list should be shown");
        equal(find('#lessons-list').hasClass('hidden'), true,
        "lessons list should be hidden");
      });
    });
  });
});

test('current skill description is editable', function(){
  visit('/hub');

  andThen(function(){
    var inputField = 'textarea';
    var editableText = '.skill.current p.description';

    assertTextEditable(inputField, editableText);
  });
});

test('current skill description in header is editable', function(){
  visit('/hub');

  andThen(function(){
    var inputField = 'textarea';
    var editableText = '.lesson-descr p.description.edit.active';

    assertTextEditable(inputField, editableText);
  });
});

test('current skill title in header is editable', function(){
  visit('/hub');

  andThen(function(){
    var inputField = 'input';
    var editableText = 'button.dropdown-toggle';

    assertTextEditable(inputField, editableText);
  });
});

test("editing current objective's title in header updates URL", function(){
  visit('/hub');

  andThen(function(){
    var inputField = 'input';
    var editableText = 'button.dropdown-toggle';
    var initialURL  = currentURL();

    click('#nav .edit-icon');
    andThen(function(){
      click(editableText);
      equal(find(inputField).length, 1,
            "input field is present");
      fillIn(inputField, '3.NEW.TITLE');
      andThen(function(){
        equal(currentURL(), '/skills/3.NEW.TITLE',
              'URL should be updated in real time');

        keyEvent(inputField, 'keydown', keys.escape);
        andThen(function(){
          equal(currentURL(), initialURL,
                'escape reverts to initial URL');
        });
      });
    });
  });
});

function assertTextEditable(inputField, editableText){
    equal(find(inputField).length, 0,
          "input field is not present");
    click('#nav .edit-icon');

    andThen(function(){
      click(editableText);

      andThen(function(){
        equal(find(inputField).length, 1,
              "input field is present");
        fillIn(inputField, 'this is bananas');
        keyEvent(inputField, 'keydown', keys.escape);

        andThen(function(){
          var text = find(editableText).text();
          equal(/this is bananas/.test(text), false,
                "editable text is set to default with escape");
          equal(find(inputField).length, 0,
                "input field is not present");
          click(editableText);

          andThen(function(){
            fillIn(inputField, 'this is bananas');
            keyEvent(inputField, 'keydown', keys.enter);

            andThen(function(){
              equal(find(inputField).length, 0,
                    "input field is not present");
              equal(find(editableText).length, 1,
                    "editable text is present");
              var text = find(editableText).text();
              equal(/this is bananas/.test(text), true,
                    "input field content is changed with enter");
            });
          });
        });
      });
    });
}

function testDropdownVisibility(visibility){
  var visible = visibility === "visible" ? true : false;

  equal(find('.dropdown-toggle').hasClass('active'), visible);
  equal(find('.dropdown-custom').hasClass('open'), visible);
  equal(find('.modal-open').length, visible ? 1 : 0);
  equal(find('.overlay').is(':visible'), visible);
}

