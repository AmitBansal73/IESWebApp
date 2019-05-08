import {Question} from '../model/question'

export const QUESTIONS : Question[] = [
    {
        id:1,
        question: ' If  $\\phi(x) =\\int_{x^2}^0\\sqrt{tdt}$ , then what would the value of  ${{d\\phi}\\over{dx}}$ ',
        answer:'Answer :- $2{x^2}$',
        level:2
    },
    {
        id:2,
        question: 'The function $f(x) = {x^3} - 6{x^2} + 9x + 25$ has a maxima at x = p and a minima at x = q . Find value of p and q.',
        answer:'Answer :- A maxima at x= 1 and a minima at x = 3',
        level:3
    },
    {
        id:3,
        question: ' A square is inscribed in a triangle with the two shorter sides p and q such that the square has a common right angle with the triangle. What is the perimeter of the square?',
        answer:'Answer :- ${({p^2}{q^2})}\\over{(p+q)^2}$',
        level:2
    },
    {
        id:4,
        question: 'You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.'+
        'You also can write expressions in display mode as follows: $\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$.',
        answer:'$$A = (  {array}{ccc}1 & 2 &3\\3 & 4 &6 \\4& 6 & 12{array}).$$',
        level:2
    },
    {
        id:5,
        question: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'+
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.  $\\sqrt{b^2-4ac} \\over 2a.$',
        answer:'This is an answer to the question above as  $b \\ne 0$, The Correct Answer is '+
        '$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$',
        level:1
    },
    {
        id:6,
        question: 'The value of  $\\int_0^{5p}(2-\\sin x) dx$  is.',
        answer:'This is an answer to the question above as  $b\\ne0$  , The Correct Answer is'+
        '$x = {-b\\pm\\sqrt{b^2-4ac}\\over 2a}.$',
        level:3
    },
];