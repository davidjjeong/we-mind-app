import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [{day: 'Mon', score: 90},{ day: 'Tues', score: 75},{day: 'Wed', score: 30},
    {day: 'Thurs', score: 75}, {day: 'Fri', score: 87}, {day: 'Sat', score: 67}, {day: 'Sun', score: 76}
]

export const MoodChart = () => {
    return(
        <LineChart height={300} width={400} data={data}>
            <Line type="monotone" dataKey="score" stroke="#1afff" strokeWidth="5px" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="day" />
            <YAxis />
        </LineChart>
    );
}