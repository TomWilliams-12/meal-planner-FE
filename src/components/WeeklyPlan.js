const WeeklyPlan = ({ weeklyPlan }) => {
    return (
        <>
            {weeklyPlan.map((wp, index) => (
                <h1 key={index}>{wp.meal.name}</h1>

            ))}

            <table className='table-auto w-full border-separate border'>
                <thead>
                <tr>
                    <td className='border'>Mon</td>
                    <td className='border'>Tue</td>
                    <td className='border'>Wed</td>
                    <td className='border'>Thu</td>
                    <td className='border'>Fri</td>
                    <td className='border'>Sat</td>
                    <td className='border'>Sun</td>
                </tr>
                </thead>
                <tbody>
                <tr className='mon border'>

                </tr>
                <tr className='tue border'>

                </tr>
                <tr className='wed border'>

                </tr>
                <tr className='thu border'>

                </tr>
                <tr className='fri border'>

                </tr>
                <tr className='sat border'>

                </tr>
                <tr className='sun border'>

                </tr>
                </tbody>
            </table>
        </>
    );
};

export default WeeklyPlan;