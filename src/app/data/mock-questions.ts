import {Question} from '../model/question'

export const QUESTIONS : Question[] = [
    {
        id:1,
        question: '$\int x^2dx = 2x + C$ is worth \$2.00. ',
        answer:'$$A = \left(  \begin{array}{ccc}1 & 2 &3\\3 & 4 &6 \\4& 6 & 12\end{array}\right).$$',
        level:2
    },
    {
        id:2,
        question: 'Even display math works:$$A = \left(  \begin{array}{cc}1 & 2 \\3 & 4\end{array}\right).$$',
        answer:'This $sum_{i=1}^n(x_i^2 - {x}^2)$ is an answer to the question above as, The Correct Answer is $x= {-b \\pm \\sqrt{b^2-4ac}\\over 2a}$',
        level:3
    },
    {
        id:3,
        question: 'You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.'+
        'You also can write expressions in display mode as follows: $sum_{i=1}^n(x_i^2 - \\overline{x}^2)$.',
        answer:'$$A = \left(  \begin{array}{ccc}1 & 2 &3\\3 & 4 &6 \\4& 6 & 12\end{array}\right).$$',
        level:2
    },
    {
        id:4,
        question: 'You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.'+
        'You also can write expressions in display mode as follows: $sum_{i=1}^n(x_i^2 - \\overline{x}^2)$.',
        answer:'$$A = \left(  \begin{array}{ccc}1 & 2 &3\\3 & 4 &6 \\4& 6 & 12\end{array}\right).$$',
        level:2
    },
    {
        id:5,
        question: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'+
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.  $sqrt{b^2-4ac} \\over 2a.$',
        answer:'This is an answer to the question above as  $b \ne 0$, The Correct Answer is'+
        '$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$',
        level:1
    },
    {
        id:6,
        question: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'+
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.  $sqrt{b^2-4ac} \over 2a.$',
        answer:'This is an answer to the question above as  $b \ne 0$, The Correct Answer is'+
        '$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$',
        level:3
    },
];