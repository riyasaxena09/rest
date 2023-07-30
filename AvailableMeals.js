import classes from './AvailableMeals.module.css';
const DUMMY_MEALS=[
    {
        id:'1',
        name:'Riya',
        description:"tasty",
        price:345
    },
    {
        id:'1',
        name:'Riya',
        description:"tasty",
        price:345
    },
    {
        id:'1',
        name:'Riya',
        description:"tasty",
        price:345
    }
]
function AvailableMeals(){
let mealslist=DUMMY_MEALS.map((meals=><li>{meals.name}</li>))
return(
    <section className={classes.meals}>
        <ul>
            {mealslist}
        </ul>
    </section>
)
}
export default AvailableMeals;