#! /usr/bin/env bash
#
# CircleCI doesn't support deployments with
#
#     rake <command>
#
# so this script is used. (http://i.imgur.com/rEbjpCT.png)

if ! git config user.email; then
  git config user.email "server@circleci.com"
  git config user.name  "CI server"
fi

git checkout -b staging
git merge master -m "Merging master for deployment"

rm -rf backend/public/assets
cd frontend
./node_modules/.bin/ember build -prod --output-path ../backend/public
cd ..

git add -A
git commit -m "Prepare for deployment"

if ! git remote | grep heroku >/dev/null; then
  git remote add heroku git@heroku.com:lessonhub-staging.git
fi

git push heroku `git subtree split --prefix backend staging`:master --force
heroku run rake db:migrate --app lessonhub-staging
git checkout master
git branch -D staging
