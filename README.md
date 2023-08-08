# crm

GIT LVL 2
Получение изменений с Github
git pull --rebase
Восстановление файла
git restore index.js
Восстановление файла
git log # логи
git log -p # логи с diff
Посмотреть коммиты файла
git blame README.md
Поиск подстроки в файлах
git grep строка
Откатить изменения до коммита
git reset
git reset --hard HEAD~
Дописать последний коммит
git commit --amend
путешествие по коммитам
git checkout <хеш коммита>
git checkout main # вернуться
путешествие по коммитам
git stash # убрать в stash
git stash pop # достать из stash
git log --graph # просмотр в виде графика git log --graph --oneline # просмотр в виде удобного графика

работа с ветками
git checkout -b {имя ветки} # создать новую ветку
git checkout main # перейти в ветку
git merge {имя ветки} # слить ветку