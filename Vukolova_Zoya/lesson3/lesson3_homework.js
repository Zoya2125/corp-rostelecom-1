<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //задание вывести простые числа от 1 до 100 с помощью цикла while 


    </script>
    <script>
        let a = 1;
        while (a <= 100) {
            if (a === 1) {
                console.log('число', a);
            } else {
                let b = 2;
                while (b !== a) {
                    if (a % b === 0) {
                        break;
                    }
                    b++;
                    if (a === b) {
                        console.log('число ', a);
                    }
                }
            }
            a++;
        }

        // задание 2 
        const shop = [
            ["подушка ", 1500, "RUB", 1],
            ["книга", 852, "RUB", 2],
            ["ножницы", 1250, "RUB", 1],
            ["цветок", 435, "RUB", 1],
            ["книга2", 959, "RUB", 3],
        ];

        function countBasketPrice(items) {
            let ammount = 0;
            for (let i = 0; i < items.length; i++) {
                ammount += items[i][1] * items[i][3];
            }
            return ammount;
        }

        console.log('сумма товаров в корзине: ', countBasketPrice(shop), shop[0][2]);
        //Задание 3
        for (let i = 0; i < 10; console.log(i++)) {
        }
    </script>
    <script crs="./lesson3_homework.js"></script>
</head>

<body>

</body>

</html>
