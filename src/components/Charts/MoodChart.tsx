import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [{day: 'M', score: 90},{ day: 'T', score: 75},{day: 'W', score: 30},
    {day: 'T', score: 75}, {day: 'F', score: 87}, {day: 'S', score: 67}, {day: 'S', score: 76}
]

const colors = ['#BF94E4', '#C698E0', '#CD9BDC', '#D49FD8', '#DBA3D4',
                '#E3A6D0', '#EAAACC', '#F1AEC8', '#F8B1C4', '#FFB5C0'];

export const MoodChart = () => {
    return(
        <ResponsiveContainer height={300} width="100%">
            <BarChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="5 5" vertical={false} />
                <XAxis dataKey="day" stroke="#000" axisLine={false} tickLine={false} />
                <YAxis stroke="#000" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar type="monotone" dataKey="score" radius={[30,30,30,30]}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[~~(entry.score/10)]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}