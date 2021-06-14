## Presentation link
https://docs.google.com/presentation/d/1oLshxyEJhEMNTtrs8F3AdTbvfapM6Dp7uvH3Fp97bbM/edit?usp=sharing

## Homework
1. Создать ветку `js-best-practices` от главной ветки вашего тестового проекта
2. Пробежаться по пунктам, которые обсуждали на лекции, и пофиксить, всё, что найдете
3. Сделать папку `src/utils`, добавить туда `map.js` и `reduce.js` (именно JS). Реализовать фунуции со следующими сигнатурами

    ```ts
    map<T, V>(callback: (element: T) => V, collection: T[]): V[];
    filter<T>(predicate: (element: T) => boolean, collection: T[]): T[];
    ```
    
    Работать функции должны идентично `Array.prototype.map` и `Array.prototype.filter`, единственная разница - в порядке аргументов. Реализация обоих должна состоять из одной лишь функции `reduce`
4. Добавить JSDoc документацию к вышеописанным функциям (могут появиться трудности с реализацией generic параметров T и V, generic'и повторим на второй лекции по TS, так что можете это задание отложить до следующей лекции)
5. Сделать Pull Request из новой ветки в главную, чтобы я мог его посмотреть и покомментировать
