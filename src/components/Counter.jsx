// eslint-disable-next-line react/prop-types
const Counter = ({cpt, hc, name='Counter name'}) => {
    return (
        <div className="flex justify-between items-center m-2 bg-slate-300 p-2 rounded-lg">
            <h1 className="text-2xl text-green-500">{name} : {cpt}</h1>
        <button className="bg-blue-500
       hover:bg-blue-700
        text-white
        font-bold
         py-2 px-4
         rounded"
        onClick={hc}>+</button>
</div>
    )
}

export default Counter;
            