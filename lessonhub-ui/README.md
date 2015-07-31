# Lesson Hub UI

## CSS/HTML style guide

Please reuse as much of the current CSS rules as possible. If you're writing CSS rules from scratch, name the file
after the HTML page you're building the rules for. For HTML page named `hub.html`, CSS would go into `css/hub.css`.

Global rules are placed in `css/style.css` and are applied on all pages. Page-specific rules take precedence.

Third party CSS is placed in `css/vendor`.

----

Always use *kebab-case* for naming classes and ids.

* Bad names: `SomeNewClassName`, `someNewClassName`, `some_new_class_name`
* Good name: `some-new-class-name`

----

Elements that occur exactly once inside a page should use IDs, otherwise, use classes. When in doubt, use a class name.

* Good candidates for ids: header, footer, modal popups.
* Bad candidates for ids: navigation, item listings, item view pages (ex: issue view).

When styling a component, start with an element + class namespace (prefer class names over ids), prefer direct descendant selectors by default, and use as little specificity as possible. Here is a good example:

```html
<ul class="category-list">
  <li class="item">Category 1</li>
  <li class="item">Category 2</li>
  <li class="item">Category 3</li>
</ul>
```

```css
.category-list { // element + class namespace
  // Direct descendant selector > for list items
  > li {
    list-style-type: disc;
  }

  // Minimal specificity for all links
  a {
    color: #f00;
  }
}
```
---

* If you must use an id selector (`#selector`) make sure that you have no more than one in your rule declaration. A rule like `#header .search #quicksearch { ... }` is considered harmful.

* When modifying an existing element for a specific use, try to use specific class names. Instead of `.listings-layout.bigger` use rules like `.listings-layout.listings-bigger`. It's easier to search for the later.

* The class names `disabled`, `mousedown`, `danger`, `hover`, `selected`, and `active` should always be namespaced by an element (`button.selected` is a good example).

# Git rules

We use Git as our source control tool. Before starting any new work, please make sure you're working with the latest version - pull the latest stuff with
`git pull --rebase`.

After you've done what needs to be done, make sure to commit. Here are the general rules for commit messages you should follow:

* use common verbs to describe what the commit is doing – recommended verbs are: add, remove, update, fix

* commit often, commit early - it encourages you to have periodic checkpoints and makes everything easier to understand for your coworkers - good commit messages encapsulate smallest changes that logically go together, which makes them easily revertable

* don’t panic and don’t change published history (with `git push --force`), use `git revert` instead

* keep commit history linear, always pull with `git pull --rebase` – this avoids weird commit messages like “merge branch master of github.com:chairseven/lessonhub” – to avoid writing `--rebase` every time, use this command which will make every git pull automatically rebase: `git config --global branch.autosetuprebase always`

* respect formatting of existing commit messages
