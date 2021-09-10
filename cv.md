# Morokhoeva Inna
## About 
I have loved programming since I was in high school. It took me a long time to find my direction, and I found myself in frontend. Now I'm actively learning everything I need for this profession. In the summer I took a stage#0 course from RSschool.
## Education
MSTU STANKIN: Mechanical Engineering (2019 - 2024)
## Work experince
Yandex: Support Service
## Skills
* Adobe Photoshop
* Figma
* HTML/CSS
* JavaScript
* Git
## Example code
```
module.exports = function toReadable (number) {
    const simpleCardinalNumbers = ['zero','one','two','three','four', 'five',
    'six','seven','eight','nine','ten','eleven','twelve', 'thirteen',
    'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['', '','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const hundreds = ['','one hundred', 'two hundred', 'three hundred', 'four hundred',
    'five hundred','six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

        if (number < 20) {
            return simpleCardinalNumbers[number];
        }
        if (number % 10 !== 0  && number < 100) {
            return (dozens[Math.floor(number / 10)] + ' ' + simpleCardinalNumbers[number % 10]);
        }
        if (number % 10 == 0 && number < 100) {
            return dozens[number/10];
        }
        if (number % 100 == 0) {
            return hundreds[number/100];
        }
        if ((number % 100) < 20 ) {
            return (hundreds[Math.floor(number/100)] + ' ' + simpleCardinalNumbers[number % 100]);
        }
        if (number % 10 == 0) {
            return (hundreds[Math.floor(number/100)] + ' ' + dozens[Math.floor(number / 10) % 10]);
        }
        if (number % 100 !== 0) {
            return (hundreds[Math.floor(number/100)] + ' ' + dozens[Math.floor(number / 10) % 10] + ' ' + simpleCardinalNumbers[number % 10]);
        }
};
```
## English level
A2
## Contacts
* My telegram: @nesvaren
* My e-mail: inna020108@gmail.com