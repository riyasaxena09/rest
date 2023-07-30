import classes from './AvailableMeals.module.css';
const DUMMY_MEALS=[
    {
        id:'1',
        name:'Riya',
        description:"tasty",
        price:'$345'
    },
    {
        id:'1',
        name:'Riya',
        description:"tasty",
        price:'$345'
    },
    {
        id:'1',
        name:'Riya',
        description:"tasty",
        price:'$345'
    }
]
function AvailableMeals(){
let mealslist=DUMMY_MEALS.map((meals=><><h2>{meals.name}</h2><div>{meals.description}</div><li>{meals.price}</li><hr></hr></>))
return(
    <section className={classes.meals}>
       <ul>
            {mealslist}
            
            </ul>
    </section>
)
}
export default AvailableMeals;