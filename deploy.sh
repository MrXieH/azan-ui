rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'update'
git branch -M master
git remote add origin git@github.com:MrXieH/azan-ui-website.git
git push -f -u origin master

git remote add originGitee git@gitee.com:MrXieH/azan-ui-website.git
git push -f -u originGitee master
git@gitee.com:MrXieH/azan-ui-website.git
cd -
echo https://mrxieh.github.io/azan-ui-website/index.html